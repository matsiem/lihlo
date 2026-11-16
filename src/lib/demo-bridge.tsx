import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type DemoRole = "SUPER_ADMIN" | "ADMIN" | "DEVELOPER" | "FUNDER" | "MEMBER" | "VIEWER";
const roleLevels: Record<DemoRole, number> = {
  SUPER_ADMIN: 5,
  ADMIN: 4,
  DEVELOPER: 3,
  FUNDER: 2,
  MEMBER: 2,
  VIEWER: 1,
};
type DemoContextValue = {
  isDemo: true;
  tenant_id: "demo";
  activeRole: DemoRole;
  roleLevel: number;
  canEdit: boolean;
  setActiveRole: (role: DemoRole) => void;
  resetAll: () => void;
};
const DemoContext = createContext<DemoContextValue | null>(null);
export function DemoProvider({ children }: { children: ReactNode }) {
  const [activeRole, setActiveRole] = useState<DemoRole>("ADMIN");
  const resetAll = () => {
    setActiveRole("ADMIN");
    document.documentElement.dataset.look = "lihlo-color";
    document.documentElement.dataset.godPair = "lihlo-default";
    document.documentElement.dataset.reducedMotion = "false";
    localStorage.clear();
  };
  const value = useMemo(
    () => ({
      isDemo: true as const,
      tenant_id: "demo" as const,
      activeRole,
      roleLevel: roleLevels[activeRole],
      canEdit: !["FUNDER", "VIEWER"].includes(activeRole),
      setActiveRole,
      resetAll,
    }),
    [activeRole],
  );
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}
export function useDemo() {
  const value = useContext(DemoContext);
  if (!value) throw new Error("useDemo must be used inside DemoProvider");
  return value;
}
export function useAuthBridge() {
  return useDemo();
}
