CREATE TABLE IF NOT EXISTS ActivitySummary (
  id TEXT PRIMARY KEY NOT NULL,
  day TEXT NOT NULL,
  startedAt INTEGER NOT NULL,
  distanceKm REAL NOT NULL,
  durationSeconds INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS ActivitySummary_startedAt ON ActivitySummary(startedAt);
