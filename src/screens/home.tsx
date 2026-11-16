import { Home as LegacyHome } from "./legacy";
export default function Home(props: { navigate: (screen: any) => void }) {
  return (
    <>
      <LegacyHome {...props} />
      <section className="showcase-strip">
        <div>
          <span className="eyebrow">HERO CAROUSEL</span>
          <h2>Stories in motion.</h2>
        </div>
        <div className="fan-deck">
          <article>
            THE SUIT<small>Zola Maseko</small>
          </article>
          <article>
            WANAYA<small>Fruit Basket</small>
          </article>
          <article>
            AMBANI<small>Africa</small>
          </article>
        </div>
      </section>
    </>
  );
}
