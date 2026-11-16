import { useState } from "react";
import { KButton, KCard, KInput, KToast } from "../components/k";
const roles = ["Creator", "Studio", "Recruiter", "Student", "Client"];
export default function Onboarding({ navigate }: { navigate: (screen: string) => void }) {
  const [role, setRole] = useState("Creator");
  const [step, setStep] = useState(1);
  const [toast, setToast] = useState<string | null>(null);
  const destination: Record<string, string> = {
    Creator: "creator",
    Studio: "studio",
    Recruiter: "recruiter",
    Student: "creator",
    Client: "client",
  };
  return (
    <div className="screen onboarding">
      <div className="page-header">
        <div>
          <span className="eyebrow">WELCOME TO LIHLO</span>
          <h1>{step === 1 ? "Who are you?" : "Set up your workspace"}</h1>
          <p>Step {step} of 2 · tenant demo · isDemo true</p>
        </div>
      </div>
      {step === 1 ? (
        <div className="role-grid">
          {roles.map((x) => (
            <KCard className={role === x ? "selected" : ""} key={x}>
              <button onClick={() => setRole(x)}>
                <h2>{x}</h2>
                <p>
                  {x === "Client" ? "Review without a login" : "A workspace shaped for your role"}
                </p>
              </button>
            </KCard>
          ))}
        </div>
      ) : (
        <KCard className="onboarding-form">
          <label className="field-label">
            Skills
            <KInput defaultValue="Premiere Pro, DaVinci Resolve" />
          </label>
          <label className="field-label">
            Location
            <KInput defaultValue="Midrand, Gauteng" />
          </label>
          <label className="field-label">
            First project
            <KInput defaultValue="Nike Brand Film v3" />
          </label>
        </KCard>
      )}
      <div className="onboarding-actions">
        {step === 2 && (
          <KButton variant="secondary" onClick={() => setStep(1)}>
            Back
          </KButton>
        )}
        <KButton
          onClick={() =>
            step === 1 ? setStep(2) : (setToast("Workspace created"), navigate(destination[role]))
          }
        >
          {step === 1 ? "Continue" : `Enter as ${role}`}
        </KButton>
      </div>
      <KToast message={toast} />
    </div>
  );
}
