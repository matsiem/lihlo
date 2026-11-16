import { useState } from "react";
import { KBadge, KButton, KCard, KSelect, KTabs, KToast } from "../components/k";
export default function ReviewStudio() {
  const [asset, setAsset] = useState("Video");
  const [tool, setTool] = useState("Comment Pin");
  const [toast, setToast] = useState<string | null>(null);
  const tools = [
    "Select",
    "Comment Pin",
    "Pen",
    "Arrow",
    "Rectangle",
    "Circle",
    "Text",
    "Highlight",
    "Blur",
    "Eraser",
    "Undo",
    "Redo",
  ];
  return (
    <div className="review-studio-v2">
      <header>
        <div>
          <b>Nike Brand Film</b>
          <KSelect value={asset} onChange={(e) => setAsset(e.target.value)}>
            <option>Video</option>
            <option>Deck</option>
            <option>Image</option>
            <option>PDF</option>
            <option>Audio</option>
          </KSelect>
        </div>
        <div>
          <KBadge>v3</KBadge>
          <KButton variant="secondary">Share</KButton>
          <KButton>Approve</KButton>
        </div>
      </header>
      <div className="annotation-tools">
        {tools.map((x) => (
          <button className={tool === x ? "active" : ""} onClick={() => setTool(x)} key={x}>
            {x}
          </button>
        ))}
      </div>
      <main>
        <section className="asset-stage">
          <div className={`asset-canvas ${asset.toLowerCase()}`}>
            <span>{asset} Viewer</span>
            {tool === "Pen" && <i className="draw-circle" />}
            {tool === "Arrow" && <i className="draw-arrow" />}
          </div>
          <div className="asset-strip">
            <code>{asset === "Deck" ? "Slide 4 of 12" : "00:01:14:18"}</code>
            <KButton
              variant="secondary"
              onClick={() => setToast(`${tool} annotation saved to ${asset}`)}
            >
              Save {tool}
            </KButton>
          </div>
        </section>
        <aside>
          <KTabs items={["All", "Open", "Resolved"]} value="All" onChange={() => {}} />
          <KCard>
            <code>00:42</code>
            <h3>Move logo up 20px</h3>
            <p>Drawing + text · Client NORTHSTAR</p>
          </KCard>
          <KCard>
            <code>Slide 4</code>
            <h3>Headline too small</h3>
            <p>Arrow annotation</p>
          </KCard>
        </aside>
      </main>
      <KToast message={toast} />
    </div>
  );
}
