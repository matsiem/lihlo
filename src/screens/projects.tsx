import { useMemo, useState } from "react";
import {
  KBadge,
  KButton,
  KCard,
  KEmptyState,
  KInput,
  KPopover,
  KProgress,
  KSelect,
  KTabs,
  KToast,
} from "../components/k";
import { mockProjects } from "../data/mockProjects";
import { useDemo } from "../lib/demo-bridge";

export default function Projects({ navigate }: { navigate: (screen: string) => void }) {
  const { canEdit } = useDemo();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [client, setClient] = useState("All clients");
  const [tier, setTier] = useState("All tiers");
  const [toast, setToast] = useState<string | null>(null);
  const filtered = useMemo(
    () =>
      mockProjects.filter((project) => {
        const tabMatch = tab === "All" || project.status === tab.toUpperCase().replace(" ", "_");
        return (
          tabMatch &&
          (client === "All clients" || project.client === client) &&
          (tier === "All tiers" || project.tier === tier) &&
          `${project.title} ${project.client}`.toLowerCase().includes(query.toLowerCase())
        );
      }),
    [query, tab, client, tier],
  );
  const clear = () => {
    setQuery("");
    setTab("All");
    setClient("All clients");
    setTier("All tiers");
  };
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">WORKSPACE</span>
          <h1>Projects</h1>
          <p>Canonical demo productions, client tenancy and review state.</p>
        </div>
        {canEdit && (
          <KButton
            onClick={() =>
              window.dispatchEvent(new CustomEvent("lihlo:create", { detail: "Project" }))
            }
          >
            + New Project
          </KButton>
        )}
      </div>
      <div className="toolbar modular-toolbar">
        <KInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search project or client"
        />
        <KTabs items={["All", "Active", "In Review", "Overdue"]} value={tab} onChange={setTab} />
        <div className="popover-anchor">
          <KButton variant="secondary" onClick={() => setFiltersOpen(!filtersOpen)}>
            Filters
          </KButton>
          <KPopover open={filtersOpen}>
            <label className="field-label">
              Client
              <KSelect value={client} onChange={(e) => setClient(e.target.value)}>
                <option>All clients</option>
                {[...new Set(mockProjects.map((x) => x.client))].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </KSelect>
            </label>
            <label className="field-label">
              Tier
              <KSelect value={tier} onChange={(e) => setTier(e.target.value)}>
                <option>All tiers</option>
                {[...new Set(mockProjects.map((x) => x.tier))].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </KSelect>
            </label>
          </KPopover>
        </div>
      </div>
      {filtered.length ? (
        <div className="modular-project-grid">
          {filtered.map((project) => (
            <KCard key={project.id}>
              <div className="card-top">
                <KBadge>{project.status}</KBadge>
                <code>{project.id}</code>
              </div>
              <span className="eyebrow">
                {project.client} · {project.tier}
              </span>
              <h2>{project.title}</h2>
              <p>Director · {project.director}</p>
              <div className="progress-label">
                <span>Progress</span>
                <b>{project.progress}%</b>
              </div>
              <KProgress value={project.progress} />
              <div className="card-buttons">
                <KButton variant="secondary" onClick={() => navigate("room")}>
                  Lihlo Room
                </KButton>
                <KButton
                  disabled={!canEdit}
                  onClick={() => setToast(`${project.title} approved and queued for Portfolio`)}
                >
                  Approve
                </KButton>
              </div>
            </KCard>
          ))}
        </div>
      ) : (
        <KEmptyState
          title="No projects match"
          detail="Clear filters to see your productions."
          action={<KButton onClick={clear}>Clear filters</KButton>}
        />
      )}
      <KToast message={toast} />
    </div>
  );
}
