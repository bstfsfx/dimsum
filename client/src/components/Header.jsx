import { useState } from 'react';
import Icon from './Icon.jsx';

const NAV = [
  { label: '人氣組合', href: '#products' },
  { label: '港點單品', href: '#products' },
  { label: '購買流程', href: '#solution' },
  { label: '顧客評價', href: '#reviews' },
  { label: '常見問題', href: '#faq' },
];

export default function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" className="logo" aria-label="港味到家 首頁">
          <span className="logo-mark">點</span>
          <span className="logo-text">
            港味<span className="logo-text-em">到家</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="主導覽">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-line-btn" href="#line" aria-label="加入 LINE 詢問">
            <span className="nav-line-icon" aria-hidden="true">LINE</span>
            <span>加入LINE詢問</span>
          </a>
          <a className="nav-cart" href="#cart" aria-label={`購物車，共 ${cartCount} 件商品`}>
            <Icon name="cart" size={20} />
            <span>購物車</span>
            <span className="nav-cart-count">({cartCount})</span>
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__bar"></span>
          <span className="nav-toggle__bar"></span>
          <span className="nav-toggle__bar"></span>
        </button>
      </div>

      {open && (
        <ul className="mobile-menu" id="primary-menu">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#line" className="mobile-line" onClick={() => setOpen(false)}>
              加入 LINE 詢問
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}