import Icon from './Icon.jsx';

export default function ServiceIcons({ items = [] }) {
  return (
    <section className="section section--icons" aria-label="服務流程">
      <div className="container">
        <ul className="icon-row">
          {items.map((it, i) => (
            <li key={i} className="icon-row__item">
              <span className="icon-row__circle">
                <Icon name={it.icon} size={28} />
              </span>
              <span className="icon-row__label">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}