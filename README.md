# Kaveri HealthTech Website

A static, multi-page website for Kaveri HealthTech built with Next.js 16, React and TypeScript. The public content lives directly in the route components; there is no database, CMS, server API, or runtime environment configuration.

## Run locally

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

Next.js writes the static site to `out/`. Deploy that directory to any static file host or CDN. There is no Node server to run after the export.

## Routes

- `/` — Home
- `/services/` — Services
- `/about/` — About Kaveri
- `/locations/` — Location information
- `/contact/` — Contact details and email-based enquiry form
- `/careers/`, `/gallery/`, `/blogs/`, `/privacy-policy/`, `/terms/`

The contact form opens the visitor’s email app; it does not submit information to an API.
