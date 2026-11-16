import { useState } from "react";
import { CalendarSettings as LegacyCalendar } from "./legacy";
import { KButton, KDialog, KInput, KToast } from "../components/k";
import { useDemo } from "../lib/demo-bridge";
export default function CalendarSettings() {
  const { canEdit } = useDemo();
  const [confirm, setConfirm] = useState(false);
  const [typed, setTyped] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  return (
    <>
      <LegacyCalendar />
      <footer className="popia-strip">
        <div>
          <b>POPIA Data Controls</b>
          <span>Portable, transparent and deletable demo data.</span>
        </div>
        <KButton
          variant="secondary"
          onClick={() => setToast("Your POPIA export is being prepared.")}
        >
          Download My Data
        </KButton>
        <KButton variant="danger" disabled={!canEdit} onClick={() => setConfirm(true)}>
          Delete Account
        </KButton>
      </footer>
      <KDialog open={confirm} title="Delete demo account?" onClose={() => setConfirm(false)}>
        <p>
          This destructive demo action requires confirmation. Type <b>DELETE</b>.
        </p>
        <KInput
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
          placeholder="Type DELETE"
        />
        <div className="dialog-actions">
          <KButton variant="secondary" onClick={() => setConfirm(false)}>
            Cancel
          </KButton>
          <KButton
            variant="danger"
            disabled={typed !== "DELETE"}
            onClick={() => {
              setConfirm(false);
              setTyped("");
              setToast("Demo account deletion simulated.");
            }}
          >
            Delete account
          </KButton>
        </div>
      </KDialog>
      <KToast message={toast} />
    </>
  );
}
