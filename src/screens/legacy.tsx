import { useState, type ReactNode } from "react";

export type Screen =
  | "home"
  | "dashboard"
  | "projects"
  | "room"
  | "reviews"
  | "deliverables"
  | "jobs"
  | "job-detail"
  | "portfolio"
  | "calendar";

const screens: { id: Screen; label: string; icon: string }[] = [
  { id: "home", label: "Start", icon: "target" },
  { id: "dashboard", label: "Dashboard", icon: "grid" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "room", label: "Rooms", icon: "play" },
  { id: "reviews", label: "Reviews", icon: "comment" },
  { id: "deliverables", label: "Deliverables", icon: "download" },
  { id: "jobs", label: "Jobs", icon: "briefcase" },
  { id: "job-detail", label: "Hire Room", icon: "target" },
  { id: "portfolio", label: "Portfolio", icon: "user" },
  { id: "calendar", label: "Calendar", icon: "calendar" },
];

const projectData = [
  {
    title: "Nike Brand Film v3",
    client: "NORTHSTAR",
    due: "Oct 14",
    progress: 68,
    color: "yellow",
    status: "OVERDUE",
  },
  {
    title: "Tech Launch Ad",
    client: "ACME LABS",
    due: "Oct 16",
    progress: 45,
    color: "blue",
    status: "2 DAYS LEFT",
  },
  {
    title: "Doc Episode 03",
    client: "MOONRISE",
    due: "Oct 18",
    progress: 30,
    color: "pink",
    status: "4 DAYS LEFT",
  },
];

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </>
    ),
    folder: <path d="M3 6h7l2 2h9v11H3z" />,
    play: (
      <>
        <rect x="3" y="4" width="18" height="16" />
        <path d="m10 9 6 3-6 3z" />
      </>
    ),
    comment: <path d="M4 4h16v12H9l-5 4z" />,
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M4 19h16" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" />
        <path d="M9 7V4h6v3m-12 5h18" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1-5 4-7 8-7s7 2 8 7" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" />
        <path d="M8 3v4m8-4v4M3 10h18" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    bell: (
      <>
        <path d="M6 17h12l-2-3V9a4 4 0 0 0-8 0v5z" />
        <path d="M10 20h4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="m15 18-6-6 6-6" />,
    send: (
      <>
        <path d="m3 3 18 9-18 9 4-9z" />
        <path d="M7 12h14" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
        <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
      </>
    ),
    filter: <path d="M3 5h18l-7 8v6l-4 2v-8z" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    phone: (
      <path d="M6 3h4l1 5-3 2a16 16 0 0 0 6 6l2-3 5 1v4c0 2-2 3-4 3C9 20 4 15 3 7c0-2 1-4 3-4z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.grid}
    </svg>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button className="logo" onClick={onClick} aria-label="Lihlo Studio home">
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

function Button({
  children,
  secondary = false,
  onClick,
  className = "",
}: {
  children: ReactNode;
  secondary?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`button ${secondary ? "secondary" : ""} ${className}`}>
      {children}
    </button>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "red" | "green" | "gold" | "neutral";
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function TopNav({ current, onNavigate }: { current: Screen; onNavigate: (s: Screen) => void }) {
  return (
    <header className="topnav">
      <Logo onClick={() => onNavigate("home")} />
      <nav className="navlinks">
        {screens.slice(1, 7).map((item) => (
          <button
            key={item.id}
            className={current === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="topactions">
        <button className="icon-button" aria-label="Search">
          <Icon name="search" />
        </button>
        <button className="icon-button has-dot" aria-label="Notifications">
          <Icon name="bell" />
        </button>
        <div className="avatar small">A</div>
        <Button onClick={() => onNavigate("room")}>+ New Room</Button>
      </div>
    </header>
  );
}

function SideRail({ current, onNavigate }: { current: Screen; onNavigate: (s: Screen) => void }) {
  return (
    <aside className="side-rail">
      {screens.map((item) => (
        <button
          title={item.label}
          aria-label={item.label}
          key={item.id}
          className={current === item.id ? "active" : ""}
          onClick={() => onNavigate(item.id)}
        >
          <Icon name={item.icon} />
        </button>
      ))}
      <button
        title="Settings"
        className={current === "calendar" ? "active" : ""}
        onClick={() => onNavigate("calendar")}
      >
        <Icon name="settings" />
      </button>
    </aside>
  );
}

function MobileNav({ current, onNavigate }: { current: Screen; onNavigate: (s: Screen) => void }) {
  const tabs: { id: Screen; label: string; icon: string }[] = [
    { id: "dashboard", label: "Dashboard", icon: "grid" },
    { id: "room", label: "Rooms", icon: "play" },
    { id: "jobs", label: "Jobs", icon: "briefcase" },
    { id: "portfolio", label: "Portfolio", icon: "user" },
  ];
  return (
    <nav className="mobile-nav">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={current === t.id ? "active" : ""}
          onClick={() => onNavigate(t.id)}
        >
          <Icon name={t.icon} />
          <span>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}

function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action && <div className="header-action">{action}</div>}
    </div>
  );
}

function Progress({ value, dark = false }: { value: number; dark?: boolean }) {
  return (
    <div className={`progress ${dark ? "dark" : ""}`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

export function Home({ navigate }: { navigate: (s: Screen) => void }) {
  const [creator, setCreator] = useState(1);
  const [slot, setSlot] = useState("11:30");
  const creatorTypes = ["New Creator", "Mid-Level Editor", "Big Studio"];
  const dates = [
    ["02 April", ["09:30", "11:30", "02:30 PM", "03:45 PM", "05:00 PM"]],
    ["03 April", ["09:30", "11:30", "02:30 PM"]],
    ["04 April", ["09:30", "11:30", "02:30 PM"]],
  ] as const;
  return (
    <div className="start-screen">
      <section className="start-main">
        <div className="start-intro">
          <span className="eyebrow">GET STARTED WITH LIHLO STUDIO</span>
          <h1>What are you creating today?</h1>
          <div className="start-search">
            <Icon name="search" />
            <input placeholder="Search for a Project, Room, Job, Deliverable" />
            <Button>Search</Button>
          </div>
        </div>
        <div className="service-grid">
          <button className="service-card room-card" onClick={() => navigate("room")}>
            <span>01</span>
            <Icon name="play" size={28} />
            <div>
              <h3>Lihlo Rooms</h3>
              <p>Review cuts with time-coded comments</p>
            </div>
          </button>
          <button className="service-card deliver-card" onClick={() => navigate("deliverables")}>
            <span>02</span>
            <Icon name="download" size={28} />
            <div>
              <h3>Deliverables</h3>
              <p>Projects, specs, deadlines</p>
            </div>
          </button>
          <button className="service-card create-card" onClick={() => navigate("room")}>
            <span className="eyebrow">FREE CLIENT REVIEW LINK</span>
            <div className="create-graphic">
              <div className="screen-art">
                <Icon name="play" size={31} />
              </div>
              <div className="timeline-art">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div>
              <h2>Create a Lihlo Room</h2>
              <p>Share on WhatsApp. No login needed for your client.</p>
              <b>Start a review →</b>
            </div>
          </button>
          <button className="service-card jobs-card" onClick={() => navigate("jobs")}>
            <span>03</span>
            <Icon name="briefcase" size={28} />
            <div>
              <h3>Lihlo Jobs</h3>
              <p>Find your next editing job</p>
            </div>
          </button>
          <button className="service-card portfolio-card" onClick={() => navigate("portfolio")}>
            <span>04</span>
            <Icon name="user" size={28} />
            <div>
              <h3>Portfolio / Hire</h3>
              <p>hire.lihlo.studio/alex</p>
            </div>
          </button>
          <button className="service-card all-card" onClick={() => navigate("dashboard")}>
            <div>
              <h3>Projects / Portfolio / Calendar / Invoices</h3>
              <p>All your studio operations in one place.</p>
            </div>
            <b>Open Lihlo Control →</b>
          </button>
        </div>
        <footer className="start-footer">
          <span>Facebook &nbsp; LinkedIn &nbsp; Twitter</span>
          <span>Privacy Policy &nbsp; POPIA</span>
        </footer>
      </section>
      <aside className="booking-rail">
        <span className="eyebrow">DIRECT SESSION</span>
        <h2>Book a Client Review with Alex.</h2>
        <p>Pick any one</p>
        <div className="creator-types">
          {creatorTypes.map((type, i) => (
            <button
              className={creator === i ? "selected" : ""}
              onClick={() => setCreator(i)}
              key={type}
            >
              <span>0{i + 1}</span>
              <Icon name={i === 0 ? "user" : i === 1 ? "play" : "briefcase"} />
              <b>{type}</b>
              {i === 2 && <small>/ Production House</small>}
            </button>
          ))}
        </div>
        <div className="booking-title">
          <div>
            <span className="eyebrow">AVAILABILITY</span>
            <h3>Select Date / Time</h3>
          </div>
          <button>
            <Icon name="filter" />
          </button>
        </div>
        <div className="date-groups">
          {dates.map((group) => (
            <div key={group[0]}>
              <b>{group[0]}</b>
              <div>
                {group[1].map((time) => (
                  <button
                    className={slot === time ? "selected" : ""}
                    onClick={() => setSlot(time)}
                    key={time}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="calendar-link">
          Book using calendar <span>→</span>
        </button>
        <div className="booking-bottom">
          <div>
            <span>02 APRIL</span>
            <b>{slot}</b>
          </div>
          <Button>Book Now</Button>
        </div>
      </aside>
    </div>
  );
}

function ProjectCard({
  p,
  approved,
  onApprove,
}: {
  p: (typeof projectData)[number];
  approved?: boolean;
  onApprove?: () => void;
}) {
  return (
    <article className={`project-card ${p.color}`}>
      <div className="card-top">
        <span className="date">{p.due}, 2026</span>
        <button className="plain">
          <Icon name="more" />
        </button>
      </div>
      <div>
        <small>{p.client}</small>
        <h3>{p.title}</h3>
      </div>
      <div className="specs">
        <span>H.264</span>
        <span>1920 × 1080</span>
      </div>
      <div className="progress-label">
        <span>Progress</span>
        <b>{approved ? 100 : p.progress}%</b>
      </div>
      <Progress value={approved ? 100 : p.progress} dark />
      <div className="card-footer">
        <div className="stacked-avatars">
          <span>A</span>
          <span>N</span>
          <span>+2</span>
        </div>
        {approved ? (
          <Badge tone="green">APPROVED</Badge>
        ) : p.status === "OVERDUE" ? (
          <Badge tone="red">OVERDUE</Badge>
        ) : (
          <Badge>{p.status}</Badge>
        )}
      </div>
      <div className="card-buttons">
        <Button secondary>
          <Icon name="play" size={16} /> Lihlo Room
        </Button>
        <Button onClick={onApprove}>{approved ? "Approved" : "Approve"}</Button>
      </div>
    </article>
  );
}

function ApprovalTimeline({ onResolve, resolved }: { onResolve: () => void; resolved: boolean }) {
  return (
    <aside className="timeline-panel panel">
      <div className="timeline-heading">
        <div>
          <span className="eyebrow">CLIENT REVIEW</span>
          <h2>Approval Timeline</h2>
        </div>
        <Badge tone="red">
          <Icon name="clock" size={14} /> OVERDUE · DUE OCT 14
        </Badge>
      </div>
      <div className="timeline-list">
        <div className="timeline-item done">
          <i>
            <Icon name="check" size={13} />
          </i>
          <div>
            <b>Sent to Client</b>
            <p>Oct 12 · Done</p>
          </div>
        </div>
        <div className="timeline-item done">
          <i>
            <Icon name="check" size={13} />
          </i>
          <div>
            <b>Client Viewed</b>
            <p>Oct 13 · Done</p>
          </div>
        </div>
        <div className="timeline-item comments">
          <i>3</i>
          <div>
            <b>
              Comments at <code>00:42</code>
            </b>
            <p>3 comments received</p>
          </div>
        </div>
        <div className={`timeline-item ${resolved ? "done" : "danger"}`}>
          <i>{resolved ? <Icon name="check" size={13} /> : "!"}</i>
          <div>
            <Badge tone={resolved ? "green" : "red"}>
              {resolved ? "CHANGES RESOLVED" : "CHANGES REQUESTED"}
            </Badge>
            <p>
              2 changes at <code>00:42</code> and <code>01:15</code> by Client NORTHSTAR
            </p>
            {!resolved && <Button onClick={onResolve}>Resolve Changes</Button>}
          </div>
        </div>
        <div className="timeline-item current">
          <i></i>
          <div>
            <b>Revised v2 Sent</b>
            <p>Oct 14 · In Progress</p>
          </div>
        </div>
        <div className="timeline-item">
          <i></i>
          <div>
            <b>Final Approval</b>
            <p>Pending client review</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Dashboard({ navigate }: { navigate: (s: Screen) => void }) {
  const [resolved, setResolved] = useState(false);
  return (
    <div className="screen dashboard">
      <PageHeader
        eyebrow="LIHLO CONTROL"
        title="Welcome back, Alex."
        subtitle="Here’s what needs your eye today."
        action={
          <div className="date-control">
            <Icon name="calendar" /> October 2026
          </div>
        }
      />
      <div className="dashboard-grid">
        <section className="dashboard-main">
          <div className="stats-grid">
            <button className="stat blue" onClick={() => navigate("projects")}>
              <span>ACTIVE PROJECTS</span>
              <strong>3</strong>
              <small>2 need attention →</small>
            </button>
            <button className="stat coral" onClick={() => navigate("room")}>
              <span>ROOMS AWAITING APPROVAL</span>
              <strong>2</strong>
              <small>View client feedback →</small>
            </button>
            <button className="stat teal" onClick={() => navigate("jobs")}>
              <span>NEW JOB MATCH</span>
              <strong>
                82<sup>%</sup>
              </strong>
              <small>Lead Film Editor →</small>
            </button>
            <button className="stat mint" onClick={() => navigate("deliverables")}>
              <span>DELIVERABLE DUE</span>
              <strong>OCT 14</strong>
              <small>Nike Brand Film v3 →</small>
            </button>
          </div>
          <div className="section-heading">
            <div>
              <span className="eyebrow">IN MOTION</span>
              <h2>Ongoing Projects</h2>
            </div>
            <Button secondary onClick={() => navigate("projects")}>
              View all
            </Button>
          </div>
          <div className="project-grid dashboard-projects">
            {projectData.map((p, i) => (
              <ProjectCard
                key={p.title}
                p={p}
                approved={false}
                onApprove={() => i === 0 && navigate("portfolio")}
              />
            ))}
          </div>
        </section>
        <ApprovalTimeline resolved={resolved} onResolve={() => setResolved(true)} />
      </div>
    </div>
  );
}

export function Projects({ navigate }: { navigate: (s: Screen) => void }) {
  const [filter, setFilter] = useState("All");
  const [approved, setApproved] = useState<string[]>([]);
  return (
    <div className="screen">
      <PageHeader
        eyebrow="WORKSPACE"
        title="Projects"
        subtitle="Everything in motion, from first cut to final delivery."
        action={<Button>+ New Project</Button>}
      />
      <div className="toolbar">
        <div className="searchbox">
          <Icon name="search" />
          <input placeholder="Search projects or clients" />
          <span>⌘ K</span>
        </div>
        <div className="tabs">
          {["All", "Active", "In Review"].map((x) => (
            <button className={filter === x ? "active" : ""} onClick={() => setFilter(x)} key={x}>
              {x}
            </button>
          ))}
        </div>
        <Button secondary>
          <Icon name="filter" size={16} /> Filters
        </Button>
      </div>
      <div className="project-grid large">
        {projectData.map((p) => (
          <ProjectCard
            key={p.title}
            p={p}
            approved={approved.includes(p.title)}
            onApprove={() => setApproved((a) => [...a, p.title])}
          />
        ))}
        <article className="new-project" onClick={() => navigate("room")}>
          <span>+</span>
          <b>Start a new project</b>
          <small>Create a Room and invite your client</small>
        </article>
      </div>
    </div>
  );
}

type CommentType = {
  id: number;
  author: string;
  role: string;
  time: string;
  text: string;
  danger?: boolean;
};
const baseComments: CommentType[] = [
  {
    id: 1,
    author: "Thabo M.",
    role: "Director",
    time: "00:42",
    text: "Cut tighter here. We can lose the pause before the reveal.",
  },
  {
    id: 2,
    author: "Nandi K.",
    role: "Producer",
    time: "01:03",
    text: "Love this grade. The skin tones feel perfect.",
  },
  {
    id: 3,
    author: "Client NORTHSTAR",
    role: "Client",
    time: "01:15",
    text: "Please adjust logo placement on the final 5s.",
    danger: true,
  },
];

function VideoPlayer({
  activeTime,
  onSelect,
}: {
  activeTime: string;
  onSelect: (t: string) => void;
}) {
  return (
    <div>
      <div className="video-player">
        <img src="/lihlo-editorial.svg" alt="Fashion campaign footage being reviewed" />
        <div className="video-shade" />
        <button className="big-play">
          <Icon name="play" size={26} />
        </button>
        <div className="video-meta">
          <span>NIKE BRAND FILM · CUT V3</span>
          <code>{activeTime}</code>
        </div>
      </div>
      <div className="video-controls">
        <button>▶</button>
        <code>{activeTime}</code>
        <div className="scrubber">
          <span
            className="played"
            style={{
              width: activeTime === "01:15" ? "64%" : activeTime === "01:03" ? "53%" : "35%",
            }}
          />
          {baseComments.map((c, i) => (
            <button
              key={c.time}
              aria-label={`Jump to ${c.time}`}
              className={`marker ${c.danger ? "danger" : ""} ${activeTime === c.time ? "active" : ""}`}
              style={{ left: `${35 + i * 14}%` }}
              onClick={() => onSelect(c.time)}
            />
          ))}
        </div>
        <span>02:08</span>
      </div>
      <div className="tap-hint">
        <Icon name="comment" size={16} /> Tap timeline to comment at <code>{activeTime}</code>
      </div>
    </div>
  );
}

function CommentsList({
  activeTime,
  onTime,
  resolved,
  onResolve,
}: {
  activeTime: string;
  onTime: (t: string) => void;
  resolved: number[];
  onResolve: (id: number) => void;
}) {
  return (
    <div className="comments-list">
      <div className="comments-header">
        <div>
          <h2>Review notes</h2>
          <span>{baseComments.length} comments</span>
        </div>
        <button>
          <Icon name="filter" />
        </button>
      </div>
      {baseComments.map((c, i) => {
        const done = resolved.includes(c.id);
        return (
          <article
            key={c.id}
            onClick={() => onTime(c.time)}
            className={`comment-card ${activeTime === c.time ? "active" : ""} ${c.danger && !done ? "danger" : ""} ${done ? "resolved" : ""}`}
          >
            <div className="comment-top">
              <div className={`avatar a${i}`}>{c.author[0]}</div>
              <div>
                <b>{c.author}</b>
                <small>{c.role}</small>
              </div>
              <code>{c.time}</code>
            </div>
            <p>{c.text}</p>
            {c.danger && !done && <Badge tone="red">CHANGES REQUESTED</Badge>}
            {done && <Badge tone="green">RESOLVED</Badge>}
            <div className="comment-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onResolve(c.id);
                }}
              >
                <Icon name="check" size={15} /> {done ? "Resolved" : "Resolve"}
              </button>
              <button>Reply</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function Room() {
  const [time, setTime] = useState("00:42");
  const [resolved, setResolved] = useState<number[]>([]);
  return (
    <div className="room-screen">
      <div className="room-topline">
        <div>
          <button className="back">
            <Icon name="arrow" />
          </button>
          <div>
            <span className="eyebrow">LIHLO ROOM · V3</span>
            <h1>Nike Brand Film</h1>
          </div>
        </div>
        <div>
          <span className="viewers">● 3 viewing</span>
          <Button secondary>
            <Icon name="link" size={16} /> Copy link
          </Button>
          <Button>
            <Icon name="send" size={16} /> Share on WhatsApp
          </Button>
        </div>
      </div>
      <div className="room-layout">
        <section className="room-video-area">
          <VideoPlayer activeTime={time} onSelect={setTime} />
          <div className="comment-input">
            <div className="avatar small">A</div>
            <input placeholder={`Add a comment at ${time}`} />
            <Button>
              <Icon name="send" size={17} />
            </Button>
          </div>
        </section>
        <aside className="comments-panel">
          <CommentsList
            activeTime={time}
            onTime={setTime}
            resolved={resolved}
            onResolve={(id) => setResolved((r) => (r.includes(id) ? r : [...r, id]))}
          />
        </aside>
      </div>
    </div>
  );
}

export function Reviews() {
  const [resolved, setResolved] = useState<number[]>([]);
  const [time, setTime] = useState("00:42");
  return (
    <div className="screen">
      <PageHeader
        eyebrow="REVIEW WORKFLOW"
        title="Comments + Tasks"
        subtitle="Every note has an owner. Nothing slips through the cut."
        action={<Button>Share Review</Button>}
      />
      <div className="reviews-layout">
        <section className="review-preview">
          <VideoPlayer activeTime={time} onSelect={setTime} />
          <div className="mini-file">
            <div className="file-icon">V3</div>
            <div>
              <b>Nike_BrandFilm_V3.mp4</b>
              <small>H.264 · 1920 × 1080 · 284 MB</small>
            </div>
            <Badge tone="gold">IN REVIEW</Badge>
          </div>
        </section>
        <CommentsList
          activeTime={time}
          onTime={setTime}
          resolved={resolved}
          onResolve={(id) => setResolved((r) => [...r, id])}
        />
        <aside className="task-panel panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">AUTO-CREATED</span>
              <h2>Tasks</h2>
            </div>
            <Badge>{3 - resolved.length} OPEN</Badge>
          </div>
          {baseComments.map((c) => (
            <div className={`task ${resolved.includes(c.id) ? "done" : ""}`} key={c.id}>
              <button onClick={() => setResolved((r) => [...r, c.id])}>
                {resolved.includes(c.id) && <Icon name="check" size={14} />}
              </button>
              <div>
                <b>{c.text}</b>
                <small>
                  Alex · From comment <code>{c.time}</code>
                </small>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export function Deliverables() {
  const rows = [
    ["Master", "H.264", "1920 × 1080", "Oct 14", 68, "In Progress"],
    ["Social Cut", "H.264", "1080 × 1920", "Oct 16", 45, "In Progress"],
    ["Trailer", "ProRes 422", "3840 × 2160", "Oct 12", 100, "Approved"],
    ["Teaser Cut", "H.264", "1080 × 1080", "Oct 10", 20, "Overdue"],
  ] as const;
  return (
    <div className="screen">
      <PageHeader
        eyebrow="OUTPUTS"
        title="Deliverables"
        subtitle="Specs, versions and deadlines in one clean handoff."
        action={<Button>+ Add Deliverable</Button>}
      />
      <div className="deliverable-summary">
        <div>
          <span>DUE THIS WEEK</span>
          <b>3</b>
        </div>
        <div>
          <span>IN REVIEW</span>
          <b>2</b>
        </div>
        <div>
          <span>APPROVED</span>
          <b>12</b>
        </div>
        <div>
          <span>STORAGE USED</span>
          <b>86 GB</b>
          <small>of 200 GB</small>
        </div>
      </div>
      <div className="table-wrap panel">
        <div className="table-title">
          <h2>Nike Brand Film</h2>
          <div>
            <Button secondary>
              <Icon name="search" size={16} /> Search
            </Button>
            <Button secondary>
              <Icon name="filter" size={16} /> Filter
            </Button>
          </div>
        </div>
        <div className="deliverable-table">
          <div className="table-row table-head">
            <span>DELIVERABLE</span>
            <span>FORMAT</span>
            <span>SPEC</span>
            <span>DUE</span>
            <span>PROGRESS</span>
            <span>STATUS</span>
            <span></span>
          </div>
          {rows.map((r) => (
            <div className="table-row" key={r[0]}>
              <span>
                <b>{r[0]}</b>
                <small>Owner · Alex</small>
              </span>
              <span>{r[1]}</span>
              <span>{r[2]}</span>
              <span>{r[3]}</span>
              <span>
                <b>{r[4]}%</b>
                <Progress value={r[4]} />
              </span>
              <span>
                <Badge tone={r[5] === "Approved" ? "green" : r[5] === "Overdue" ? "red" : "gold"}>
                  {r[5]}
                </Badge>
              </span>
              <span>
                <button className="room-link">
                  <Icon name="play" size={15} /> Room
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Jobs({ navigate }: { navigate: (s: Screen) => void }) {
  const jobs = [
    {
      title: "Lead Film Editor",
      company: "Placements24",
      place: "Midrand, Gauteng",
      salary: "R350K–R520K per year",
      score: 82,
      missing: "Avid",
      date: "2h ago",
    },
    {
      title: "Video Editor",
      company: "Frame South",
      place: "Johannesburg · Hybrid",
      salary: "R25K per month",
      score: 76,
      missing: "After Effects",
      date: "1d ago",
    },
    {
      title: "Senior Post Producer",
      company: "Northstar Studios",
      place: "Cape Town · Remote",
      salary: "R480K–R620K per year",
      score: 71,
      missing: "Budgeting",
      date: "2d ago",
    },
  ];
  return (
    <div className="screen">
      <PageHeader
        eyebrow="LIHLO JOBS"
        title="Find work that fits your cut."
        subtitle="Match scores based on your real portfolio and proven skills."
      />
      <div className="toolbar">
        <div className="searchbox">
          <Icon name="search" />
          <input placeholder="Role, skill, or company" />
          <span>Midrand</span>
        </div>
        <Button>
          <Icon name="search" size={16} /> Find jobs
        </Button>
      </div>
      <div className="jobs-tabs">
        <div className="tabs">
          {["Recommended", "Saved", "Applied", "Interview"].map((x, i) => (
            <button className={i === 0 ? "active" : ""} key={x}>
              {x}
              {i > 0 && <small>{i}</small>}
            </button>
          ))}
        </div>
        <span>24 jobs matched</span>
      </div>
      <div className="jobs-list">
        {jobs.map((job, i) => (
          <article className="job-card" key={job.title}>
            <div className={`company-mark c${i}`}>{job.company[0]}</div>
            <div className="job-main">
              <div>
                <small>
                  {job.company} · {job.date}
                </small>
                <h2>{job.title}</h2>
                <p>
                  {job.place} <span>•</span> Full-time
                </p>
              </div>
              <div className="job-tags">
                <span>{job.salary}</span>
                <span>Post-production</span>
                <span>Commercial</span>
              </div>
              <div className="missing">
                <b>Missing skill:</b> {job.missing}
              </div>
            </div>
            <div className="match-box">
              <Badge tone="gold">MATCH SCORE</Badge>
              <strong>
                {job.score}
                <sup>%</sup>
              </strong>
              <Progress value={job.score} />
              <Button onClick={() => navigate("job-detail")}>
                {i === 0 ? "View match" : "View job"}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function JobDetail({ onApplied }: { onApplied: () => void }) {
  const [applied, setApplied] = useState(false);
  const apply = () => {
    setApplied(true);
    onApplied();
  };
  return (
    <div className="screen job-detail-screen">
      <button className="text-back">
        <Icon name="arrow" /> Back to jobs
      </button>
      <div className="job-detail-grid">
        <main>
          <div className="job-hero panel">
            <div className="company-mark c0">P</div>
            <div>
              <span>PLACEMENTS24 · FULL-TIME</span>
              <h1>Lead Film Editor</h1>
              <p>Midrand, Gauteng · On-site / Hybrid</p>
            </div>
            <button className="icon-button">♡</button>
          </div>
          <section className="panel job-copy">
            <h2>About the role</h2>
            <p>
              Lead editorial craft across high-profile film and branded documentary projects. You’ll
              shape stories, mentor a small post team, and own the finish from offline to delivery.
            </p>
            <h2>What you’ll bring</h2>
            <ul>
              {["Premiere Pro", "DaVinci Resolve", "Avid", "Colour grading", "Sound mixing"].map(
                (x, i) => (
                  <li key={x}>
                    <span className={i === 2 ? "missing-dot" : ""}>{i === 2 ? "!" : "✓"}</span>
                    {x}
                    {i === 2 && <small> Missing from profile</small>}
                  </li>
                ),
              )}
            </ul>
          </section>
          <section className="showreel-panel panel">
            <div className="section-heading">
              <div>
                <span className="eyebrow">YOUR SUBMISSION</span>
                <h2>Showreel preview</h2>
              </div>
              <Badge tone="green">READY</Badge>
            </div>
            <div className="showreel">
              <img src="/lihlo-editorial.svg" alt="Filmmaker holding a camera" />
              <button className="big-play">
                <Icon name="play" />
              </button>
            </div>
            <div className="watch-row">
              <span>Recruiter watch rate</span>
              <b>85%</b>
            </div>
            <Progress value={85} />
          </section>
        </main>
        <aside>
          <div className="match-score panel">
            <span className="eyebrow">YOUR MATCH SCORE</span>
            <strong>
              82<sup>%</sup>
            </strong>
            <p>Strong match. Your commercial work and finish skills stand out.</p>
            <div className="score-breakdown">
              {[
                ["Tools", 30],
                ["Craft", 25],
                ["Finish", 20],
                ["Leadership", 15],
                ["Proof", 10],
              ].map((x) => (
                <div key={x[0]}>
                  <span>{x[0]}</span>
                  <Progress value={Number(x[1]) * 3.1} />
                  <b>{x[1]}</b>
                </div>
              ))}
            </div>
          </div>
          <div className="apply-card panel">
            <b>R350K–R520K</b>
            <span>per year · Benefits included</span>
            <Button onClick={apply}>{applied ? "Hire Room Created" : "Apply with Showreel"}</Button>
            {applied && <Badge tone="green">APPLICATION SENT · 82% MATCH</Badge>}
            <small>Your Lihlo Hire Room shares your showreel, skills and proof of work.</small>
          </div>
        </aside>
      </div>
      <div className="mobile-sticky-apply">
        <div>
          <b>82% Match</b>
          <small>Lead Film Editor</small>
        </div>
        <Button onClick={apply}>{applied ? "Hire Room Created" : "Apply with Showreel"}</Button>
      </div>
    </div>
  );
}

export function Portfolio({ approved }: { approved: boolean }) {
  const reels = [
    ["Nike Brand Film", "Commercial · 2026", "1:12", "yellow"],
    ["Tech Launch Ad", "Brand film · 2026", "0:45", "blue"],
    ["Doc Episode 03", "Documentary · 2025", "3:20", "pink"],
    ["Fashion Lookbook", "Fashion film · 2025", "1:05", "mint"],
  ];
  return (
    <div className="portfolio-screen">
      <section className="portfolio-hero">
        <div className="portfolio-nav">
          <Logo />
          <div>
            <button>Work</button>
            <button>About</button>
            <Button>Hire Me</Button>
          </div>
        </div>
        <div className="portfolio-intro">
          <div className="profile-photo">
            <img src="/lihlo-editorial.svg" alt="Alex, lead editor" />
            <i>AVAILABLE</i>
          </div>
          <div>
            <span className="eyebrow">LEAD EDITOR · MIDRAND, GAUTENG</span>
            <h1>
              I make every
              <br />
              <em>cut count.</em>
            </h1>
            <p>
              Editor for commercials and branded documentaries. 7 years shaping stories, remotely
              and on-set.
            </p>
            <div className="skills">
              <span>Premiere Pro</span>
              <span>DaVinci Resolve</span>
              <span>Colour</span>
              <span>Sound</span>
            </div>
            <div className="portfolio-actions">
              <Button>Hire Me</Button>
              <button>
                <Icon name="link" size={16} /> hire.lihlo.studio/alex
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2>Showreel</h2>
          </div>
          <span className="auto-note">
            <Icon name="check" size={14} /> Auto-updates when a Room is Approved
          </span>
        </div>
        {approved && (
          <div className="portfolio-alert">
            <Icon name="check" /> Nike Brand Film was approved and added to your portfolio.
          </div>
        )}
        <div className="reel-grid">
          {reels.map((r, i) => (
            <article key={r[0]} className={`reel ${r[3]}`}>
              <div className="reel-art">
                <span>0{i + 1}</span>
                <button>
                  <Icon name="play" />
                </button>
              </div>
              <div>
                <span>{r[1]}</span>
                <h3>{r[0]}</h3>
                <code>{r[2]}</code>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function MiniCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="month-grid">
      <div className="week">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <b key={i}>{d}</b>
        ))}
      </div>
      <div className="days">
        {[...Array(3)].map((_, i) => (
          <span key={`e${i}`} />
        ))}
        {days.map((d) => (
          <button key={d} className={[14, 16, 18].includes(d) ? "event" : d === 12 ? "today" : ""}>
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CalendarSettings() {
  const [watermark, setWatermark] = useState(true);
  const [auto, setAuto] = useState(true);
  return (
    <div className="screen">
      <PageHeader
        eyebrow="SCHEDULE + ACCOUNT"
        title="Calendar & Settings"
        subtitle="Keep your reviews on time and your studio configured."
        action={<Button>+ Add event</Button>}
      />
      <div className="calendar-settings-grid">
        <section className="calendar-large panel">
          <div className="calendar-title">
            <button>←</button>
            <div>
              <span className="eyebrow">2026</span>
              <h2>October</h2>
            </div>
            <button>→</button>
          </div>
          <MiniCalendar />
          <div className="events">
            <h3>Upcoming</h3>
            {[
              ["14", "Review Nike Cut", "10:00 AM", "red"],
              ["16", "Deliver Master", "2:30 PM", ""],
              ["18", "Interview Placements24", "9:00 AM", ""],
            ].map((e) => (
              <div className="event-row" key={e[0]}>
                <strong>{e[0]}</strong>
                <div>
                  <b>{e[1]}</b>
                  <span>{e[2]}</span>
                </div>
                {e[3] && <Badge tone="red">OVERDUE</Badge>}
              </div>
            ))}
          </div>
        </section>
        <section className="settings-panel panel">
          <div className="settings-title">
            <span className="eyebrow">STUDIO SETTINGS</span>
            <h2>Account & billing</h2>
          </div>
          <div className="settings-list">
            {["Profile", "Notifications", "Lihlo Rooms", "Jobs", "Billing", "Privacy"].map(
              (x, i) => (
                <button className={i === 4 ? "active" : ""} key={x}>
                  <Icon name={["user", "bell", "play", "briefcase", "calendar", "settings"][i]} />
                  <span>{x}</span>
                  <b>›</b>
                </button>
              ),
            )}
          </div>
        </section>
        <section className="billing-panel panel">
          <div className="plan">
            <div>
              <Badge>YOUR PLAN</Badge>
              <h2>Creator Pro</h2>
              <p>
                <b>R349</b> / month
              </p>
            </div>
            <Button>Upgrade</Button>
          </div>
          <div className="storage">
            <div>
              <span>Storage</span>
              <b>86 GB of 200 GB</b>
            </div>
            <Progress value={43} />
          </div>
          <div className="toggle-row">
            <div>
              <b>Watermark Client Rooms</b>
              <span>Show your Lihlo identity on review links</span>
            </div>
            <button
              className={`toggle ${watermark ? "on" : ""}`}
              onClick={() => setWatermark(!watermark)}
            >
              <i />
            </button>
          </div>
          <div className="toggle-row">
            <div>
              <b>Auto Portfolio</b>
              <span>Add approved Rooms to your portfolio</span>
            </div>
            <button className={`toggle ${auto ? "on" : ""}`} onClick={() => setAuto(!auto)}>
              <i />
            </button>
          </div>
          <div className="privacy-actions">
            <Button secondary>Download My Data</Button>
            <button className="delete-button">Delete Account</button>
            <small>Privacy controls compliant with POPIA.</small>
          </div>
        </section>
      </div>
    </div>
  );
}

function LegacyApp() {
  const [current, setCurrent] = useState<Screen>("home");
  const [portfolioUpdated, setPortfolioUpdated] = useState(false);
  const render = () => {
    if (current === "home") return <Home navigate={setCurrent} />;
    if (current === "dashboard") return <Dashboard navigate={setCurrent} />;
    if (current === "projects") return <Projects navigate={setCurrent} />;
    if (current === "room") return <Room />;
    if (current === "reviews") return <Reviews />;
    if (current === "deliverables") return <Deliverables />;
    if (current === "jobs") return <Jobs navigate={setCurrent} />;
    if (current === "job-detail") return <JobDetail onApplied={() => setPortfolioUpdated(true)} />;
    if (current === "portfolio") return <Portfolio approved={portfolioUpdated} />;
    return <CalendarSettings />;
  };
  return (
    <div className="app">
      <TopNav current={current} onNavigate={setCurrent} />
      <SideRail current={current} onNavigate={setCurrent} />
      <div className="mobile-screen-picker">
        <label htmlFor="screen-picker">Workspace</label>
        <select
          id="screen-picker"
          value={current}
          onChange={(e) => setCurrent(e.target.value as Screen)}
        >
          {screens.map((s) => (
            <option value={s.id} key={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <main
        className={`app-main ${current === "room" || current === "portfolio" || current === "home" ? "flush" : ""}`}
      >
        {render()}
      </main>
      <MobileNav current={current} onNavigate={setCurrent} />
    </div>
  );
}
