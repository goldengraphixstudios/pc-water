create extension if not exists pgcrypto;

create table if not exists public.cms_admin_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  cover_image_url text,
  read_time text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text not null default '',
  content text not null default '',
  sector text not null default '',
  location text not null default '',
  scope text not null default '',
  hero_image_url text,
  gallery_urls text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'published')),
  featured boolean not null default false,
  seo_title text,
  seo_description text,
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_post_tags (
  post_id uuid not null references public.cms_posts(id) on delete cascade,
  tag_id uuid not null references public.cms_tags(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, tag_id)
);

create table if not exists public.cms_project_tags (
  project_id uuid not null references public.cms_projects(id) on delete cascade,
  tag_id uuid not null references public.cms_tags(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (project_id, tag_id)
);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists cms_posts_touch_updated_at on public.cms_posts;
create trigger cms_posts_touch_updated_at
before update on public.cms_posts
for each row
execute function public.touch_updated_at();

drop trigger if exists cms_projects_touch_updated_at on public.cms_projects;
create trigger cms_projects_touch_updated_at
before update on public.cms_projects
for each row
execute function public.touch_updated_at();

create or replace function public.is_cms_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.cms_admin_emails
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

alter table public.cms_admin_emails enable row level security;
alter table public.cms_tags enable row level security;
alter table public.cms_posts enable row level security;
alter table public.cms_projects enable row level security;
alter table public.cms_post_tags enable row level security;
alter table public.cms_project_tags enable row level security;

drop policy if exists "cms admin can read own whitelist row" on public.cms_admin_emails;
create policy "cms admin can read own whitelist row"
on public.cms_admin_emails
for select
to authenticated
using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

drop policy if exists "public can read tags" on public.cms_tags;
create policy "public can read tags"
on public.cms_tags
for select
to anon, authenticated
using (true);

drop policy if exists "public can read post tag joins" on public.cms_post_tags;
create policy "public can read post tag joins"
on public.cms_post_tags
for select
to anon, authenticated
using (true);

drop policy if exists "public can read project tag joins" on public.cms_project_tags;
create policy "public can read project tag joins"
on public.cms_project_tags
for select
to anon, authenticated
using (true);

drop policy if exists "public can read published posts" on public.cms_posts;
create policy "public can read published posts"
on public.cms_posts
for select
to anon, authenticated
using (status = 'published');

drop policy if exists "public can read published projects" on public.cms_projects;
create policy "public can read published projects"
on public.cms_projects
for select
to anon, authenticated
using (status = 'published');

drop policy if exists "cms admins manage tags" on public.cms_tags;
create policy "cms admins manage tags"
on public.cms_tags
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "cms admins manage posts" on public.cms_posts;
create policy "cms admins manage posts"
on public.cms_posts
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "cms admins manage projects" on public.cms_projects;
create policy "cms admins manage projects"
on public.cms_projects
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "cms admins manage post tag joins" on public.cms_post_tags;
create policy "cms admins manage post tag joins"
on public.cms_post_tags
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

drop policy if exists "cms admins manage project tag joins" on public.cms_project_tags;
create policy "cms admins manage project tag joins"
on public.cms_project_tags
for all
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

create index if not exists cms_posts_status_idx on public.cms_posts(status, published_at desc);
create index if not exists cms_projects_status_idx on public.cms_projects(status, published_at desc);

-- Seed at least one approved admin email after creating your Supabase auth user:
-- insert into public.cms_admin_emails (email) values ('you@example.com');
