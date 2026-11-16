import { useState } from "react";
import { KBadge, KButton, KCard, KDialog, KInput, KProgress, KToast } from "../components/k";
export default function StudioHome() {
  const [invite, setInvite] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">NORTHSTAR STUDIO · ADMIN</span>
          <h1>Studio Workspace</h1>
          <p>5 members · Studio Plan R999 · Personal / Studio workspace</p>
        </div>
        <KButton onClick={() => setInvite(true)}>Invite Creator</KButton>
      </div>
      <div className="studio-grid">
        <KCard>
          <span className="eyebrow">TEAM</span>
          <h2>5 members</h2>
          {[
            "Alex · Lead Editor · Online",
            "Nandi · Producer · Busy",
            "Thabo · Director · Online",
            "Mia · Coordinator · Available",
          ].map((x) => (
            <p className="team-row" key={x}>
              {x}
            </p>
          ))}
        </KCard>
        <KCard>
          <span className="eyebrow">PIPELINE</span>
          {[
            ["Nike", 68],
            ["Tech", 45],
            ["Doc", 30],
          ].map((x) => (
            <div className="pipeline-row" key={x[0]}>
              <b>
                {x[0]} · {x[1]}%
              </b>
              <KProgress value={Number(x[1])} />
            </div>
          ))}
        </KCard>
        <KCard>
          <span className="eyebrow">STUDIO COSTS</span>
          <h2>R999 / month</h2>
          <p>Covers five seats. Alex Creator Pro and Room storage included.</p>
          <KButton variant="secondary">Manage seats</KButton>
        </KCard>
        <KCard>
          <KBadge>1 OVERDUE</KBadge>
          <h2>3 approvals awaiting</h2>
          <p>12 applicants · 3 match above 80%</p>
        </KCard>
      </div>
      <KDialog open={invite} title="Invite Creator" onClose={() => setInvite(false)}>
        <label className="field-label">
          Email or WhatsApp
          <KInput placeholder="alex@example.com" />
        </label>
        <label className="control-toggle">
          <input type="checkbox" defaultChecked />
          <span>Studio covers Creator Pro R349 and storage</span>
        </label>
        <div className="dialog-actions">
          <KButton
            onClick={() => {
              setInvite(false);
              setToast("Invite sent · Studio Pays ON");
            }}
          >
            Send invite
          </KButton>
        </div>
      </KDialog>
      <KToast message={toast} />
    </div>
  );
}
