export const demoContract = {
  isDemo: true,
  tenant_id: "demo",
  tenant_slug: "lihlo-demo",
  parent_tenant_id: "lemanet",
  subscriptions: ["Creator R399", "Pro Studio R1,299", "Studio + Mahlo R4,999", "Turnkey Pitch"],
} as const;

export const mockProjects = [
  {
    id: "LIHLO-DEMO-2026-00001",
    client_id: "KF-DEMO-2026-00014",
    title: "The Suit",
    director: "Zola Maseko",
    client: "NORTHSTAR",
    status: "IN_REVIEW",
    tier: "Studio + Mahlo R4,999",
    progress: 68,
    room: "v3_rough_cut",
  },
  {
    id: "LIHLO-DEMO-2026-00002",
    client_id: "KF-DEMO-2026-00015",
    title: "Wanaya Fruit Basket",
    director: "Lerato Mokoena",
    client: "WANAYA",
    status: "ACTIVE",
    tier: "Pro Studio R1,299",
    progress: 45,
    room: "v4_colour_lock",
  },
  {
    id: "LIHLO-DEMO-2026-00003",
    client_id: "KF-DEMO-2026-00016",
    title: "Ambani Africa",
    director: "Tumi Dlamini",
    client: "AMBANI",
    status: "OVERDUE",
    tier: "Turnkey Pitch",
    progress: 30,
    room: "v5_final_master",
  },
] as const;

export const searchableDemoItems = [
  ...mockProjects.map((project) => ({ type: "Project", label: project.title, target: "projects" })),
  { type: "Room", label: "The Suit · v3 rough cut", target: "room" },
  { type: "Deliverable", label: "Mahlo Conform Packet", target: "deliverables" },
  { type: "Job", label: "Lead Film Editor · Placements24", target: "jobs" },
] as const;
