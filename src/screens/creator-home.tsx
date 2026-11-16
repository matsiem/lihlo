import { KButton, KCard, KProgress } from "../components/k";
export default function CreatorHome({ navigate }: { navigate: (s: string) => void }) {
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">CREATOR HOME · MEMBER</span>
          <h1>Welcome back, Alex.</h1>
          <p>Two reviews, one interview and one overdue invoice need your eye.</p>
        </div>
        <KButton onClick={() => navigate("room")}>+ New Room</KButton>
      </div>
      <div className="creator-layout">
        <section>
          <div className="feature-grid">
            {[
              ["Rooms", "2 reviews due"],
              ["Deliverables", "1 due Oct 14"],
              ["Jobs", "82% match"],
              ["Portfolio", "4 live projects"],
              ["Business", "R42,000 invoiced"],
              ["Daily Rate", "R2,000 / day"],
            ].map((x, i) => (
              <button
                className={`feature-tile f${i}`}
                key={x[0]}
                onClick={() =>
                  navigate(["room", "deliverables", "jobs", "portfolio", "business", "rate"][i])
                }
              >
                <h2>{x[0]}</h2>
                <p>{x[1]}</p>
              </button>
            ))}
          </div>
          <KCard>
            <div className="section-heading">
              <div>
                <span className="eyebrow">TODAY</span>
                <h2>Studio pulse</h2>
              </div>
            </div>
            <div className="pulse-list">
              <span>2 reviews due</span>
              <span>Interview · Oct 18 · 09:00</span>
              <span>Invoice #102 · R14,000 overdue</span>
            </div>
          </KCard>
        </section>
        <aside>
          <KCard>
            <span className="eyebrow">BUSINESS SNAPSHOT</span>
            <h2>R42,000 invoiced</h2>
            <p>R28,000 paid · Utilization 68%</p>
            <KProgress value={68} />
            <KButton onClick={() => navigate("business")}>Open operations</KButton>
          </KCard>
          <KCard>
            <span className="eyebrow">QUICK ACTIONS</span>
            {["New Room", "New Deliverable", "New Quote"].map((x) => (
              <KButton variant="secondary" key={x}>
                {x}
              </KButton>
            ))}
          </KCard>
        </aside>
      </div>
    </div>
  );
}
