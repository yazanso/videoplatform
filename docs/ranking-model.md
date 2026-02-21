# Ranking Model

## Multi-Stage Pipeline

1. **Candidate Generation**
   - Follow graph candidates
   - Topic-cluster neighbors (embedding similarity)
   - Global trending candidates
   - Cold-start exploration candidates
2. **Quality Gate**
   - Hard filters: policy violations, severe spam probability, blocked creators
3. **Score Computation**
   - Weighted utility model + confidence multipliers
4. **Re-rank**
   - Diversity constraints: creator, topic, duration buckets
   - Session fatigue controls
5. **Serve + Learn**
   - Online metrics + bandit feedback loop

## Mathematical Weighting Model

For a user **u** and video **v**:

`Score(u,v) = Base(v) * Personalization(u,v) * Freshness(v) * Integrity(v)`

Where:

### Base(v)

`Base(v) = 0.35*WTR + 0.20*Completion + 0.12*Rewatch + 0.10*AvgViewDur + 0.08*Engagement + 0.05*Save + 0.05*ProfileVisit + 0.05*CTR`

- WTR = watch time ratio (`watch_time / duration`)
- Completion = completion rate
- Rewatch = replay count / viewers
- AvgViewDur = normalized by duration percentile
- Engagement = weighted likes/comments/shares

### Personalization(u,v)

`Personalization = 1 + (0.30*TopicAffinity + 0.20*CreatorAffinity + 0.20*SessionIntent + 0.15*GraphProximity + 0.15*FormatPreference)`

### Freshness(v)

`Freshness = exp(-lambda * age_hours)` where `lambda` is category-dependent.

### Integrity(v)

`Integrity = 1 - (0.40*FastScroll + 0.25*EarlyDrop + 0.20*SpamReports + 0.15*ClickbaitPenalty)`

## Cold Start Logic

- New creator receives controlled impression budget by category.
- Bayesian prior smooths sparse metrics:
  - `smoothed_completion = (alpha*global_mean + n*observed_completion)/(alpha+n)`
- Budget scales up if quality confidence interval exceeds threshold.

## Anti-Clickbait

- Compare thumbnail CTR with post-click retention.
- If high CTR but low 3-second and 10-second retention, apply increasing penalties.

## Pseudocode

```ts
for candidate in candidates:
  if violatesPolicy(candidate): continue

  base = weightedBaseMetrics(candidate)
  personalization = userAffinity(user, candidate)
  freshness = exp(-lambda(candidate.category) * ageHours(candidate))
  integrity = 1 - negativeSignalPenalty(candidate)

  score = base * personalization * freshness * integrity

  if isNewCreator(candidate.creator):
    score *= coldStartBoost(candidate.creator)

  score *= banditExplorationFactor(user, candidate)
  push(scoredCandidates, { candidate, score })

ranked = diversifyByTopicAndCreator(sortDescending(scoredCandidates))
return ranked.take(pageSize)
```

## A/B Testing

- Feature flag each coefficient group.
- Keep guardrail metrics: session abandonment, report rate, creator concentration.
- Use sequential testing or CUPED-adjusted experiments for faster confidence.
