import { KBadge, KButton, KCard, KInput, KProgress } from "../components/k";
export default function RecruiterHome({ navigate }: { navigate: (s: string) => void }) {
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">PLACEMENTS24 · MEMBER</span>
          <h1>Recruiter Home</h1>
          <p>Proof-first hiring with match and watch-rate signals.</p>
        </div>
        <KButton>Post a job</KButton>
      </div>
      <div className="recruiter-grid">
        <section>
          <KCard>
            <h2>Lead Film Editor</h2>
            <p>R350K–R520K · 24 applicants · 6 viewed</p>
            <KProgress value={72} />
          </KCard>
          <KCard>
            <h2>Video Editor</h2>
            <p>R25K · 18 applicants</p>
          </KCard>
        </section>
        <section>
          <div className="toolbar">
            <KInput placeholder="Search Premiere Pro · Midrand · Match 80%+" />
          </div>
          {[
            "Alex · 82% match · 85% watched",
            "Lerato · 79% match · 62% watched",
            "Neo · 76% match · New",
          ].map((x) => (
            <KCard className="candidate" key={x}>
              <div>
                <KBadge>{x.split("·")[1]}</KBadge>
                <h3>{x}</h3>
              </div>
              <div>
                <KButton variant="secondary" onClick={() => navigate("job-detail")}>
                  Watch Showreel
                </KButton>
                <KButton>Interview</KButton>
              </div>
            </KCard>
          ))}
        </section>
      </div>
    </div>
  );
}
