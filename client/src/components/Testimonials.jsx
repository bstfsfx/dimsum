import Icon from './Icon.jsx';

export default function Testimonials({ items = [] }) {
  return (
    <section className="section section--reviews" id="reviews">
      <div className="container">
        <h2 className="section__title">真實顧客怎麼說</h2>

        <div className="reviews-wrap">
          <button className="reviews-arrow reviews-arrow--prev" aria-label="上一張" type="button">
            <Icon name="chevron-left" size={20} />
          </button>

          <ul className="reviews-grid">
            {items.map((t, i) => (
              <li key={i} className="review-card">
                <div className="review-card__stars" aria-label={`${t.rating} 顆星`}>
                  {Array.from({ length: t.rating || 5 }).map((_, n) => (
                    <Icon key={n} name="star" size={14} />
                  ))}
                </div>
                <h4 className="review-card__title">{t.title}</h4>
                <p className="review-card__quote">{t.quote}</p>
                <footer className="review-card__author">
                  {t.avatar && <img src={t.avatar} alt="" loading="lazy" />}
                  <span>
                    <strong>{t.author}</strong>
                    <small>{t.location}</small>
                  </span>
                </footer>
              </li>
            ))}
          </ul>

          <button className="reviews-arrow reviews-arrow--next" aria-label="下一張" type="button">
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}