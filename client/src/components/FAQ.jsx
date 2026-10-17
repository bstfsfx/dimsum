import Icon from './Icon.jsx';

export default function FAQ({ items = [] }) {
  return (
    <section className="section section--faq" id="faq">
      <div className="container">
        <h2 className="section__title">常見問題</h2>

        <ul className="faq-grid">
          {items.map((f, i) => (
            <li key={i} className="faq-card">
              <h4 className="faq-card__q">{f.question}</h4>
              <p className="faq-card__a">{f.answer}</p>
              <span className="faq-card__icon" aria-hidden="true">
                <Icon name={f.icon || 'thaw'} size={26} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}