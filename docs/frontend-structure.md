# Frontend Component Structure

## App Router Pages

- `app/feed/page.tsx` → For You / Following feed
- `app/explore/page.tsx` → category discovery, trends, search
- `app/profile/[handle]/page.tsx` → profile + pinned + playlists
- `app/creator/studio/page.tsx` → upload + analytics dashboard
- `app/admin/page.tsx` → moderation + platform analytics

## Core Components

- `components/feed/VerticalFeed.tsx`
- `components/feed/VideoCard.tsx`
- `components/feed/EngagementRail.tsx`
- `components/feed/CommentsDrawer.tsx`
- `components/discover/TopicClusterGrid.tsx`
- `components/creator/AnalyticsPanel.tsx`
- `components/creator/UploadWizard.tsx`
- `components/ui/SkeletonVideo.tsx`
- `components/ui/GlassCard.tsx`

## UX Patterns

- Use virtualization for feed list.
- Preload next 2 videos (`IntersectionObserver` + low-priority fetch).
- Double-tap animation for like feedback.
- Press-and-hold pause gesture.
- Keep bottom nav + creator CTA sticky.
- Dark mode first with premium gradient accents.
