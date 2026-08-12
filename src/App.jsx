import "./App.css";
import logoImage from "./image/logo.png";
import heroImage from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";

const packageItems = [
  {
    icon: "◉",
    iconClass: "blue",
    title: "ডেডিকেটেড ভিডিও লেসন",
    value: "০২",
    text: "ভালোভাবে চর্চা করার জন্য dedicated video lesson।",
  },
  {
    icon: "◌",
    iconClass: "green",
    title: "স্মার্ট অডিও পডকাস্ট",
    value: "০২",
    text: "শব্দ শুনে অনুশীলন করার জন্য সহজ ও কার্যকর পডকাস্ট।",
  },
  {
    icon: "▣",
    iconClass: "purple",
    title: "ডেডিকেটেড অ্যান্ড্রয়েড অ্যাপ",
    value: "০২",
    text: "অফলাইন অ্যাপের মাধ্যমে যত দরকার, ততই সুবিধা।",
  },
  {
    icon: "◍",
    iconClass: "pink",
    title: "ভোকাল এক্সারসাইজ",
    value: "০৮",
    text: "শব্দের সঠিক উচ্চারণ ও ফ্লুয়েন্সি অনুশীলন করার সুযোগ।",
  },
  {
    icon: "◌",
    iconClass: "red",
    title: "টং টুইস্টার",
    value: "০২",
    text: "জোরে জোরে বলার মাধ্যমে ভাষার গতি ও স্পিকিং উন্নত করুন।",
  },
  {
    icon: "✦",
    iconClass: "orange",
    title: "প্র্যাকটিস + রিভিশন সাপোর্ট",
    value: "০৮",
    text: "নিয়মিত অনুশীলন ও রিভিশনের জন্য সম্পূর্ণ সহায়তা।",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="logo-wrap">
          <img className="logo-image" src={logoImage} alt="Oxford 3000 logo" />
          <div className="logo-copy">
            <span>Oxford 3000</span>
            <small>VOCABULARY SYSTEM</small>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#how">কীভাবে কাজ করে</a>
          <a href="#book">বই দেখুন</a>
          <a href="#package">সম্পূর্ণ প্যাকেজ</a>
          <a href="#students">শিক্ষার্থীদের অভিজ্ঞতা</a>
          <a href="#app">App দেখুন</a>
          <a href="#faq">প্রশ্নোত্তর</a>
        </nav>

        <button className="nav-cta">এখনই শুরু করুন</button>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-tag">Oxford 3000 vocab</span>

            <h1>
              <span className="heading-strong">বাংলাদেশে আমরাই প্রথম</span>
              <span className="heading-light">Oxford 3000 Vocab</span>
            </h1>

            <p>বই, App, Audio, Video ও Practice—সব একসাথে।</p>

            <div className="hero-actions">
              <button className="primary-btn">এখনই শুরু করুন</button>
              <button className="secondary-btn">শেখা শুরু করুন</button>
            </div>

            <small className="hero-note">সারা দেশে ক্যাশ অন ডেলিভারি</small>
          </div>

          <div
            className="hero-visual"
            aria-label="Oxford 3000 books and app preview"
          >
            <div className="visual-glow" />
            <img
              className="hero-product-image"
              src={heroImage}
              alt="Oxford 3000 product mockup"
            />
          </div>
        </div>

        <div className="stats">
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
        </div>
      </section>

      <section className="video-section featured-video">
        <div className="video-header">
          <h2>৫ মিনিটে দেখে নিন</h2>
          <p>ভুলে না যায়, একদম নির্ভুলভাবে</p>
        </div>

        <div className="video-card-wrap">
          <div className="video-card">
            <img src={image2} alt="Spoken English video showcase" />
            <button className="video-play" aria-label="Play video">
              ▶
            </button>
            <div className="floating-badge">ভিউ করুন</div>
          </div>
        </div>
      </section>

      <section className="package-section">
        <div className="package-header">
          <div className="section-kicker">— INCLUDED WITH THE BOOK —</div>
          <h2>বইটির সাথে ফ্রি যা পাচ্ছেন</h2>
          <p>বই কিনলেই এই সবগুলো প্যাকেজ—আলাদা করে নিতে হবে না।</p>
        </div>

        <div className="package-grid">
          {packageItems.map(({ icon, iconClass, title, value, text }) => (
            <div className="package-card" key={title}>
              <div className="package-top-row">
                <div className={`package-icon ${iconClass}`}>{icon}</div>
                <span className="package-tag">{value}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="package-footer">
          <span className="footer-icon">i</span>
          <span>
            Offline App, Vocal Exercise &amp; Tongue Twister বইটির Study Guide-এ
            পাওয়া যাবে
          </span>
        </div>
      </section>

      <section className="video-section mastery-loop">
        <div className="loop-header">
          <div className="section-kicker gold-kicker">— THE MASTERY LOOP —</div>
          <h2>একটি শব্দ শিখবেন যেভাবে</h2>
          <p>
            চারটি ভিন্ন পদ্ধতির মাধ্যমে শব্দটি মুখস্থ হয়ে যাবে এবং নিজে নিজে
            ব্যবহার করতে পারবেন।
          </p>
        </div>

        <div className="loop-grid">
          <article className="loop-card dark">
            <span className="loop-count">০১/০৪</span>
            <h3>দেখুন ও বুঝুন</h3>
            <p>শব্দ, অর্থ, উচ্চারণ ও Example দেখে সহজে শিখুন।</p>
          </article>

          <article className="loop-card teal">
            <span className="loop-count">০২/০৪</span>
            <h3>শুনুন ও ভুলুন</h3>
            <p>Audio শুনুন, নিজে অনুশীলন করুন; শব্দটি মনে রাখুন।</p>
          </article>

          <article className="loop-card purple">
            <span className="loop-count">০৩/০৪</span>
            <h3>লিখে অনুশীলন করুন</h3>
            <p>Example অনুযায়ী বাক্যে ব্যবহার করে শব্দটি নিজের করে নিন।</p>
          </article>

          <article className="loop-card orange">
            <span className="loop-count">০৪/০৪</span>
            <h3>রিভিশন ও ফ্রিকোয়েন্সি</h3>
            <p>নিয়মিত রিভিশন ও Practice-এ শব্দটি ধরে রাখুন।</p>
          </article>
        </div>
      </section>

      <section className="book-showcase-section">
        <div className="book-showcase-header">
          <div className="section-kicker book-kicker">— INSIDE THE BOOK —</div>
          <h2>বইটি একটু পরে দেখুন</h2>
          <p>ভিত্তি ধরে লেখা ভাষার সবচেয়ে সহজ ও সুন্দর শেখার উদাহরণ।</p>
        </div>

        <div className="book-preview-wrap">
          <img
            className="book-preview-image"
            src={image3}
            alt="Oxford 3000 book preview"
          />
        </div>

        <div className="book-actions">
          <button className="book-nav-btn">← আগে পড়ুন</button>
          <div className="book-dots" aria-hidden="true">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <button className="book-nav-btn next">পরের পৃষ্ঠা →</button>
        </div>

        <div className="book-hint">← arrow keys to flip pages</div>
      </section>

      <section className="book-unpacked">
        <div className="book-unpacked-inner">
          <div className="unpacked-heading">
            <div>
              <span className="section-kicker">— THE BOOK, UNPACKED —</span>

              <h2>
                একটি শব্দের সাথে
                <br />
                <span>যা যা পাবেন</span>
              </h2>
            </div>

            <p>
              প্রতিটি শব্দকে শুধু মুখস্থ করার জন্য নয়— বোঝা, বলা, ব্যবহার এবং
              revise করার জন্য একটি complete learning experience তৈরি করা হয়েছে।
            </p>
          </div>

          <div className="unpacked-card">
            <div className="unpacked-card-header">
              <div className="unpacked-number">
                <small>WORD</small>
                <strong>01</strong>
              </div>

              <div>
                <span>COMPLETE STUDY KIT</span>
                <h3>একটি শব্দ, চার ধাপে শেখা</h3>
                <p>Understand → Practice → Use → Remember</p>
              </div>
            </div>

            <div className="unpacked-content">
              <div className="practice-panel">
                <div className="panel-label">
                  <span>01</span>
                  FEATURED PRACTICE
                </div>

                <h3>
                  শুনুন, বলুন,
                  <br />
                  <strong>মনে রাখুন।</strong>
                </h3>

                <div className="practice-row">
                  <div className="practice-icon">◉</div>

                  <div>
                    <h4>Tongue Twister</h4>
                    <p>শব্দটি পরিষ্কারভাবে বলার জন্য speaking practice।</p>
                  </div>
                </div>

                <div className="practice-row">
                  <div className="practice-icon">◌</div>

                  <div>
                    <h4>Vocal Exercise</h4>
                    <p>pronunciation ও fluency উন্নত করার exercise।</p>
                  </div>
                </div>

                <div className="practice-row">
                  <div className="practice-icon">✓</div>

                  <div>
                    <h4>Practice Check</h4>
                    <p>শেখার পরে নিজের progress যাচাই করুন।</p>
                  </div>
                </div>
              </div>

              <div className="word-panel">
                <div className="word-panel-top">
                  <div>
                    <span>02</span>
                    <small>WORD PAGE</small>
                  </div>

                  <em>● READY TO LEARN</em>
                </div>

                <h3>Word Page-এ যা যা থাকবে</h3>

                <div className="word-list">
                  <div>
                    <span>01</span>
                    <b>Word</b>
                    <small>শব্দ</small>
                  </div>

                  <div>
                    <span>02</span>
                    <b>Level</b>
                    <small>Difficulty</small>
                  </div>

                  <div>
                    <span>03</span>
                    <b>IPA / Phonetic</b>
                    <small>উচ্চারণ</small>
                  </div>

                  <div>
                    <span>04</span>
                    <b>Parts of Speech</b>
                    <small>Grammar</small>
                  </div>

                  <div>
                    <span>05</span>
                    <b>বাংলা অর্থ</b>
                    <small>Meaning</small>
                  </div>

                  <div>
                    <span>06</span>
                    <b>Synonym</b>
                    <small>Related</small>
                  </div>

                  <div>
                    <span>07</span>
                    <b>Antonym</b>
                    <small>Opposite</small>
                  </div>

                  <div>
                    <span>08</span>
                    <b>Example</b>
                    <small>Context</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="learning-flow">
              <div>
                <span>LEARNING FLOW</span>
                <p>Learn it → Speak it → Practice it → Remember it</p>
              </div>

              <div className="flow-circle">→</div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-system" id="system">
        <div className="learning-system-inner">
          <div className="learning-system-top">
            <div className="learning-system-copy">
              <span className="system-kicker">— BOOK + DIGITAL SUPPORT</span>

              <h2>
                শুধু বই নয়—পুরো একটি
                <span> Learning System</span>
              </h2>

              <p>
                Oxford 3000 Vocab বই, App, Audio, Video ও Practice একসাথে নিয়ে
                তৈরি একটি সম্পূর্ণ vocabulary learning support system।
              </p>
            </div>

            <div className="system-visual">
              <div className="system-glow"></div>

              <img src={heroImage} alt="Oxford 3000 Learning System" />
            </div>
          </div>

          <div className="system-features">
            <div className="system-card">
              <div className="system-card-icon">▣</div>

              <div>
                <h3>Vocabulary Book</h3>
                <p>
                  Oxford 3000-এর শব্দ, অর্থ, pronunciation, example ও short
                  note।
                </p>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-icon">▦</div>

              <div>
                <h3>Dedicated Android App</h3>
                <p>শব্দ practice ও revision করার জন্য সহজ digital support।</p>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-icon">◉</div>

              <div>
                <h3>Audio</h3>
                <p>শুনে শুনে pronunciation ও vocabulary practice করুন।</p>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-icon">◌</div>

              <div>
                <h3>Video Lesson</h3>
                <p>
                  বিষয়ভিত্তিক vocabulary শেখার জন্য practical video support।
                </p>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-icon">✓</div>

              <div>
                <h3>Practice Support</h3>
                <p>
                  Tongue Twister, Vocal Exercise ও Active Recall-এর মাধ্যমে
                  practice।
                </p>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-icon">↻</div>

              <div>
                <h3>Progress Support</h3>
                <p>
                  নিয়মিত practice ও revision-এর মাধ্যমে শেখার progress ধরে
                  রাখুন।
                </p>
              </div>
            </div>
          </div>

          <div className="system-bottom">
            <div>
              <strong>৩৬৫+</strong>
              <span>দিনের Learning Support</span>
            </div>

            <button>এখনই শুরু করুন →</button>
          </div>
        </div>
      </section>

      <section className="who-section" id="students">
        <div className="who-inner">
          <div className="who-heading">
            <span>✦ WHO IS IT FOR?</span>

            <h2>
              এই বইটি <strong>কার জন্য?</strong>
            </h2>

            <p>
              আপনার বর্তমান level যাই হোক, vocabulary শেখার জন্য একটি structured
              পথ এখানে পাবেন।
            </p>
          </div>

          <div className="who-cards">
            <article className="who-card card-student">
              <div className="who-card-number">01</div>

              <div className="who-icon">◈</div>

              <span className="who-tag">FOR STUDENTS</span>

              <h3>শিক্ষার্থীদের জন্য</h3>

              <p className="who-subtitle">
                SSC, HSC, University, BCS & Bank Job Candidate
              </p>

              <p className="who-description">
                প্রতিদিন অল্প অল্প করে vocabulary শিখে sentence-এর মধ্যে ব্যবহার
                ও revision করতে পারবেন।
              </p>

              <div className="who-bottom">
                <span>01</span>
                <span>BUILD YOUR FOUNDATION</span>
              </div>
            </article>

            <article className="who-card card-learner">
              <div className="who-card-number">02</div>

              <div className="who-icon">↗</div>

              <span className="who-tag">FOR LANGUAGE LEARNERS</span>

              <h3>ভাষা শেখার জন্য</h3>

              <p className="who-subtitle">IELTS & Spoken English Learner</p>

              <p className="who-description">
                everyday conversation, pronunciation, example ও practical
                usage-এর মাধ্যমে vocabulary আরও শক্ত করুন।
              </p>

              <div className="who-bottom">
                <span>02</span>
                <span>IMPROVE YOUR FLUENCY</span>
              </div>
            </article>

            <article className="who-card card-beginner">
              <div className="who-card-number">03</div>

              <div className="who-icon">✦</div>

              <span className="who-tag">FOR BEGINNERS</span>

              <h3>যারা শুরু করতে চান</h3>

              <p className="who-subtitle">Vocabulary Beginner & Self Learner</p>

              <p className="who-description">
                বই, App ও support system-এর সাহায্যে একদম শুরু থেকে নিজের pace-এ
                vocabulary শেখা শুরু করুন।
              </p>

              <div className="who-bottom">
                <span>03</span>
                <span>START YOUR JOURNEY</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="student-experience" id="experience">
        <div className="experience-inner">
          <div className="experience-heading">
            <span>✦ STUDENT PROOF</span>

            <h2>
              শিক্ষার্থীদের <strong>অভিজ্ঞতা</strong>
            </h2>
          </div>

          <div className="experience-block">
            <div className="experience-block-title">
              <span>— STUDENT STORIES —</span>
              <h3>ভিডিও অভিজ্ঞতা</h3>
            </div>

            <div className="student-videos">
              <article className="student-video-card">
                <div className="video-number">০১</div>

                <div className="video-line"></div>

                <button
                  className="student-play"
                  aria-label="Play student story"
                >
                  ▶
                </button>

                <div className="video-card-bottom">
                  <span>OXFORD 3000</span>
                  <strong>শিক্ষার্থীর মতামত</strong>
                  <small>ঢাকা</small>
                </div>
              </article>

              <article className="student-video-card">
                <div className="video-number">০২</div>

                <div className="video-line"></div>

                <button
                  className="student-play"
                  aria-label="Play student story"
                >
                  ▶
                </button>

                <div className="video-card-bottom">
                  <span>OXFORD 3000</span>
                  <strong>শিক্ষার্থীর মতামত</strong>
                  <small>চট্টগ্রাম</small>
                </div>
              </article>

              <article className="student-video-card">
                <div className="video-number">০৩</div>

                <div className="video-line"></div>

                <button
                  className="student-play"
                  aria-label="Play student story"
                >
                  ▶
                </button>

                <div className="video-card-bottom">
                  <span>OXFORD 3000</span>
                  <strong>শিক্ষার্থীর মতামত</strong>
                  <small>রাজশাহী</small>
                </div>
              </article>
            </div>
          </div>

          <div className="written-feedback">
            <div className="feedback-heading">
              <span>— WRITTEN FEEDBACK —</span>
              <h3>লিখিত মতামত</h3>
            </div>

            <div className="feedback-grid">
              <article className="feedback-card">
                <div className="quote-mark">“</div>

                <p>
                  আগে শুধু word meaning মুখস্থ করতাম, কিন্তু এখন example, audio
                  এবং নিয়মিত revision করে শব্দগুলো মনে থাকে।
                </p>

                <div className="feedback-user">
                  <span>STUDENT</span>
                  <strong>University Learner</strong>
                </div>
              </article>

              <article className="feedback-card">
                <div className="quote-mark">“</div>

                <p>
                  Oxford 3000-এর vocabulary শেখার পদ্ধতিটা সহজ হয়েছে। meaning-এর
                  সাথে ব্যবহারও বুঝতে পারছি।
                </p>

                <div className="feedback-user">
                  <span>STUDENT</span>
                  <strong>IELTS Learner</strong>
                </div>
              </article>

              <article className="feedback-card">
                <div className="quote-mark">“</div>

                <p>
                  বইয়ের সাথে app, audio এবং video থাকায় vocabulary practice করা
                  অনেক বেশি সহজ হয়েছে।
                </p>

                <div className="feedback-user">
                  <span>STUDENT</span>
                  <strong>Self Learner</strong>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="word-comparison" id="compare">
        <div className="comparison-inner">
          <div className="comparison-heading">
            <span>— THE DECISION —</span>

            <h2>
              সাধারণ Word List থেকে
              <strong> এটি কীভাবে আলাদা?</strong>
            </h2>

            <p>
              শুধু শব্দের তালিকা নয়—শেখা, practice এবং revision একসাথে রাখাই
              আমাদের মূল পার্থক্য।
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-head">
              <span>যেভাবে দেখবেন</span>
              <strong>Oxford 3000 System</strong>
              <span>সাধারণ বই</span>
            </div>

            <div className="comparison-row">
              <b>শব্দ শেখার পদ্ধতি</b>

              <span className="system-answer">● Oxford 3000 sequence</span>

              <span>শুধু word list</span>
            </div>

            <div className="comparison-row">
              <b>বোঝা ও ব্যবহার</b>

              <span className="system-answer">● বাংলা অর্থ + Example</span>

              <span>শুধু meaning-focused</span>
            </div>

            <div className="comparison-row">
              <b>Practice Support</b>

              <span className="system-answer">
                ● App + Audio + Video + Check Box
              </span>

              <span>সীমিত practice সুবিধা</span>
            </div>

            <div className="comparison-row">
              <b>Progress & Revision</b>

              <span className="system-answer">
                ● Practice & Progress Support
              </span>

              <span>নিজে tracking করতে হয়</span>
            </div>
          </div>
        </div>
      </section>

      <section className="android-app" id="app">
        <div className="android-app-inner">
          <div className="android-copy">
            <span className="android-kicker">— ANDROID COMPANION —</span>

            <h2>
              একটি App,
              <br />
              <strong>আপনার Vocabulary Partner</strong>
            </h2>

            <p>
              Offline practice থেকে daily revision— বইয়ের সাথে App আপনাকে
              প্রতিদিনের learning routine ধরে রাখতে সাহায্য করবে।
            </p>

            <div className="android-buttons">
              <button>App Download →</button>

              <span>Android • Offline Support</span>
            </div>
          </div>

          <div className="android-visual">
            <div className="android-glow"></div>

            <img src={heroImage} alt="Oxford 3000 Android App" />

            <div className="app-pills">
              <span>Word Practice</span>
              <span>Audio</span>
              <span>Video</span>
              <span>Progress</span>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-intro">
            <span>— QUESTIONS, ANSWERED —</span>

            <h2>
              সাধারণ প্রশ্ন
              <strong> ও উত্তর</strong>
            </h2>

            <p>
              Oxford 3000 Vocab নিয়ে সবচেয়ে বেশি জানতে চাওয়া প্রশ্নগুলোর উত্তর
              এখানে।
            </p>

            <a href="tel:01405458800">0140-545-8800</a>
          </div>

          <div className="faq-list">
            <details open>
              <summary>
                বইটির সাথে কী কী পাওয়া যাবে?
                <span>−</span>
              </summary>

              <p>
                Oxford 3000 Vocabulary Book-এর সাথে Dedicated Android App,
                Audio, Video Lesson, Practice এবং Progress Support থাকবে।
              </p>
            </details>

            <details>
              <summary>
                কোথা থেকে অর্ডার করতে পারি?
                <span>+</span>
              </summary>

              <p>
                আমাদের official ordering process-এর মাধ্যমে বইটি অর্ডার করতে
                পারবেন।
              </p>
            </details>

            <details>
              <summary>
                App কি Android-এর জন্য?
                <span>+</span>
              </summary>

              <p>
                হ্যাঁ, learning support-এর জন্য Android App ব্যবহার করা যাবে।
              </p>
            </details>

            <details>
              <summary>
                একদম beginner হলে কি শুরু করতে পারব?
                <span>+</span>
              </summary>

              <p>
                অবশ্যই। Beginner থেকে advanced learner— নিজের level অনুযায়ী
                vocabulary practice করতে পারবেন।
              </p>
            </details>

            <details>
              <summary>
                বইটির সাথে Audio থাকবে?
                <span>+</span>
              </summary>

              <p>
                হ্যাঁ, pronunciation ও listening practice-এর জন্য Audio support
                রাখা হয়েছে।
              </p>
            </details>

            <details>
              <summary>
                নিয়মিত revision কীভাবে করব?
                <span>+</span>
              </summary>

              <p>
                Book, App এবং Practice support ব্যবহার করে নিয়মিত revision করতে
                পারবেন।
              </p>
            </details>

            <details>
              <summary>
                Delivery কীভাবে হবে?
                <span>+</span>
              </summary>

              <p>
                অর্ডার confirm করার পর delivery process অনুযায়ী বই পাঠানো হবে।
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="confidence-section">
        <div className="confidence-box">
          <div className="confidence-icon">✓</div>

          <div className="confidence-content">
            <span>— YOUR CONFIDENCE, PROTECTED —</span>

            <h2>১০০% মানি-ব্যাক গ্যারান্টি</h2>

            <p>
              বইটি নিয়ে সন্তুষ্ট না হলে নির্দিষ্ট শর্ত অনুযায়ী আপনার পেমেন্ট
              ফেরতের সুযোগ থাকবে।
            </p>
          </div>

          <div className="confidence-contact">
            <small>সাহায্য লাগছে?</small>
            <strong>0140-545-8800-2</strong>
            <span>সকাল ১০টা – রাত ৮টা</span>
          </div>
        </div>
      </section>

      <section className="order-section" id="order">
        <div className="order-container">
          <div className="order-intro">
            <span>— START YOUR LEARNING JOURNEY —</span>

            <h2>
              আগে বই বুঝে নিন,
              <br />
              <strong>পরে হাতে পেয়ে টাকা দিন</strong>
            </h2>

            <p>
              সারা দেশে Cash on Delivery — অর্ডার করুন, বই হাতে পেয়ে যাচাই করুন।
            </p>

            <div className="order-benefits">
              <div className="order-benefit">
                <b>✓</b>
                <span>Oxford 3000 Vocab Book + Dedicated Android App</span>
              </div>

              <div className="order-benefit">
                <b>◉</b>
                <span>Audio, Video, Practice & Progress Support</span>
              </div>

              <div className="order-benefit full">
                <b>↻</b>
                <span>হাতে পেয়ে পণ্য যাচাই করে অর্ডার গ্রহণ করুন</span>
              </div>
            </div>
          </div>

          <div className="order-form-card">
            <div className="form-top">
              <span>▣</span>
              নিরাপদ অর্ডার • Cash on Delivery
            </div>

            <div className="product-summary">
              <div>
                <small>নির্বাচিত পণ্য</small>
                <strong>Oxford 3000 Vocab Book + App</strong>
              </div>

              <b>৳ ৮৪৯</b>
            </div>

            <p className="form-note">✓ বই + Digital Learning Support</p>

            <form>
              <div className="form-grid">
                <label>
                  আপনার নাম *
                  <input type="text" placeholder="আপনার নাম লিখুন" />
                </label>

                <label>
                  মোবাইল নম্বর *
                  <input type="tel" placeholder="01XXXXXXXXX" />
                </label>
              </div>

              <label>
                ঠিকানা *
                <input type="text" placeholder="সম্পূর্ণ ঠিকানা লিখুন" />
              </label>

              <label>
                অতিরিক্ত তথ্য
                <textarea
                  placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন"
                  rows="3"
                ></textarea>
              </label>

              <button type="submit" className="order-submit">
                অর্ডার কনফার্ম করুন →
              </button>
            </form>

            <small className="form-footer">
              আপনার তথ্য নিরাপদ রাখা হবে • Privacy Protected
            </small>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="Oxford 3000" />

              <div>
                <strong>Oxford 3000</strong>
                <span>VOCABULARY SYSTEM</span>
              </div>
            </div>

            <p>
              English Communication-এর জন্য একটি digital learning support
              system।
            </p>
          </div>

          <div className="footer-contact">
            <p>যোগাযোগ: 0140-545-8800-2</p>

            <a href="#faq">সাধারণ প্রশ্ন</a>

            <a href="#order">অর্ডার করতে চান? ↑</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 English Command. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </footer>
    </div>
  );
}

export default App;
