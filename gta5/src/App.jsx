import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <a href="https://smiledev.id.vn" className="logo">
          <span className="logo-mark">GTA5</span>
          <span>SMILE.DEV</span>
        </a>
        <a href="https://smiledev.id.vn" className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Quay lại Portfolio
        </a>
      </header>

      <main className="container">
        <section className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            Đang xây dựng
          </div>
          <h1 className="hero-title">
            <span>GTA5 Online</span> đang trong quá trình phát triển
          </h1>
          <p className="hero-desc">
            Đây sẽ là khu vực dành cho dự án FiveM của tôi. Hiện tại trang vẫn đang được hoàn thiện,
            vui lòng quay lại sau để xem nội dung đầy đủ.
          </p>

          <div className="hero-actions">
            <a href="https://smiledev.id.vn" className="primary-btn">Về trang chủ</a>
            <a href="mailto:smile2004.dev@gmail.com" className="secondary-btn">Liên hệ nhanh</a>
          </div>
        </section>

        <section className="grid">
          <article className="card">
            <h2 className="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"></path></svg>
              Trạng thái
            </h2>
            <p>Chúng tôi đang xây dựng giao diện, nội dung giới thiệu và các thông tin liên quan đến server FiveM.</p>
          </article>

          <article className="card">
            <h2 className="card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M12 4h9"></path><path d="M4 9h16"></path><path d="M4 15h16"></path></svg>
              Dự kiến
            </h2>
            <p>Trang sẽ được dùng để giới thiệu dự án, cập nhật tính năng và điều hướng tới các nội dung cần thiết.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Smile Dev. FiveM project is under construction.
        </p>
      </footer>
    </>
  );
}

export default App;
