import Icon from './Icon.jsx';

export default function Hero({ data }) {
  if (!data) return null;
  return (
    <section className="hero" id="top">
      <img
        src={data.image}
        alt="剛蒸好的港式點心，蝦餃、燒賣、流沙包陳列在蒸籠中"
        className="hero__bg"
        loading="eager"
        fetchpriority="high"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            {data.headlineTop}
            <br />
            <span className="hero__title-accent">{data.headlineAccent}</span>
          </h1>
          <p className="hero__subtitle">{data.subtitle}</p>

          <ul className="hero__badges">
            {data.badges?.map((b) => (
              <li key={b.label} className="hero__badge">
                <Icon name={b.icon} size={28} className="hero__badge-icon" />
                <span>{b.label}</span>
              </li>
            ))}
          </ul>

          <a href={data.ctaTarget || '#products'} className="btn btn--primary hero__cta">
            {data.ctaLabel} <Icon name="arrow-right" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}