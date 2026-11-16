import { KButton, KCard } from "../components/k";
export default function PublicLanding({ navigate }: { navigate: (screen: string) => void }) {
  return (
    <div className="marketing-page">
      <section className="marketing-hero">
        <span className="eyebrow">STUDIO OS FOR AFRICAN CREATORS</span>
        <h1>
          See Every Cut Clearly.
          <br />
          <em>Bona. Hlola. Qeda.</em>
        </h1>
        <p>Review, deliver, get hired and run your studio from one clear workspace.</p>
        <div>
          <KButton onClick={() => navigate("onboarding")}>Start free</KButton>
          <KButton variant="secondary" onClick={() => navigate("client")}>
            Open client review
          </KButton>
        </div>
      </section>
      <section className="feature-triptych">
        {[
          ["Rooms", "Time-coded client review"],
          ["Deliverables", "Specs, versions, approvals"],
          ["Jobs", "Proof-based opportunities"],
        ].map((x, i) => (
          <KCard className={`feature-${i}`} key={x[0]}>
            <span>0{i + 1}</span>
            <h2>{x[0]}</h2>
            <p>{x[1]}</p>
          </KCard>
        ))}
      </section>
      <section className="how-grid">
        <h2>Upload. Share on WhatsApp. Approve.</h2>
        {["Upload your cut", "Collect clear feedback", "Deliver and update your portfolio"].map(
          (x, i) => (
            <article key={x}>
              <b>0{i + 1}</b>
              <h3>{x}</h3>
            </article>
          ),
        )}
      </section>
      <section className="pricing-grid">
        {["Free · R0", "Creator · R199", "Creator Pro · R349", "Studio · R999"].map((x) => (
          <KCard key={x}>
            <h3>{x}</h3>
            <KButton variant="secondary">Choose plan</KButton>
          </KCard>
        ))}
      </section>
    </div>
  );
}
