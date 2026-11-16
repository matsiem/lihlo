import { Portfolio as LegacyPortfolio } from "./legacy";
export default function Portfolio(props: { approved: boolean }) {
  return (
    <>
      <LegacyPortfolio {...props} />
      <section className="product-stage">
        <span className="eyebrow">PRODUCT STAGE</span>
        <h2>One editor. Every proof point.</h2>
        <div className="fan-deck">
          <article>
            CRAFT<small>Commercial edit</small>
          </article>
          <article>
            FINISH<small>Colour + sound</small>
          </article>
          <article>
            PROOF<small>85% watch rate</small>
          </article>
        </div>
      </section>
    </>
  );
}
