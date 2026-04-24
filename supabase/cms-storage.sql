insert into storage.buckets (id, name, public)
values ('cms-media', 'cms-media', true)
on conflict (id) do update
set public = excluded.public;

drop policy if exists "Public can view cms media" on storage.objects;
create policy "Public can view cms media"
on storage.objects
for select
to public
using (bucket_id = 'cms-media');

drop policy if exists "CMS admins can upload cms media" on storage.objects;
create policy "CMS admins can upload cms media"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'cms-media'
  and public.is_cms_admin()
);

drop policy if exists "CMS admins can update cms media" on storage.objects;
create policy "CMS admins can update cms media"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'cms-media'
  and public.is_cms_admin()
)
with check (
  bucket_id = 'cms-media'
  and public.is_cms_admin()
);

drop policy if exists "CMS admins can delete cms media" on storage.objects;
create policy "CMS admins can delete cms media"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'cms-media'
  and public.is_cms_admin()
);
