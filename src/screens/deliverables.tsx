import { useState } from "react";
import { KBadge, KButton, KCard, KDialog, KInput, KSelect, KToast } from "../components/k";
import { Deliverables as LegacyDeliverables } from "./legacy";

export default function Deliverables() {
  const [share, setShare] = useState(false);
  const [access, setAccess] = useState("VIEWER");
  const [toast, setToast] = useState<string | null>(null);
  const rows = [
    ["ProRes 422 HQ", "MASTER", "84.2 GB"],
    ["H.264 Screener", "REVIEW", "2.4 GB"],
    ["DCP", "CINEMA", "124 GB"],
    ["FCPXML 1.9", "CONFORM", "14 KB"],
    ["OTIO", "CONFORM", "28 KB"],
    ["CMX 3600 EDL", "CONFORM", "8 KB"],
    ["QC Audit JSON", "AUDIT", "42 KB"],
  ];
  return (
    <>
      <LegacyDeliverables />
      <section className="screen download-matrix">
        <KCard>
          <div className="section-heading">
            <div>
              <span className="eyebrow">DOWNLOAD PAGE · /d/LIHLO-DEMO-2026-00001</span>
              <h2>Mahlo Conform Packet</h2>
            </div>
            <KButton onClick={() => setShare(true)}>Share 48-Hour Deck</KButton>
          </div>
          <div className="matrix-grid">
            {rows.map((row) => (
              <div key={row[0]}>
                <span>
                  <b>{row[0]}</b>
                  <small>
                    {row[1]} · {row[2]}
                  </small>
                </span>
                <KBadge>READY</KBadge>
                <KButton variant="secondary">Download</KButton>
              </div>
            ))}
          </div>
          <div className="deck-actions">
            <KButton variant="secondary">Download 48-Hour Deck PDF</KButton>
            <KBadge>Watermark ON · VIEWER access</KBadge>
          </div>
        </KCard>
      </section>
      <KDialog open={share} title="Share Download Page" onClose={() => setShare(false)}>
        <label className="field-label">
          48-hour link
          <KInput readOnly value="/d/LIHLO-DEMO-2026-00001" />
        </label>
        <label className="field-label">
          Access role
          <KSelect value={access} onChange={(event) => setAccess(event.target.value)}>
            <option>VIEWER</option>
            <option>MEMBER</option>
          </KSelect>
        </label>
        <label className="control-toggle">
          <input type="checkbox" defaultChecked />
          <span>Apply visible watermark</span>
        </label>
        <div className="dialog-actions">
          <KButton variant="secondary" onClick={() => setShare(false)}>
            Cancel
          </KButton>
          <KButton
            onClick={() => {
              setShare(false);
              setToast(`48-hour ${access} link copied`);
            }}
          >
            Copy secure link
          </KButton>
        </div>
      </KDialog>
      <KToast message={toast} />
    </>
  );
}
