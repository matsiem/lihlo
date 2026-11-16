import { useState } from "react";
import { KBadge, KButton, KCard, KInput, KToast } from "../components/k";
export default function ClientGuest() {
  const [comment, setComment] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  return (
    <div className="guest-review">
      <header>
        <b>LIHLO REVIEW</b>
        <span>Guest · NORTHSTAR · Expires in 7 days</span>
      </header>
      <main>
        <section>
          <div className="guest-player">
            <button>▶</button>
            <code>00:42</code>
          </div>
          <div className="guest-timeline">
            <i />
            <i />
            <i />
          </div>
          <label className="field-label">
            Comment at 00:42
            <KInput
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Please adjust logo placement…"
            />
          </label>
          <KButton
            disabled={!comment}
            onClick={() => {
              setToast("Comment sent · Changes Requested");
              setComment("");
            }}
          >
            Send comment
          </KButton>
        </section>
        <aside>
          <KCard>
            <KBadge>2 CHANGES</KBadge>
            <h2>Your tasks</h2>
            <p>00:42 · Adjust logo placement</p>
            <p>01:15 · Make end card bigger</p>
            <div className="guest-actions">
              <KButton onClick={() => setToast("Cut approved. Thank you.")}>Approve</KButton>
              <KButton variant="secondary" onClick={() => setToast("Changes sent to Alex.")}>
                Request Changes
              </KButton>
            </div>
          </KCard>
        </aside>
      </main>
      <footer>Watermarked · No download · Secure review link</footer>
      <KToast message={toast} />
    </div>
  );
}
