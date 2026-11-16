import { useEffect, useState } from "react";
import { KBadge, KButton, KCard, KProgress, KSelect, KSkeleton } from "../components/k";
import { useDemo, type DemoRole } from "../lib/demo-bridge";

const looks = ["lihlo-color", "lihlo-dark", "lihlo-contrast"];
const pairs = [
  "lihlo-default",
  "corporate-foundry",
  "agency-expressive",
  "agency-brutalist",
  "cinema-broadcast",
  "editorial-narrative",
  "ecommerce-luxury",
  "hitech-cyber",
  "highveld-editorial",
];
const roles: DemoRole[] = ["SUPER_ADMIN", "ADMIN", "DEVELOPER", "FUNDER", "MEMBER", "VIEWER"];

export default function TokenController() {
  const { isDemo, activeRole, setActiveRole, roleLevel } = useDemo();
  const [look, setLook] = useState(document.documentElement.dataset.look || "lihlo-color");
  const [pair, setPair] = useState(document.documentElement.dataset.godPair || "lihlo-default");
  const [reduced, setReduced] = useState(false);
  const [skeletons, setSkeletons] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.look = look;
  }, [look]);
  useEffect(() => {
    document.documentElement.dataset.godPair = pair;
  }, [pair]);
  useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(reduced);
  }, [reduced]);
  return (
    <div className="screen token-controller">
      <div className="page-header">
        <div>
          <span className="eyebrow">KOKETSO FOUNDRY · LIHLO STUDIO · TOKEN & LOOK CONTROLLER</span>
          <h1>Token & Look Controller</h1>
          <p>Universal styling, type, motion and demo permissions—live.</p>
        </div>
        <KBadge>Tenant: org_demo_showcase · Role: ADMIN · isDemo: true</KBadge>
      </div>
      <KCard className="controller-section">
        <span className="eyebrow">COLOR & SURFACE ROLES</span>
        <h2>Semantic look bindings</h2>
        <div className="role-swatches">
          {[
            "surface-0",
            "surface-1",
            "surface-2",
            "surface-glass",
            "text-primary",
            "text-secondary",
            "text-muted",
            "action-primary",
            "accent",
            "feature-rooms",
            "feature-deliverables",
            "feature-jobs",
            "feature-portfolio",
            "feature-calendar",
          ].map((role) => (
            <div key={role}>
              <i data-role-swatch={role} />
              <code>--k-{role}</code>
            </div>
          ))}
        </div>
      </KCard>
      <div className="material-grid">
        <KCard>
          <span className="eyebrow">MATERIALITY 1</span>
          <h3>Card Level 1</h3>
          <p>Subtle hairline on surface 0.</p>
        </KCard>
        <KCard>
          <span className="eyebrow">MATERIALITY 2</span>
          <h3>Floating Card</h3>
          <p>Medium shadow on surface 1.</p>
        </KCard>
        <KCard>
          <span className="eyebrow">MATERIALITY 3</span>
          <h3>Modal + Glass</h3>
          <p>Large shadow with backdrop blur.</p>
        </KCard>
      </div>
      <KCard className="controller-section">
        <span className="eyebrow">COMPONENT SANITY</span>
        <div className="sanity-row">
          <KButton>Primary</KButton>
          <KButton variant="secondary">Secondary</KButton>
          <KSelect>
            <option>KInput / Select</option>
          </KSelect>
          <KBadge>Approved</KBadge>
        </div>
        <div className="sanity-cards">
          <article>Nike Brand Film</article>
          <article>Tech Launch</article>
          <article>Doc Episode 03</article>
        </div>
      </KCard>
      <div className="token-grid">
        <KCard>
          <span className="eyebrow">L2 APPEARANCE</span>
          <h2>Look switcher</h2>
          <KSelect value={look} onChange={(e) => setLook(e.target.value)}>
            {looks.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </KSelect>
          <div className="swatch-line">
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>The original lihlo-color look remains the default.</p>
        </KCard>
        <KCard>
          <span className="eyebrow">GOD FONT PAIRS</span>
          <h2>Typography</h2>
          <KSelect value={pair} onChange={(e) => setPair(e.target.value)}>
            {pairs.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </KSelect>
          <div className="type-preview">
            <h3>See every cut clearly.</h3>
            <p>Bona. Hlola. Qeda. The eye stays on the story.</p>
            <code>00:01:14:18</code>
          </div>
        </KCard>
        <KCard>
          <span className="eyebrow">MOTION + PHYSICS</span>
          <h2>Playground</h2>
          <div className="motion-stage">
            <i />
            <i />
            <i />
          </div>
          <label className="control-toggle">
            <input
              type="checkbox"
              checked={reduced}
              onChange={(e) => setReduced(e.target.checked)}
            />
            <span>Reduced motion simulator</span>
          </label>
          <label className="control-toggle">
            <input
              type="checkbox"
              checked={skeletons}
              onChange={(e) => setSkeletons(e.target.checked)}
            />
            <span>Skeleton preview</span>
          </label>
          {skeletons && (
            <div className="skeleton-stack">
              <KSkeleton />
              <KSkeleton height="2.5rem" />
            </div>
          )}
        </KCard>
        {isDemo && (
          <KCard>
            <span className="eyebrow">DEMO-ONLY IAM</span>
            <h2>6-role switcher</h2>
            <KSelect value={activeRole} onChange={(e) => setActiveRole(e.target.value as DemoRole)}>
              {roles.map((role) => (
                <option key={role}>
                  {role} · level{" "}
                  {role === "SUPER_ADMIN"
                    ? 5
                    : role === "ADMIN"
                      ? 4
                      : role === "DEVELOPER"
                        ? 3
                        : role === "VIEWER"
                          ? 1
                          : 2}
                </option>
              ))}
            </KSelect>
            <div className="iam-preview">
              <b>Permission level {roleLevel}</b>
              <KProgress value={roleLevel * 20} />
              <p>
                {["FUNDER", "VIEWER"].includes(activeRole)
                  ? "Edit, create and delete controls are disabled."
                  : "Mutation controls are enabled."}
              </p>
            </div>
          </KCard>
        )}
      </div>
      <KCard className="manifest">
        <div className="section-heading">
          <div>
            <span className="eyebrow">@ADOPT</span>
            <h2>Token & Look Controller Adoption Manifest</h2>
          </div>
          <KButton variant="secondary">Copy manifest</KButton>
        </div>
        <div className="manifest-grid">
          <div>
            <KBadge>new-look</KBadge>
            <h3>cinema-screening</h3>
            <p>Violet-on-grading-room palette for client premieres and controlled screenings.</p>
          </div>
          <div>
            <KBadge>new-token</KBadge>
            <h3>surface-glass · blur-glass · action-primary-hover</h3>
            <p>Portable roles for overlays, translucent rails and explicit action feedback.</p>
          </div>
          <div>
            <KBadge>new-motion</KBadge>
            <h3>ease-editorial · dur-5</h3>
            <p>Long editorial reveal for media cards and fan-deck transitions.</p>
          </div>
          <div>
            <KBadge>new-god-pair</KBadge>
            <h3>highveld-editorial</h3>
            <ul>
              <li>xHeightCompatibility: balanced caption rhythm</li>
              <li>contrastAndHierarchy: expressive serif / clean sans</li>
              <li>emotionalTone: warm, cinematic authority</li>
              <li>opticalLegibility: clear at edit-suite distance</li>
              <li>industryContext: African film treatments and decks</li>
            </ul>
          </div>
        </div>
      </KCard>
    </div>
  );
}
