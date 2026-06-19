import './App.css';

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <a href="#" className="logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          SMILE.CRAFT
        </a>
        <a href="https://smiledev.id.vn" className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Quay lại Portfolio
        </a>
      </header>

      {/* Main Container */}
      <main className="container">
        
        {/* Under Construction Section */}
        <section className="under-construction">
          <div className="construction-content">
            <div className="construction-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h20M12 2v20M8 8l8 8M16 8l-8 8"></path>
              </svg>
            </div>
            <h1 className="construction-title">Đang Xây Dựng</h1>
            <p className="construction-subtitle">Website hiện đang trong quá trình phát triển</p>
            <div className="construction-message">
              <p>Chúng tôi đang cập nhật trang web để mang đến trải nghiệm tốt hơn cho bạn.</p>
              <p>Vui lòng quay lại sau!</p>
            </div>
            <div className="construction-loader">
              <div className="loader"></div>
              <span>Đang tải...</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Smilecraft. Phát triển bởi{' '}
          <a href="https://smiledev.id.vn" target="_blank" rel="noopener noreferrer">
            Ha Vu Long
          </a>.
        </p>
      </footer>
    </>
  );
}

export default App;
