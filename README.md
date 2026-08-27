# ProtectMyHomes.net

A lead-generation website for home security services in the U.S. Visitors compare top security providers (ADT, Vivint, SimpliSafe, Ring, Brinks Home, Frontpoint, Cove, Abode) and submit a quote request; each submission is captured as a lead.

Built with React Router v8 (Framework Mode, SSR) and Tailwind CSS v4.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Landing page — hero with ZIP capture, how it works, benefits, testimonials, FAQ |
| `/quote` | Lead-generation form (contact info, address, home details, TCPA consent) |
| `/thank-you` | Post-submission confirmation |
| `/partners` | Partner provider profiles |
| `/about` | Company mission, values, and team |
| `/contact` | Contact form, phone, and email |
| `/privacy-policy` | Privacy policy incl. TCPA consent language |
| `/terms-of-service` | Terms of service |
| `/do-not-sell` | CCPA/CPRA opt-out request form |

## Development

```bash
npm install
npm run dev        # dev server
npm run typecheck  # generate route types + tsc
npm run build      # production build
npm run start      # serve production build
```

## Where leads go

Submissions to `/quote` are validated server-side in the route action and saved by `app/lib/leads.server.ts`:

1. **Local file** — appended to `data/leads.json` (gitignored; contains PII).
2. **Webhook (optional)** — if the `LEAD_WEBHOOK_URL` environment variable is set, each lead is also POSTed as JSON to that URL. Point it at your CRM, Zapier, boberdoo, LeadConduit, or any lead-distribution endpoint.

```bash
# example
LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxx/yyyy npm run start
```

Replace the file storage with a database when you're ready — only `app/lib/leads.server.ts` needs to change.

## Before going live

- Replace the placeholder phone number `(888) 555-0123` and emails (`support@` / `privacy@protectmyhomes.net`) with your real contact info (search the `app/` folder).
- Have a lawyer review the Privacy Policy, Terms of Service, and TCPA consent language for your specific lead-selling arrangements.
- Confirm partner brands you actually have agreements with, and update `app/lib/partners.ts`.
- Update the team members in `app/routes/about.tsx`.
- Wire the contact and do-not-sell forms to your email/ticketing system (currently logged server-side).

## Deployment

A `Dockerfile` is included. Build and run:

```bash
docker build -t protectmyhomes .
docker run -p 3000:3000 -e LEAD_WEBHOOK_URL=... protectmyhomes
```
