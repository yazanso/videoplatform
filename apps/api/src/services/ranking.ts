export type CandidateMetrics = {
  watchTimeRatio: number;
  completionRate: number;
  rewatchRate: number;
  avgViewDuration: number;
  engagementRate: number;
  saveRate: number;
  profileVisitRate: number;
  ctr: number;
  fastScrollRate: number;
  earlyDropRate: number;
  spamReportRate: number;
  clickbaitPenalty: number;
  ageHours: number;
};

export function computeVideoScore(metrics: CandidateMetrics): number {
  const base =
    0.35 * metrics.watchTimeRatio +
    0.2 * metrics.completionRate +
    0.12 * metrics.rewatchRate +
    0.1 * metrics.avgViewDuration +
    0.08 * metrics.engagementRate +
    0.05 * metrics.saveRate +
    0.05 * metrics.profileVisitRate +
    0.05 * metrics.ctr;

  const freshness = Math.exp(-0.015 * metrics.ageHours);

  const integrityPenalty =
    0.4 * metrics.fastScrollRate +
    0.25 * metrics.earlyDropRate +
    0.2 * metrics.spamReportRate +
    0.15 * metrics.clickbaitPenalty;

  const integrity = Math.max(0.1, 1 - integrityPenalty);

  return base * freshness * integrity;
}
