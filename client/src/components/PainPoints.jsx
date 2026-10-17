export default function PainPoints({ items = [] }) {
  return (
    <section className="section section--pain" id="pain">
      <div className="container">
        <h2 className="section__title">想吃港點，卻常常卡在這幾件事？</h2>

        <ul className="pain-grid">
          {items.map((p, i) => (
            <li key={i} className="pain-card">
              <span className="pain-card__num">{i + 1}</span>
              <div className="pain-card__media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <h3 className="pain-card__title">{p.title}</h3>
              <p className="pain-card__desc">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}