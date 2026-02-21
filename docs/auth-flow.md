# Authentication Flow

1. User registers/logs in with email + password (or OAuth provider later).
2. API returns:
   - short-lived access token (JWT, 15 min)
   - rotating refresh token (httpOnly secure cookie)
3. Middleware validates access token per request.
4. Refresh endpoint rotates refresh token and invalidates old token family on suspicious reuse.
5. Optional device sessions page to revoke active sessions.
6. WebSocket auth uses access token handshake + periodic re-validation.
7. Sensitive actions (payout settings, admin actions) require step-up verification.
