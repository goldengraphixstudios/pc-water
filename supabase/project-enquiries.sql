create table if not exists public.project_enquiries (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  company text,
  email text not null,
  phone text,
  state text,
  suburb_town text,
  industry text,
  service text,
  project_stage text,
  timeline text,
  budget text,
  tank_type text,
  message text not null,
  source text not null default 'website',
  submission_status text not null default 'new' check (submission_status in ('new', 'reviewed', 'closed')),
  email_delivery_status text not null default 'skipped' check (email_delivery_status in ('sent', 'failed', 'skipped')),
  email_delivery_error text,
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz
);

alter table public.project_enquiries enable row level security;

drop policy if exists "anon can insert project enquiries" on public.project_enquiries;
create policy "anon can insert project enquiries"
on public.project_enquiries
for insert
to anon, authenticated
with check (true);

drop policy if exists "cms admins read project enquiries" on public.project_enquiries;
create policy "cms admins read project enquiries"
on public.project_enquiries
for select
to authenticated
using (public.is_cms_admin());

drop policy if exists "cms admins delete project enquiries" on public.project_enquiries;
create policy "cms admins delete project enquiries"
on public.project_enquiries
for delete
to authenticated
using (public.is_cms_admin());

drop policy if exists "cms admins update project enquiries" on public.project_enquiries;
create policy "cms admins update project enquiries"
on public.project_enquiries
for update
to authenticated
using (public.is_cms_admin())
with check (public.is_cms_admin());

create index if not exists project_enquiries_submitted_at_idx
  on public.project_enquiries(submitted_at desc);

create index if not exists project_enquiries_email_idx
  on public.project_enquiries(email);
