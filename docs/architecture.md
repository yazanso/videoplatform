# System Architecture

## 1) High-Level Services

- **Client App (`apps/web`)**
  - Vertical feed experience
  - Explore/search/trending
  - Creator studio and analytics
- **API Gateway (`apps/api`)**
  - Auth, user, social graph, content, interactions
  - Feature flags and experimentation APIs
- **Ranking Service (`apps/api/src/services/ranking.ts`)**
  - Candidate generation
  - Multi-stage scoring
  - Re-ranking + diversity constraints
- **Media Pipeline Workers (`apps/api/src/workers`)**
  - FFmpeg transcode to HLS renditions
  - Thumbnail extraction, scene cuts, quality checks
  - AI caption + hashtag generation hooks
- **Notification Service**
  - WebSocket events + async fan-out
- **Moderation Service**
  - Rule based + AI moderation classifiers
- **Monetization Service**
  - Ad slots, creator payout ledger, tip events

## 2) Folder Architecture

```txt
apps/
  api/
    prisma/
      schema.prisma
    src/
      modules/
        auth/
        users/
        videos/
        feed/
        comments/
        notifications/
        monetization/
        moderation/
        admin/
      routes/
        auth.routes.ts
        feed.routes.ts
        videos.routes.ts
        discover.routes.ts
        comments.routes.ts
        admin.routes.ts
      services/
        ranking.ts
        recommendation.ts
        moderation.ts
      middleware/
        auth.ts
        rate-limit.ts
      workers/
        transcode.worker.ts
        ai-enrichment.worker.ts
      app.ts
  web/
    app/
      (auth)/
      feed/
      explore/
      profile/[handle]/
      creator/studio/
      admin/
    components/
      feed/
      comments/
      creator/
      discover/
      monetization/
      ui/
    lib/
      api-client.ts
      websocket.ts
      analytics.ts
packages/
  shared/
    src/
      ranking.ts
      contracts.ts
      enums.ts
infra/
  docker-compose.yml
  k8s/ (planned)
docs/
```

## 3) Scalability Strategy

- Stateless API pods behind L7 load balancer.
- Redis for:
  - feed candidate caches
  - session/token revocation checks
  - rate limiting buckets
- PostgreSQL with read replicas for analytics-heavy reads.
- Object storage (S3-compatible) + CDN for all media assets.
- Worker queues (BullMQ/Kafka later) for async transcode, enrichment, and moderation.
- Event-driven expansion path: split ranking, notifications, messaging into independent services.

## 4) Security & Compliance

- JWT access + rotating refresh tokens.
- Rate limiting per IP + per account + per device fingerprint.
- Signed upload URLs for direct-to-storage uploads.
- Content hash + antivirus scan before publish.
- Privacy controls and data export/delete endpoints for GDPR/CCPA readiness.
- Audit logs for moderation and admin actions.
