import { useState } from "react";
import { KBadge, KButton, KCard, KProgress, KTabs, KToast } from "../components/k";
export default function BusinessPerformance() {
  const [tab, setTab] = useState("Quotes");
  const [toast, setToast] = useState<string | null>(null);
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">BUSINESS PERFORMANCE</span>
          <h1>Operations, clearly.</h1>
          <p>This Month · Revenue, pipeline and obligations.</p>
        </div>
        <KButton>New Quote</KButton>
      </div>
      <div className="metric-grid">
        {[
          ["Invoiced", "R42,000", "↑ 12%"],
          ["Paid", "R28,000", "R14,000 outstanding"],
          ["Utilization", "68%", "32% admin"],
          ["Pipeline", "R85,000", "3 quotes pending"],
        ].map((x, i) => (
          <KCard key={x[0]}>
            <span className="eyebrow">{x[0]}</span>
            <h2>{x[1]}</h2>
            <p>{x[2]}</p>
            {i === 2 && <KProgress value={68} />}
          </KCard>
        ))}
      </div>
      <KCard className="revenue-chart">
        <h2>Revenue by month</h2>
        <div>
          {[28, 42, 35, 60, 48, 70, 62, 78, 85, 68].map((x, i) => (
            <i style={{ height: `${x}%` }} key={i} />
          ))}
        </div>
      </KCard>
      <div className="ops-grid">
        <KCard>
          <h2>Outstanding invoices</h2>
          <div className="invoice-row">
            <span>
              <KBadge>OVERDUE</KBadge>
              <b>#102 · R14,000</b>
            </span>
            <KButton onClick={() => setToast("WhatsApp reminder sent")}>Send Reminder</KButton>
          </div>
          <div className="invoice-row">
            <span>
              <b>#103 · R8,000</b>
              <small>Due Oct 25</small>
            </span>
            <KButton variant="secondary" onClick={() => setToast("Invoice marked paid")}>
              Mark Paid
            </KButton>
          </div>
        </KCard>
        <KCard>
          <KTabs
            items={["Quotes", "Invoices", "Contracts", "Expenses"]}
            value={tab}
            onChange={setTab}
          />
          <h2>{tab}</h2>
          <p>Linked to Project, Deliverable and Calendar.</p>
          <KButton variant="secondary">Create {tab.slice(0, -1)}</KButton>
        </KCard>
      </div>
      <KToast message={toast} />
    </div>
  );
}
