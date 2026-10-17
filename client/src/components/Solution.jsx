import Icon from './Icon.jsx';

export default function Solution({ data }) {
  if (!data) return null;
  return (
    <section className="section section--solution" id="solution">
      <div className="container">
        <div className="solution__layout">
          <div className="solution__text">
            <h2 className="section__title section__title--left">{data.title}</h2>
            <p className="solution__lede">{data.subtitle}</p>

            <ul className="solution__features">
              {data.features?.map((f, i) => (
                <li key={i} className="solution-feature">
                  <span className="solution-feature__check" aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="solution__steps">
            {data.steps?.map((s) => (
              <div key={s.num} className="step">
                <span className="step__num">{s.num}</span>
                <div className="step__media">
                  <img src={s.image} alt={s.label} loading="lazy" />
                </div>
                <p className="step__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}