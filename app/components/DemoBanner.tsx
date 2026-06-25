import { DEMO_BLOCK } from "../lib/plans";

export default function DemoBanner() {
  return (
    <div className="demo-band">
      <div className="demo-band-copy">
        <span className="eyebrow">{DEMO_BLOCK.eyebrow}</span>
        <h3>{DEMO_BLOCK.title}</h3>
        <p>{DEMO_BLOCK.description}</p>
      </div>
      <a className="btn primary" href="/demo">
        {DEMO_BLOCK.cta}
      </a>
    </div>
  );
}
