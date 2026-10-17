import Icon from './Icon.jsx';

const FEATURES = [
  { icon: 'snowflake', label: '冷凍宅配到家' },
  { icon: 'steam', label: '簡單蒸熱 隨時享用' },
  { icon: 'cart', label: '多種組合 自由搭配' },
  { icon: 'gift', label: '滿額免運 更划算' },
];

export default function FooterCTA({
  image = '/images/img-dimsum-bamboo-steamer.jpg',
}) {
  return (
    <section className="cta">
      <img
        src={image}
        alt="蒸籠裡的港式點心與周邊小菜，溫暖的家裡隨時開一桌"
        className="cta__bg"
        loading="lazy"
      />
      <div className="cta__overlay" aria-hidden="true" />

      <div className="container cta__inner">
        <div className="cta__copy">
          <h2 className="cta__title">
            今天不用特別跑一趟，<br />
            家裡也能開一桌港式飲茶
          </h2>
          <p className="cta__lede">
            一個人的宵夜、兩人的晚餐、週末家庭聚餐，把港點放進冰箱，想吃的時候就蒸熱上桌！
          </p>

          <ul className="cta__features">
            {FEATURES.map((f) => (
              <li key={f.label}>
                <span className="cta-feature__icon" aria-hidden="true">
                  <Icon name={f.icon} size={24} />
                </span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="cta__panel">
          <h3>立即選購港式點心</h3>
          <p>先挑一組你最想吃的港點！</p>

          <a href="#products" className="btn btn--white cta__cart-btn">
            <Icon name="cart" size={18} />
            <span>立即選購人氣港點</span>
          </a>

          <div className="cta__divider">
            <span>或加入LINE詢問</span>
          </div>

          <a href="#line" className="cta__line">
            <span className="cta__line-mark">LINE</span>
            <span>加入LINE</span>
          </a>

          <p className="cta__note">
            不知道哪一組？<br />傳訊息把我們人員與預算~
          </p>
        </aside>
      </div>
    </section>
  );
}