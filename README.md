# Vertical Short-Form Video Platform Blueprint

This repository contains a production-oriented monorepo scaffold for a vertical video platform (TikTok/Reels/Shorts hybrid) designed for scale, experimentation, and monetization.

## Stack Decisions

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Backend:** Node.js + NestJS-style modular API (Express adapter), PostgreSQL, Redis, WebSocket gateway.
- **Media:** S3-compatible object storage + FFmpeg processing workers.
- **Infra:** Docker Compose for local environment, CDN-ready architecture for prod.

## Monorepo Structure

```txt
apps/
  web/        # Next.js application (consumer + creator UX)
  api/        # API + ranking + moderation services
packages/
  shared/     # Shared types, DTO contracts, scoring enums
infra/        # Local infra + deployment templates
docs/         # Architecture, wireframes, algorithm model, roadmap
```

## Deliverables Included

1. Full folder architecture (`docs/architecture.md`)
2. Database schema (`apps/api/prisma/schema.prisma`)
3. API routes (`docs/api-routes.md` + `apps/api/src/routes`)
4. Ranking algorithm pseudo-code + weighting model (`docs/ranking-model.md`)
5. Frontend component structure (`docs/frontend-structure.md` + `apps/web/components`)
6. Key UI wireframe descriptions (`docs/wireframes.md`)
7. Authentication flow (`docs/auth-flow.md`)
8. Deployment instructions (`docs/deployment.md` + `infra/docker-compose.yml`)
9. Startup-grade roadmap + bonus AI features (`docs/roadmap.md`)

## Quick Start

```bash
docker compose -f infra/docker-compose.yml up -d
```

Then scaffold app dependencies and run each service:

```bash
# web
cd apps/web && npm install && npm run dev

# api
cd apps/api && npm install && npm run dev
```

> This repo is intentionally architecture-first and can be incrementally hardened into a production deployment.
