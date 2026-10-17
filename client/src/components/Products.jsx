export default function Products({ items = [] }) {
  return (
    <section className="section section--products" id="products">
      <div className="container">
        <h2 className="section__title">今天想怎麼吃？選一組適合你的港點</h2>

        <ul className="product-grid">
          {items.map((p, i) => (
            <li key={i} className="product-card">
              {p.badge && <span className="product-card__badge">{p.badge}</span>}
              <div className="product-card__media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{p.title}</h3>
                <p className="product-card__desc">{p.description}</p>
                {p.priceLabel && (
                  <p className="product-card__price">
                    <span className="product-card__price-num">{p.priceLabel}</span>
                    {p.priceSuffix && (
                      <span className="product-card__price-suffix">{p.priceSuffix}</span>
                    )}
                  </p>
                )}
                <a
                  href={p.ctaTarget || '#cart'}
                  className={`btn product-card__cta product-card__cta--${p.ctaVariant || 'primary'}`}
                >
                  {p.ctaLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}