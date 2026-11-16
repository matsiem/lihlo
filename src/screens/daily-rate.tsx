import { useMemo, useState } from "react";
import { KButton, KCard, KInput, KProgress, KToast } from "../components/k";
export default function DailyRate() {
  const [living, setLiving] = useState(15000),
    [business, setBusiness] = useState(4000),
    [tax, setTax] = useState(25),
    [savings, setSavings] = useState(3000),
    [days, setDays] = useState(15),
    [covered, setCovered] = useState(false),
    [toast, setToast] = useState<string | null>(null);
  const rate = useMemo(
    () =>
      Math.round(
        (living + (covered ? 0 : business) + (living * tax) / 100 + savings + 2000) / days / 50,
      ) * 50,
    [living, business, tax, savings, days, covered],
  );
  const input = (label: string, value: number, set: (n: number) => void) => (
    <label className="rate-field">
      <span>{label}</span>
      <KInput type="number" value={value} onChange={(e) => set(Number(e.target.value))} />
      <input
        type="range"
        min="0"
        max={label.includes("Days") ? 22 : 30000}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
      />
    </label>
  );
  return (
    <div className="screen">
      <div className="page-header">
        <div>
          <span className="eyebrow">DAILY RATE CALCULATOR</span>
          <h1>What should you charge per day?</h1>
          <p>Based on your real costs, not what others charge.</p>
        </div>
      </div>
      <div className="rate-layout">
        <KCard>
          {input("Monthly Living Costs", living, setLiving)}
          {input("Monthly Business Costs", business, setBusiness)}
          {input("Tax %", tax, setTax)}
          {input("Savings Goal", savings, setSavings)}
          {input("Billable Days", days, setDays)}
          <label className="control-toggle">
            <input
              type="checkbox"
              checked={covered}
              onChange={(e) => setCovered(e.target.checked)}
            />
            <span>Studio Covers Costs</span>
          </label>
        </KCard>
        <KCard className="rate-result">
          <span className="eyebrow">RECOMMENDED RATE</span>
          <h2>
            R{rate.toLocaleString()}
            <small> / day</small>
          </h2>
          <p>(Living + Business + Tax + Savings + Gear) / Billable Days</p>
          <div className="rate-splits">
            <span>
              Half Day <b>R{Math.round(rate * 0.6)}</b>
            </span>
            <span>
              Hourly <b>R{Math.round(rate / 8)}</b>
            </span>
            <span>
              Studio Rate <b>R{Math.round(rate * 0.9)}</b>
            </span>
          </div>
          <h3>Camera goal · R18,000 / R50,000</h3>
          <KProgress value={36} />
          <KButton onClick={() => setToast("Rate saved and ready for new Quotes")}>
            Save My Rate
          </KButton>
          <KButton variant="secondary">Use Rate in Quotes</KButton>
          <small>Guide only. Talk to your accountant.</small>
        </KCard>
      </div>
      <KToast message={toast} />
    </div>
  );
}
