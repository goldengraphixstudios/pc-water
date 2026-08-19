# PC Water Infrastructure Website

This repository powers [pcwater.com.au](https://pcwater.com.au), the public website for PC Water Infrastructure.

PC Water works across Australia on engineered water storage, treatment and asset-lifecycle projects. The website is designed to do more than describe those services: it gives councils, contractors, industrial operators and remote communities a practical way to understand their options, review completed work and start a project conversation.

## What Is Here

- Service and industry pages for water storage, treatment, tank installation, inspections, relining, maintenance, fire-water compliance and remote delivery.
- A project portfolio backed by real project information and compressed site imagery.
- Resource articles, downloadable material and search-focused educational content.
- Tank compliance and repair-versus-reline-versus-replace assessment tools.
- Dedicated campaign funnels for tank remediation and remote water infrastructure.
- Project enquiry, campaign lead and resource-download forms.
- A protected CMS for managing projects, resources, media, enquiries and leads.

## How The Site Works

The application uses Next.js 16, React 19, TypeScript and Tailwind CSS. Supabase provides CMS content and enquiry storage. Resend handles transactional email, Pipedrive receives qualified enquiries, Abstract validates email addresses, and Tawk.to provides website chat. Google Analytics and structured search metadata are included in the production site.

Secrets do not belong in this repository. Production credentials are managed through the PC Water Vercel project.

## Running It Locally

Use Node.js 24 to match the production runtime.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Some CMS, email and CRM features require the corresponding environment variables; the public static pages can still be developed without sending real enquiries.

Before committing a change, run:

```bash
npm run lint
npm run build
```

## Main Environment Variables

Only variable names are documented here. Values must remain in approved local or Vercel environments.

```text
SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SECRET_KEY
RESEND_API_KEY
RESEND_FROM_EMAIL
PROJECT_ENQUIRY_NOTIFY_TO
PIPEDRIVE_API_TOKEN
ABSTRACT_EMAIL_API_KEY
```

## Content And Operations

Most public routes live in `app/`, reusable interface sections live in `components/`, and integration or data-access code lives in `lib/`. Project and resource content should normally be maintained through the CMS rather than hard-coded into pages.

Useful operational scripts are available for CMS imports, project metadata synchronisation, media uploads and Pipedrive backfills. Review a script before running it against production data.

## Deployment

The default branch is `main`. Production is hosted in the [PC Water Vercel project](https://vercel.com/pc-water/pc-water) and served through [pcwater.com.au](https://pcwater.com.au).

Treat every production release as a real customer-facing change:

1. Keep unrelated local changes out of the commit.
2. Run lint and a production build.
3. Check the affected page on desktop and mobile.
4. Verify forms and integrations without creating duplicate live leads.
5. Confirm the Vercel deployment is ready and the production domain responds correctly.

## Working On The Project

Keep the language direct, useful and technically credible. PC Water's audience includes engineers, asset managers, councils, builders and operators who need clear answers, not generic marketing copy. Preserve real project details, avoid unsupported performance claims and never commit client credentials, private contact data or exported lead records.
