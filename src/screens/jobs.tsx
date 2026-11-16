import { useMemo, useState } from "react";
import { KBadge, KButton, KCard, KEmptyState, KInput, KTabs } from "../components/k";
const jobs = [
  {
    title: "Lead Film Editor",
    company: "Placements24",
    place: "Midrand",
    score: 82,
    missing: "Avid",
    state: "Recommended",
  },
  {
    title: "Video Editor",
    company: "Frame South",
    place: "Johannesburg",
    score: 76,
    missing: "After Effects",
    state: "Saved",
  },
  {
    title: "Senior Post Producer",
    company: "Northstar Studios",
    place: "Cape Town",
    score: 71,
    missing: "Budgeting",
    state: "Applied",
  },
];
export default function Jobs({ navigate }: { navigate: (screen: string) => void }) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("Recommended");
  const filtered = useMemo(
    () =>
      jobs.filter(
        (job) =>
          (tab === "Recommended" || job.state === tab) &&
          `${job.title} ${job.company} ${job.place}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, tab],
  );
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">LIHLO JOBS</span>
          <h1>Find work that fits your cut.</h1>
          <p>Match scores based on your portfolio and proven skills.</p>
        </div>
      </div>
      <div className="toolbar modular-toolbar">
        <KInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Role, skill, company or place"
        />
        <KTabs
          items={["Recommended", "Saved", "Applied", "Interview"]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {filtered.length ? (
        <div className="jobs-list">
          {filtered.map((job) => (
            <KCard className="modular-job" key={job.title}>
              <div>
                <span className="eyebrow">
                  {job.company} · {job.place}
                </span>
                <h2>{job.title}</h2>
                <p>
                  <b>Missing Skills:</b> {job.missing}
                </p>
              </div>
              <div>
                <KBadge>Match Score {job.score}%</KBadge>
                <KButton onClick={() => navigate("job-detail")}>View match</KButton>
              </div>
            </KCard>
          ))}
        </div>
      ) : (
        <KEmptyState
          title="No jobs found"
          detail="Clear the search or choose another pipeline."
          action={
            <KButton
              onClick={() => {
                setQuery("");
                setTab("Recommended");
              }}
            >
              Clear filters
            </KButton>
          }
        />
      )}
    </div>
  );
}
