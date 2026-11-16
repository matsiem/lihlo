import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";

export function KIcon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
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
    check: <path d="m5 12 4 4L19 6" />,
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </>
    ),
    play: (
      <>
        <rect x="3" y="4" width="18" height="16" />
        <path d="m10 9 6 3-6 3z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1-5 4-7 8-7s7 2 8 7" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
    command: (
      <>
        <path d="M9 6V4a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v16a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M4 20h16" />
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

export function KButton({
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" }) {
  return (
    <button {...props} className={`k-button ${props.className || ""}`} data-variant={variant} />
  );
}
export function KBadge({ children }: { children: ReactNode }) {
  return <span className="k-badge">{children}</span>;
}
export function KCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`k-card ${className}`}>{children}</section>;
}
export function KInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`k-input ${props.className || ""}`} />;
}
export function KSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`k-select ${props.className || ""}`} />;
}
export function KProgress({ value }: { value: number }) {
  return (
    <div className="k-progress" role="progressbar" aria-valuenow={value}>
      <i style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
export function KTabs({
  items,
  value,
  onChange,
}: {
  items: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="k-tabs" role="tablist">
      {items.map((item) => (
        <button
          className="k-tab"
          role="tab"
          aria-selected={value === item}
          onClick={() => onChange(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
export function KDialog({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="k-overlay" onMouseDown={onClose}>
      <div
        className="k-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="k-dialog-head">
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Close">
            <KIcon name="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
export function KSheet({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <>
      <div className="k-overlay" onClick={onClose} />
      <aside className="k-sheet">{children}</aside>
    </>
  );
}
export function KPopover({ open, children }: { open: boolean; children: ReactNode }) {
  return open ? <div className="k-popover">{children}</div> : null;
}
export function KToast({ message }: { message: string | null }) {
  return message ? (
    <div className="k-toast" role="status">
      {message}
    </div>
  ) : null;
}
export function KEmptyState({
  title,
  detail,
  action,
}: {
  title: string;
  detail: string;
  action?: ReactNode;
}) {
  return (
    <div className="k-empty">
      <KIcon name="search" size={28} />
      <h3>{title}</h3>
      <p>{detail}</p>
      {action}
    </div>
  );
}
export function KSkeleton({ height = "4rem" }: { height?: string }) {
  return <div className="k-skeleton" style={{ height }} aria-label="Loading" />;
}
