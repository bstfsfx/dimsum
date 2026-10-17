export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>港味到家</h4>
            <p>把港式飲茶帶進你家冰箱。</p>
          </div>
          <div>
            <h4>商品分類</h4>
            <ul>
              <li><a href="#products">人氣組合</a></li>
              <li><a href="#products">港點單品</a></li>
              <li><a href="#products">家庭飲茶組</a></li>
              <li><a href="#products">情境推薦</a></li>
            </ul>
          </div>
          <div>
            <h4>客戶服務</h4>
            <ul>
              <li><a href="#faq">常見問題</a></li>
              <li><a href="#reviews">顧客評價</a></li>
              <li><a href="#line">加入 LINE</a></li>
              <li><a href="#contact">聯絡我們</a></li>
            </ul>
          </div>
          <div>
            <h4>聯絡資訊</h4>
            <ul>
              <li>客服電話：02-XXXX-XXXX</li>
              <li>Email：info@dimsum-home.com</li>
              <li>營業時間：週一至週五 09:00–18:00</li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">© 2026 港味到家 — Hong Kong Dim Sum. All rights reserved.</p>
      </div>
    </footer>
  );
}