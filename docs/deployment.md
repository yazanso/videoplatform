# Deployment Instructions

## Local Development

1. Start dependencies:
   ```bash
   docker compose -f infra/docker-compose.yml up -d
   ```
2. Configure `DATABASE_URL`, `REDIS_URL`, `S3_*`, `JWT_*` env vars.
3. Run DB migrations (`prisma migrate deploy`).
4. Start API and web services.

## Production Topology

- **Web:** Vercel or containerized Next.js on Kubernetes.
- **API:** Kubernetes deployment with HPA based on CPU + queue lag.
- **Postgres:** Managed service with PITR + read replicas.
- **Redis:** Managed Redis with persistence and failover.
- **Storage:** S3-compatible bucket + CDN in front of HLS/video assets.
- **Queue/Workers:** Dedicated worker autoscaling deployment.
- **Observability:** OpenTelemetry + Prometheus + Grafana + centralized logging.

## Security Hardening

- WAF + bot mitigation.
- Signed URL uploads with short TTL.
- Secrets in vault manager (not env files in CI).
- Disaster recovery runbook with RTO/RPO targets.
