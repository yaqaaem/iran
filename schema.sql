
CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  payer_contact TEXT,
  country TEXT NOT NULL,
  display_name TEXT,
  note TEXT,
  amount REAL NOT NULL,
  currency TEXT NOT NULL,
  agent_id INTEGER NOT NULL,
  build_version TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_reports_created_at ON reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reports_country ON reports(country);
CREATE INDEX IF NOT EXISTS idx_reports_agent_id ON reports(agent_id);
CREATE INDEX IF NOT EXISTS idx_reports_currency ON reports(currency);
