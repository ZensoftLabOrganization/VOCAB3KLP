import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-circle">OX</span>
          <div>
            <strong>Oxford 3000</strong>
            <small>COMPLETE VOCAB SYSTEM</small>
          </div>
        </div>

        <nav>
          <a href="#features">কীভাবে শিখবেন</a>
          <a href="#system">Learning System</a>
          <a href="#experience">অভিজ্ঞতা</a>
          <a href="#faq">FAQ</a>
          <button>এখনই শুরু করুন</button>
        </nav>

        <button className="menu-btn">☰</button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">OXFORD 3000 VOCABULARY</span>

          <h1>Oxford 3000 Vocab</h1>

          <h2>Complete Learning System</h2>

          <p>
            শুধু শব্দ মুখস্থ নয়—সঠিক নিয়মে Vocabulary শিখুন, ব্যবহার করুন এবং
            দীর্ঘদিন মনে রাখুন।
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">এখনই শুরু করুন</button>
            <button className="secondary-btn">কীভাবে শিখবেন ↓</button>
          </div>

          <small className="hero-note">
            ৩ মাসে vocabulary শেখার একটি structured system
          </small>
        </div>

        {/* Book / App Demo */}
        <div className="hero-image">
          <div className="book">
            <span>Oxford</span>
            <strong>3000</strong>
            <small>VOCABULARY</small>
          </div>

          <div className="phone phone-one">
            <b>OX</b>
            <span>3000</span>
          </div>

          <div className="phone phone-two">
            <span>Vocabulary</span>
            <b>Learn</b>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <strong>3,000</strong>
          <span>Core Words</span>
        </div>

        <div>
          <strong>5,000+</strong>
          <span>Examples</span>
        </div>

        <div>
          <strong>300+</strong>
          <span>Lessons</span>
        </div>

        <div>
          <strong>Learning</strong>
          <span>Principles</span>
        </div>

        <div>
          <strong>Offline</strong>
          <span>Support</span>
        </div>

        <div>
          <strong>App</strong>
          <span>Access</span>
        </div>
      </section>
      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="section-label">শেখার পদ্ধতি</div>

          <h2>কীভাবে শেখা হবে</h2>

          <p>সহজ ও বাস্তব উদাহরণের মাধ্যমে প্রতিটি vocabulary শেখানো হবে।</p>

          <div className="video-card">
            <div className="video-content">
              <div className="video-text">
                <span>Spoken</span>
                <strong>English</strong>
              </div>

              <button className="play-button">▶</button>

              <span className="video-badge">ভিডিও দেখুন</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-label">LEARNING FEATURES</div>

          <h2>কীভাবে শিখতে চান?</h2>

          <p className="section-description">
            আপনার শেখার সুবিধার জন্য একাধিক learning format।
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">▣</div>
              <h3>Dedicated Video Lesson</h3>
              <p>প্রতিটি vocabulary-এর জন্য সহজ ও পরিষ্কার video lesson।</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◉</div>
              <h3>Dedicated Audio Podcast</h3>
              <p>শুনতে শুনতে vocabulary practice করুন।</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">▤</div>
              <h3>Dedicated Android App</h3>
              <p>যেকোনো জায়গা থেকে app দিয়ে revision করুন।</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✦</div>
              <h3>Vocal Exercise</h3>
              <p>উচ্চারণ ও speaking practice করার সুযোগ।</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↔</div>
              <h3>Word Tongue Twister</h3>
              <p>শব্দ মুখে ব্যবহার করার বিশেষ practice।</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Practice + Revision Support</h3>
              <p>নিয়মিত practice ও revision support।</p>
            </div>
          </div>

          <div className="feature-bottom">
            Offline + Online learning support এবং special exercise
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
