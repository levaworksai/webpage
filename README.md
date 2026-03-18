# LevaWorks Website

Marketing website for **levaworksAI, Inc.** — AI-powered custom applications for small businesses.

**Live:** [levaworks.ai](https://levaworks.ai)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Backend | Convex |
| Email | Resend (via `noreply.levaworks.ai`) |
| Hosting | Vercel |
| Domain | levaworks.ai (DNS via Squarespace) |

## Project Structure

```
webpage/
├── Logos/                    # Brand assets (Lever Split + V Fulcrum variants)
├── site/                     # Next.js application (Vercel root directory)
│   ├── convex/               # Convex backend
│   │   ├── contacts.ts       # Contact form mutation + email trigger
│   │   ├── emails.ts         # Resend email notification action
│   │   └── schema.ts         # Database schema
│   ├── public/logos/          # V Fulcrum logo assets (favicons + full logos)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx     # Root layout with Convex provider
│   │   │   ├── page.tsx       # Homepage (single-page marketing site)
│   │   │   └── globals.css    # Brand tokens + Tailwind config
│   │   └── components/
│   │       ├── Navbar.tsx     # Fixed nav with mobile hamburger
│   │       ├── Hero.tsx       # Full-viewport hero with tagline
│   │       ├── Problem.tsx    # SMB pain points
│   │       ├── Services.tsx   # 3-tier service ladder
│   │       ├── Results.tsx    # Stats + Brown Sugar case study
│   │       ├── About.tsx      # Co-founders + principles
│   │       ├── Contact.tsx    # Form (stored in Convex)
│   │       ├── Footer.tsx     # Logo, socials, legal
│   │       ├── FadeIn.tsx     # Scroll animation wrapper
│   │       └── ConvexClientProvider.tsx
│   └── .env.local             # Convex deployment URL (not committed)
└── LevaWorks Go To Market Strategy.docx
```

## Site Sections

1. **Hero** — V Fulcrum logo, "Your leverage." tagline, dual CTAs
2. **Problem** — Pain points grid for SMBs
3. **Services** — Digital Front Door, Custom Commerce Apps, Steward Retainer
4. **Results** — 59% YOY growth stat, Brown Sugar Bakery case study
5. **About** — Co-founders (Andrés Cook & Robert Dawson), 3 principles
6. **Contact** — Form that saves to Convex and emails both founders via Resend
7. **Footer** — levaworksAI, Inc. branding, social links

## Brand

- **Logo:** V Fulcrum variant (dark + light versions)
- **Colors:** Dark `#181B22`, Gold accent `#C8872B`, Light `#F5F2ED`
- **Voice:** Confident, warm, direct, builder energy

## Environment Variables

### Vercel
- `NEXT_PUBLIC_CONVEX_URL` — Convex deployment URL

### Convex
- `RESEND_API_KEY` — Resend API key for email notifications

## Development

```bash
cd site
npm install
npm run dev          # Start Next.js dev server
npx convex dev       # Start Convex dev server (separate terminal)
```

## Deployment

Pushes to `main` auto-deploy to Vercel. Convex functions sync via `npx convex dev` (dev) or `npx convex deploy` (production).

## Future Plans

- Customer login portal under `/(portal)` route group with Convex auth
- Case studies pages
- Web apps served from the main site for customers
