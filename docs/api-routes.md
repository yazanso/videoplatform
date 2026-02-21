# API Route Design (v1)

Base URL: `/api/v1`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

## Feed + Discovery
- `GET /feed/for-you`
- `GET /feed/following`
- `POST /feed/impression`
- `POST /feed/watch-event`
- `GET /discover/trending`
- `GET /discover/explore`
- `GET /search?q=&type=video|user|tag`

## Video
- `POST /videos/upload/init` (signed URL)
- `POST /videos/upload/complete`
- `POST /videos` (publish metadata)
- `GET /videos/:id`
- `PATCH /videos/:id`
- `DELETE /videos/:id`
- `POST /videos/:id/like`
- `DELETE /videos/:id/like`
- `POST /videos/:id/save`
- `DELETE /videos/:id/save`
- `POST /videos/:id/share`

## Comments
- `GET /videos/:id/comments`
- `POST /videos/:id/comments`
- `POST /comments/:id/replies`
- `POST /comments/:id/like`

## Profile + Social Graph
- `GET /users/:handle`
- `GET /users/:handle/videos`
- `POST /users/:id/follow`
- `DELETE /users/:id/follow`
- `GET /users/:id/analytics`

## Creator Monetization
- `GET /creator/revenue/summary`
- `GET /creator/revenue/events`
- `POST /creator/tips`
- `GET /creator/affiliate/clicks`

## Admin
- `GET /admin/overview`
- `POST /admin/moderation/actions`
- `POST /admin/users/:id/ban`
- `POST /admin/users/:id/shadow-ban`
- `POST /admin/trending/override`
- `POST /admin/feature-flags`
