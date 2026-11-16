import { useState } from "react";
import {
  KBadge,
  KButton,
  KCard,
  KDialog,
  KInput,
  KProgress,
  KSelect,
  KTabs,
  KToast,
} from "../components/k";
import { Room as LegacyRoom } from "./legacy";

export default function Room() {
  const [tab, setTab] = useState("SmartPlayer");
  const [frame, setFrame] = useState(18);
  const [cut, setCut] = useState("v3_rough_cut");
  const [lut, setLut] = useState("Highveld Warm");
  const [wipe, setWipe] = useState(54);
  const [recording, setRecording] = useState(false);
  const [invite, setInvite] = useState(false);
  const [access, setAccess] = useState("VIEWER");
  const [watermark, setWatermark] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  return (
    <>
      <section className="pro-room">
        <div className="pro-room-head">
          <div>
            <span className="eyebrow">MAHLO LIVE TOOLSET</span>
            <h2>Smart review bridge</h2>
          </div>
          <div className="pro-room-actions">
            <KBadge>SYNCED — FCPXML/OTIO 100%</KBadge>
            <KButton onClick={() => setInvite(true)}>Share / Invite</KButton>
          </div>
        </div>
        <KTabs
          items={["SmartPlayer", "Voice Notes", "Colour Studio"]}
          value={tab}
          onChange={setTab}
        />
        {tab === "SmartPlayer" && (
          <KCard className="smart-player">
            <div>
              <code>00:01:14:{String(frame).padStart(2, "0")}</code>
              <span>24 FPS SMPTE</span>
            </div>
            <div className="frame-controls">
              <KButton variant="secondary" onClick={() => setFrame(Math.max(0, frame - 1))}>
                −1f
              </KButton>
              <KSelect value={cut} onChange={(e) => setCut(e.target.value)}>
                <option>v3_rough_cut</option>
                <option>v4_colour_lock</option>
                <option>v5_final_master</option>
              </KSelect>
              <KButton variant="secondary" onClick={() => setFrame((frame + 1) % 24)}>
                +1f
              </KButton>
            </div>
            <KProgress value={58} />
          </KCard>
        )}
        {tab === "Voice Notes" && (
          <KCard className="voice-note">
            <button
              className={recording ? "recording" : ""}
              onClick={() => setRecording(!recording)}
              aria-label="Record voice note"
            >
              <i />
            </button>
            <div>
              <b>{recording ? "Recording at 00:01:14:18" : "VoiceNoteRecorder ready"}</b>
              <div className="waveform">
                {Array.from({ length: 18 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
              <KBadge>{recording ? "OPEN" : "RESOLVED"}</KBadge>
            </div>
          </KCard>
        )}
        {tab === "Colour Studio" && (
          <KCard>
            <div className="colour-toolbar">
              <KSelect value={lut} onChange={(e) => setLut(e.target.value)}>
                <option>Rec.709</option>
                <option>Film Print</option>
                <option>Highveld Warm</option>
              </KSelect>
              <b>Before / After {wipe}%</b>
            </div>
            <div className="wipe-stage">
              <span style={{ width: `${wipe}%` }} />
              <input
                aria-label="Before after wipe"
                type="range"
                min="0"
                max="100"
                value={wipe}
                onChange={(e) => setWipe(Number(e.target.value))}
              />
            </div>
          </KCard>
        )}
      </section>
      <LegacyRoom />
      <KDialog open={invite} title="Share Lihlo Room" onClose={() => setInvite(false)}>
        <label className="field-label">
          Secure review link
          <KInput readOnly value="/d/LIHLO-DEMO-2026-00001" />
        </label>
        <label className="field-label">
          Access
          <KSelect value={access} onChange={(event) => setAccess(event.target.value)}>
            <option>VIEWER</option>
            <option>MEMBER</option>
          </KSelect>
        </label>
        <label className="control-toggle">
          <input
            type="checkbox"
            checked={watermark}
            onChange={(event) => setWatermark(event.target.checked)}
          />
          <span>Watermark client room</span>
        </label>
        <div className="dialog-actions">
          <KButton variant="secondary" onClick={() => setInvite(false)}>
            Cancel
          </KButton>
          <KButton
            onClick={() => {
              setInvite(false);
              setToast(`Invite copied · ${access} · watermark ${watermark ? "ON" : "OFF"}`);
            }}
          >
            Copy invite
          </KButton>
        </div>
      </KDialog>
      <KToast message={toast} />
    </>
  );
}
