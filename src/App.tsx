import { useEffect, useMemo, useState } from "react";
import {
  KButton,
  KDialog,
  KEmptyState,
  KIcon,
  KInput,
  KPopover,
  KSelect,
  KToast,
} from "./components/k";
import { searchableDemoItems } from "./data/mockProjects";
import { useDemo } from "./lib/demo-bridge";
import { nextSequenceId } from "./lib/sequences-bridge";
import Home from "./screens/home";
import Dashboard from "./screens/dashboard";
import Projects from "./screens/projects";
import Room from "./screens/room";
import Reviews from "./screens/reviews";
import Deliverables from "./screens/deliverables";
import Jobs from "./screens/jobs";
import JobDetail from "./screens/job-detail";
import Portfolio from "./screens/portfolio";
import CalendarSettings from "./screens/calendar-settings";
import TokenController from "./screens/token-controller";
import PublicLanding from "./screens/public-landing";
import Onboarding from "./screens/onboarding";
import CreatorHome from "./screens/creator-home";
import StudioHome from "./screens/studio-home";
import RecruiterHome from "./screens/recruiter-home";
import ClientGuest from "./screens/client-guest";
import ReviewStudio from "./screens/review-studio";
import BusinessPerformance from "./screens/business-performance";
import DailyRate from "./screens/daily-rate";

export type Screen =
  | "landing"
  | "onboarding"
  | "home"
  | "creator"
  | "dashboard"
  | "studio"
  | "recruiter"
  | "client"
  | "projects"
  | "room"
  | "reviews"
  | "review-studio"
  | "deliverables"
  | "jobs"
  | "job-detail"
  | "portfolio"
  | "calendar"
  | "business"
  | "rate"
  | "tokens";
const routes: { id: Screen; label: string; icon: string }[] = [
  { id: "tokens", label: "Token Controller", icon: "settings" },
  { id: "landing", label: "Public Landing", icon: "play" },
  { id: "onboarding", label: "Role Picker", icon: "user" },
  { id: "home", label: "Start", icon: "play" },
  { id: "creator", label: "Creator Home", icon: "user" },
  { id: "dashboard", label: "Dashboard", icon: "grid" },
  { id: "studio", label: "Studio", icon: "grid" },
  { id: "recruiter", label: "Recruiter", icon: "user" },
  { id: "client", label: "Client Guest", icon: "play" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "room", label: "Rooms", icon: "play" },
  { id: "reviews", label: "Reviews", icon: "grid" },
  { id: "review-studio", label: "Review Studio", icon: "play" },
  { id: "deliverables", label: "Deliverables", icon: "download" },
  { id: "jobs", label: "Jobs", icon: "grid" },
  { id: "job-detail", label: "Hire Room", icon: "play" },
  { id: "portfolio", label: "Portfolio", icon: "user" },
  { id: "calendar", label: "Calendar", icon: "grid" },
  { id: "business", label: "Business", icon: "grid" },
  { id: "rate", label: "Daily Rate", icon: "settings" },
];

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button className="logo" onClick={onClick}>
      <span className="eye">
        <span />
      </span>
      <span>
        <b>LIHLO</b>
        <small>STUDIO</small>
      </span>
    </button>
  );
}

export default function App() {
  const { activeRole, canEdit, tenant_id, resetAll } = useDemo();
  const [current, setCurrent] = useState<Screen>("tokens");
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const [popover, setPopover] = useState<"notifications" | "account" | null>(null);
  const [notifications, setNotifications] = useState([
    "The Suit has 2 change requests",
    "Wanaya Fruit Basket was viewed",
    "Placements24 watched 85% of your reel",
  ]);
  const [createType, setCreateType] = useState<"Project" | "Room" | null>(null);
  const [createName, setCreateName] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [portfolioUpdated, setPortfolioUpdated] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.look ||= "lihlo-color";
    document.documentElement.dataset.godPair ||= "lihlo-default";
    document.documentElement.dataset.role = activeRole;
  }, [activeRole]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setPopover(null);
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    const onCreate = (event: Event) =>
      setCreateType((event as CustomEvent<"Project" | "Room">).detail);
    addEventListener("lihlo:create", onCreate);
    return () => removeEventListener("lihlo:create", onCreate);
  }, []);
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);
  const commandResults = useMemo(
    () =>
      searchableDemoItems.filter((item) =>
        `${item.type} ${item.label}`.toLowerCase().includes(commandQuery.toLowerCase()),
      ),
    [commandQuery],
  );
  const navigate = (screen: Screen | string) => {
    setCurrent(screen as Screen);
    setCommandOpen(false);
    setPopover(null);
  };
  const create = () => {
    if (!createType || !createName.trim()) return;
    const id = nextSequenceId("LIHLO");
    setToast(`${createType} “${createName.trim()}” created · ${id}`);
    setCreateName("");
    setCreateType(null);
  };
  const render = () => {
    if (current === "landing") return <PublicLanding navigate={navigate} />;
    if (current === "onboarding") return <Onboarding navigate={navigate} />;
    if (current === "home") return <Home navigate={navigate} />;
    if (current === "creator") return <CreatorHome navigate={navigate} />;
    if (current === "dashboard") return <Dashboard navigate={navigate} />;
    if (current === "studio") return <StudioHome />;
    if (current === "recruiter") return <RecruiterHome navigate={navigate} />;
    if (current === "client") return <ClientGuest />;
    if (current === "projects") return <Projects navigate={navigate} />;
    if (current === "room") return <Room />;
    if (current === "reviews") return <Reviews />;
    if (current === "review-studio") return <ReviewStudio />;
    if (current === "deliverables") return <Deliverables />;
    if (current === "jobs") return <Jobs navigate={navigate} />;
    if (current === "job-detail")
      return (
        <JobDetail
          onApplied={() => {
            setPortfolioUpdated(true);
            setToast("Hire Room created · Match Score 82%");
          }}
        />
      );
    if (current === "portfolio") return <Portfolio approved={portfolioUpdated} />;
    if (current === "tokens") return <TokenController />;
    if (current === "business") return <BusinessPerformance />;
    if (current === "rate") return <DailyRate />;
    return <CalendarSettings />;
  };
  return (
    <div className="app">
      <header className="topnav universal-nav">
        <Logo onClick={() => navigate("home")} />
        <nav className="navlinks">
          {routes
            .filter((route) =>
              [
                "dashboard",
                "room",
                "projects",
                "deliverables",
                "jobs",
                "portfolio",
                "calendar",
              ].includes(route.id),
            )
            .map((route) => (
              <button
                className={current === route.id ? "active" : ""}
                onClick={() => navigate(route.id)}
                key={route.id}
              >
                {route.label}
              </button>
            ))}
        </nav>
        <div className="topactions">
          <button
            className="icon-button command-trigger"
            onClick={() => setCommandOpen(true)}
            aria-label="Command search"
          >
            <KIcon name="search" />
            <kbd>⌘ K</kbd>
          </button>
          <div className="popover-anchor">
            <button
              className="icon-button has-dot"
              onClick={() => setPopover(popover === "notifications" ? null : "notifications")}
              aria-label="Notifications"
            >
              <KIcon name="bell" />
            </button>
            <KPopover open={popover === "notifications"}>
              <div className="popover-head">
                <b>Notifications</b>
                <button
                  onClick={() => {
                    setNotifications([]);
                    setToast("All notifications marked read");
                  }}
                >
                  Mark all read
                </button>
              </div>
              {notifications.length ? (
                notifications.map((note) => (
                  <p className="notice" key={note}>
                    {note}
                  </p>
                ))
              ) : (
                <KEmptyState title="All clear" detail="You’re caught up." />
              )}
            </KPopover>
          </div>
          <div className="popover-anchor">
            <button
              className="avatar small"
              onClick={() => setPopover(popover === "account" ? null : "account")}
            >
              L
            </button>
            <KPopover open={popover === "account"}>
              <div className="account-card">
                <b>LemaUser</b>
                <span>tenant_id: {tenant_id}</span>
                <span>Role: {activeRole}</span>
                <KButton variant="secondary" onClick={() => navigate("tokens")}>
                  Token & Look Controller
                </KButton>
                <KButton
                  variant="secondary"
                  onClick={() => {
                    resetAll();
                    setToast("Demo reset complete");
                  }}
                >
                  Demo Reset
                </KButton>
              </div>
            </KPopover>
          </div>
          {canEdit && (
            <KButton onClick={() => setCreateType("Room")}>
              <KIcon name="plus" /> New Room
            </KButton>
          )}
        </div>
      </header>
      <aside className="side-rail">
        {routes.map((route) => (
          <button
            title={route.label}
            className={current === route.id ? "active" : ""}
            onClick={() => navigate(route.id)}
            key={route.id}
          >
            <KIcon name={route.icon} />
          </button>
        ))}
      </aside>
      <div className="mobile-screen-picker">
        <label htmlFor="screen-picker">Workspace</label>
        <KSelect id="screen-picker" value={current} onChange={(e) => navigate(e.target.value)}>
          {routes.map((route) => (
            <option value={route.id} key={route.id}>
              {route.label}
            </option>
          ))}
        </KSelect>
      </div>
      <main
        className={`app-main ${["home", "room", "portfolio"].includes(current) ? "flush" : ""}`}
      >
        {render()}
      </main>
      <nav className="mobile-nav">
        {(current === "recruiter"
          ? ["jobs", "recruiter", "calendar", "reviews"]
          : current === "studio"
            ? ["studio", "projects", "creator", "calendar"]
            : ["dashboard", "room", "jobs", "portfolio"]
        )
          .map((id) => routes.find((route) => route.id === id)!)
          .map((route) => (
            <button
              className={current === route.id ? "active" : ""}
              onClick={() => navigate(route.id)}
              key={route.id}
            >
              <KIcon name={route.icon} />
              <span>{route.label}</span>
            </button>
          ))}
      </nav>
      <KDialog open={commandOpen} title="Command Search" onClose={() => setCommandOpen(false)}>
        <KInput
          autoFocus
          value={commandQuery}
          onChange={(e) => setCommandQuery(e.target.value)}
          placeholder="Search projects, rooms, deliverables, jobs…"
        />
        <div className="command-results">
          {commandResults.length ? (
            commandResults.map((result) => (
              <button key={result.label} onClick={() => navigate(result.target)}>
                <span>{result.type}</span>
                <b>{result.label}</b>
                <small>Open →</small>
              </button>
            ))
          ) : (
            <KEmptyState title="No results" detail="Try a project, room, deliverable or job." />
          )}
        </div>
      </KDialog>
      <KDialog
        open={createType !== null}
        title={`Create ${createType || ""}`}
        onClose={() => setCreateType(null)}
      >
        <label className="field-label">
          Name
          <KInput
            value={createName}
            onChange={(e) => setCreateName(e.target.value)}
            placeholder={`${createType || "Item"} name`}
          />
        </label>
        <label className="field-label">
          Client
          <KSelect>
            <option>NORTHSTAR</option>
            <option>Wanaya</option>
            <option>Ambani Africa</option>
          </KSelect>
        </label>
        <div className="dialog-actions">
          <KButton variant="secondary" onClick={() => setCreateType(null)}>
            Cancel
          </KButton>
          <KButton disabled={!createName.trim()} onClick={create}>
            Create {createType}
          </KButton>
        </div>
      </KDialog>
      <KToast message={toast} />
    </div>
  );
}
