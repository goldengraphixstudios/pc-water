# Supabase CMS Setup

This project now includes a custom CMS for:

- Articles and resources
- Projects
- Tagging for both content types

## 1. Add environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 2. Apply the SQL schema

Run the SQL in [supabase/cms-schema.sql](./supabase/cms-schema.sql) inside the Supabase SQL editor.

This creates:

- `cms_admin_emails`
- `cms_tags`
- `cms_posts`
- `cms_projects`
- `cms_post_tags`
- `cms_project_tags`
- RLS policies for public reads and admin writes

## 3. Enable media uploads

Run the SQL in [supabase/cms-storage.sql](./supabase/cms-storage.sql) inside the Supabase SQL editor.

This creates a public `cms-media` storage bucket and limits upload/update/delete access to authenticated CMS admins.

## 4. Create an admin user

Create the user in Supabase Auth first, then whitelist the email:

```sql
insert into public.cms_admin_emails (email)
values ('your-admin-email@example.com');
```

## 5. Sign in

Go to `/cms/login` and sign in with that Supabase Auth account.

## 6. Runtime note

This CMS requires a real Next.js server runtime.

It is not compatible with a pure GitHub Pages static-only deployment because it uses:

- Supabase auth
- Next.js API routes
- server-rendered CMS pages

Use a server-capable deployment target such as:

- Vercel
- Cloudflare Workers/Pages with server support
- another Node-hosted Next.js runtime
