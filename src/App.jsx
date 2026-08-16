import { useState } from "react";
import logo from "./images/logo.png";
import heroArtwork from "./images/image1.png";
import videoThumb from "./images/image2.png";
import bookImage from "./images/image3.png";
import bookDetail from "./images/image4.png";
import androidApp from "./images/image5.png";
import image6 from "./images/image6.png";
// bookDetail (image4.png) removed per request

const featureCards = [
  {
    badge: "ভিডিও সহায়তা",
    title: "৩,০০০ Dedicated Video Lesson",
    description: "প্রতিটি শব্দ বুঝতে dedicated visual lesson",
    icon: "video",
    accent: "bg-[#dff7fb] text-[#2c7f93]",
    bubble: "০১",
    bubbleTone: "bg-[#e2f1f4]",
  },
  {
    badge: "অডিও শুনুন",
    title: "সম্পূর্ণ বইয়ের Audio Podcast",
    description: "যেকোনো সময় শুনে শিখতে পারবেন অডিও দিয়ে",
    icon: "audio",
    accent: "bg-[#f9efd7] text-[#bb7a10]",
    bubble: "০২",
    bubbleTone: "bg-[#f3ead6]",
  },
  {
    badge: "অ্যান্ড্রয়েড সহায়তা",
    title: "Dedicated Android App",
    description: "Offline ব্যবহারযোগ্য—ইনস্ট্যান্ট practice control",
    icon: "app",
    accent: "bg-[#dee7ff] text-[#4561d7]",
    bubble: "০৩",
    bubbleTone: "bg-[#e2e8f7]",
  },
  {
    badge: "ভোকাল এক্সারসাইজ",
    title: "Vocal Exercise",
    description: "উচ্চারণ ঠিক করতে কাজে লাগে vocal exercise",
    icon: "mic",
    accent: "bg-[#eadcff] text-[#8b60d7]",
    bubble: "০৪",
    bubbleTone: "bg-[#ece2ff]",
  },
  {
    badge: "প্রতিটি চর্চা",
    title: "2-1 Tongue Twister",
    description: "কঠিন শব্দ মুখে বলার জন্য ছোট ছোট practice",
    icon: "note",
    accent: "bg-[#fee0db] text-[#d06a57]",
    bubble: "০৫",
    bubbleTone: "bg-[#f8e4e1]",
  },
  {
    badge: "প্রগ্রেস ট্র্যাকিং",
    title: "Practice + Revision Support",
    description: "যেখানে দরকার সেখানে practice আর revision",
    icon: "refresh",
    accent: "bg-[#dff0dd] text-[#5f9b57]",
    bubble: "০৬",
    bubbleTone: "bg-[#e7efdf]",
  },
];

const learningSteps = [
  {
    step: "ধাপ ০১",
    title: "দেখুন ও শুনুন",
    desc: "শব্দ, বাংলা অর্থ, উচ্চারণ ও Example দেখুন",
  },
  {
    step: "ধাপ ০২",
    title: "শুনুন ও বলুন",
    desc: "Audio শুনুন, নিজে উচ্চারণ চেষ্টা করুন; দরকার হলে Video দেখুন",
  },
  {
    step: "ধাপ ০৩",
    title: "ব্যবহার করে দেখুন",
    desc: "Example তৈরি, নিজের বাক্যে ব্যবহার করে দেখুন এবং App-এ Practice করুন",
  },
  {
    step: "ধাপ ০৪",
    title: "মনে করুন ও Revision দিন",
    desc: "বহুবার দেখা ও মনে রাখার চেষ্টা করুন; নির্দিষ্ট হলে ঠিক রাখুন",
  },
];

function CardIcon({ type, className = "" }) {
  const common = "h-5 w-5 stroke-current fill-none stroke-[1.8]";

  switch (type) {
    case "video":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <rect x="4" y="6" width="13" height="12" rx="3" />
          <path d="M17 10.5 20 8.5V15.5L17 13.5Z" strokeLinejoin="round" />
          <path d="M8 10.5h3" strokeLinecap="round" />
        </svg>
      );
    case "audio":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <path d="M6 12a6 6 0 0 1 12 0" strokeLinecap="round" />
          <path d="M5 13a2 2 0 0 1 2-2h1v6H7a2 2 0 0 1-2-2v-2Z" />
          <path d="M17 11h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z" />
        </svg>
      );
    case "app":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <rect x="7" y="4.5" width="10" height="15" rx="2.5" />
          <path d="M10 7.5h4" strokeLinecap="round" />
          <path d="M10.2 15.2h3.6" strokeLinecap="round" />
        </svg>
      );
    case "mic":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <rect x="9" y="4" width="6" height="9" rx="3" />
          <path d="M7 12a5 5 0 0 0 10 0" strokeLinecap="round" />
          <path d="M12 16v3" strokeLinecap="round" />
          <path d="M9 19h6" strokeLinecap="round" />
        </svg>
      );
    case "note":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <path d="M8 5.5h7l3 3V18a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18V7A1.5 1.5 0 0 1 8 5.5Z" />
          <path d="M15 5.5V9h3.5" strokeLinejoin="round" />
          <path d="M9 12.2h5" strokeLinecap="round" />
          <path d="M9 15h4" strokeLinecap="round" />
        </svg>
      );
    case "refresh":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${common} ${className}`}
          aria-hidden="true"
        >
          <path d="M4.5 12a7.5 7.5 0 0 1 12.7-5.3" strokeLinecap="round" />
          <path
            d="M15.5 4.8h2.3V7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M19.5 12a7.5 7.5 0 0 1-12.7 5.3" strokeLinecap="round" />
          <path
            d="M8.5 19.2H6.2V17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function App() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqItems = [
    {
      question: "এই প্যাকেজে ঠিক কী কী থাকছে?",
      answer:
        "Oxford 3000 Vocabulary Book-এর সাথে Dedicated Android App, Audio, Video Lesson, Practice এবং Progress Support আসবে।",
    },
    {
      question: "মোট মূল্য কত? ডেলিভারি চার্জ আছে?",
      answer:
        "সম্পূর্ণ প্যাকেজের মূল্য ৩,৫০০ টাকা। সারা বাংলাদেশে বিনামূল্যে ডেলিভারি পাবেন। কোনো অতিরিক্ত চার্জ নেই।",
    },
    {
      question: "App কি Android-এর জন্য?",
      answer:
        "Google Play Store থেকে Oxford 3000 অ্যাপ ডাউনলোড করুন এবং আপনার অ্যাকাউন্ট দিয়ে লগইন করুন।",
    },
    {
      question: "আমি একদম beginner হলে শুরু করতে পারব?",
      answer:
        "অবশ্যই। আমাদের কোর্স বিগিনার থেকে শুরু করে ডিজাইন করা হয়েছে। ধাপে ধাপে শিখুন এবং সহজেই Oxford 3000 শব্দ আয়ত্ত করুন।",
    },
    {
      question: "অর্ডার করতে কী করতে হবে?",
      answer:
        "ওয়েবসাইট থেকে সরাসরি অর্ডার করুন অথবা ০১৪০-৫৪৫-৮৮০০-২ নম্বরে কল করে অর্ডার নিশ্চিত করুন। আমরা আপনার বই দ্রুত পৌঁছে দেব।",
    },
    {
      question: "অর্ডারের আগে কথা বলতে চাইলে?",
      answer: "আমরা 30 দিনের মানি-ব্যাক গ্যারান্টি দিচ্ছি।",
    },
    {
      question: "আর্ডারের আগে আমায় খোঁজার প্রশ্ন?",
      answer: "যেকোনো প্রশ্নের জন্য 0140-545-8800-2 নম্বরে যোগাযোগ করুন।",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050812] text-white">
      <section className="relative overflow-hidden bg-[#060b18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(65,118,255,0.34),transparent_0_22%),radial-gradient(circle_at_82%_70%,rgba(249,199,75,0.12),transparent_0_18%),linear-gradient(180deg,#060b18_0%,#0b172f_100%)]" />
        <div className="relative mx-auto max-w-[1240px] px-3 pt-4 sm:px-5 lg:px-0 lg:pt-3">
          <header className="flex items-center justify-between border-b border-white/8 bg-[#050811] px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={logo}
                  alt="Oxford 3000 logo"
                  className="h-10 w-10 rounded-full object-contain sm:h-11 sm:w-11"
                />
                <div>
                  <div className="text-sm font-semibold leading-none sm:text-base">
                    Oxford 3000
                  </div>
                  <div className="text-[0.62rem] uppercase tracking-[0.32em] text-[#f7c84f] sm:text-xs">
                    Vocabulary System
                  </div>
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/84 xl:flex">
              <a href="#" className="hover:text-white">
                কীভাবে কাজ করে
              </a>
              <a href="#" className="hover:text-white">
                বই দেখুন
              </a>
              <a href="#" className="hover:text-white">
                সম্পূর্ণ প্যাকেজ
              </a>
              <a href="#" className="hover:text-white">
                শিক্ষার্থীদের অভিজ্ঞতা
              </a>
              <a href="#" className="hover:text-white">
                App দেখুন
              </a>
              <a href="#" className="hover:text-white">
                প্রশ্নোত্তর
              </a>
            </nav>

            <a
              href="#"
              className="flex h-[46.938px] min-h-[46.4px] w-[242.047px] items-center justify-center gap-[8.8px] rounded-[12px] border border-[rgba(0,0,0,0)] bg-[linear-gradient(135deg,#FFE38E_0%,#F8C94B_46%,#F2B81E_100%)] px-[18.4px] py-[12.48px] text-sm font-bold text-[#10172a] shadow-[0_11px_26px_0_rgba(248,201,75,0.22),0_1px_0_0_rgba(255,255,255,0.50)_inset] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              এখনই অর্ডার করুন
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </a>
          </header>

          <div className="grid items-center gap-6 px-3 pb-10 pt-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:pt-24">
            <div className="max-w-[560px] lg:pr-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f7c84f]/30 bg-[#0c1426] px-4 py-2 text-[0.72rem] font-medium text-[#f7c84f] shadow-soft">
                <span className="text-sm">◂</span>
                বাংলাদেশে আমরাই প্রথম
              </div>

              <h1 className="mt-8 whitespace-nowrap text-[clamp(2.15rem,5vw,4.12rem)] font-black tracking-[-0.05em] text-[#f8cb54] leading-[0.98]">
                Oxford 3000 Vocab
              </h1>
              <h2 className="mt-3 whitespace-nowrap text-[clamp(2rem,4.1vw,3.18rem)] font-black tracking-[-0.05em] text-white leading-[1.02]">
                Complete Learning System
              </h2>

              <p className="mt-8 max-w-[34rem] text-[0.98rem] leading-8 text-white/65 sm:text-[1.02rem]">
                বই, App, Audio, Video ও Practice - সব একসাথে।
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="flex h-[46.938px] min-h-[46.4px] w-[242.047px] items-center justify-center gap-[8.8px] rounded-[12px] border border-[rgba(0,0,0,0)] bg-[linear-gradient(135deg,#FFE38E_0%,#F8C94B_46%,#F2B81E_100%)] px-[18.4px] py-[12.48px] text-center text-sm font-extrabold text-[#10172a] shadow-[0_11px_26px_0_rgba(248,201,75,0.22),0_1px_0_0_rgba(255,255,255,0.50)_inset] transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  এখনই অর্ডার করুন
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-[46.938px] min-h-[46.4px] w-full max-w-[242.047px] shrink-0 items-center justify-center gap-[8.8px] rounded-[12px] border border-white/20 bg-white/[0.04] px-[18.4px] py-[12.48px] text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <span>বইয়ের ভেতর দেখুন</span>
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.5 7.5 10 12l4.5-4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-white/55">
                <span className="text-[#69d7a7]">✓</span>
                সারা দেশে ক্যাশ অন ডেলিভারি
              </div>
            </div>

            <div className="relative justify-self-end w-[min(100%,640px)] translate-x-3 lg:translate-x-6">
              <img
                src={heroArtwork}
                alt="Oxford 3000 vocabulary pack"
                className="block w-full select-none object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <div className="mx-3 grid gap-4 border-t border-white/10 pb-8 pt-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0 lg:px-8">
            {[
              ["৩,০০০", "মূল শব্দ"],
              ["৩,০০০", "Dedicated Video"],
              ["সম্পূর্ণ", "Audio"],
              ["Learning Principles", "অনুযায়ী সাজান"],
              ["Offline", "Android App"],
              ["৳৫০", "ডেলিভারি চার্জ মাত্র"],
            ].map(([title, subtitle]) => (
              <div
                key={title + subtitle}
                className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0 lg:px-4"
              >
                <div className="text-2xl font-black text-[#f7c84f]">
                  {title}
                </div>
                <div className="mt-1 text-sm text-white/60">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050812] px-4 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-black text-white">
            ১ মিনিটে দেখে নিন
          </h2>
          <p className="mt-2 text-sm text-white/60">
            পুরো পরিচিতি — ১ মিনিটে দ্রুত শিখুন
          </p>

          <div className="mt-8">
            <div className="relative mx-auto max-w-[900px] rounded-xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
              <img
                src={videoThumb}
                alt="Watch 1 minute"
                className="w-full h-auto object-cover"
              />
              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#ffd86d] flex items-center justify-center shadow-[0_10px_30px_rgba(247,200,79,0.38)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#10172a]"
                  aria-hidden="true"
                >
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f6efdf] px-4 py-16 text-[#102034] sm:px-6 lg:px-8 lg:py-20">
        {/* decorative overlay removed */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full border border-[#d9d3c8] opacity-60" />
        <div className="absolute left-0 bottom-0 h-28 w-28 rounded-full border border-[#d9d3c8] opacity-60" />

        <div className="mx-auto max-w-[1120px] text-center">
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46]">
            Included with the book
          </div>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.35rem)] font-black tracking-[-0.05em] text-[#22314a]">
            বইটির সাথে ফ্রি যা পাচ্ছেন
          </h2>
          <p className="mt-4 text-[0.95rem] text-[#6b7487] sm:text-[1.02rem]">
            বই কিনলেই পাওয়া যাবে — আলাদা কোনো চার্জ নেই
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group relative min-h-[196px] overflow-hidden rounded-[1.35rem] border border-[#e1d9ca] bg-[#fbf8f0] px-5 py-5 text-left shadow-[0_10px_28px_rgba(24,32,48,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(24,32,48,0.08)]"
              >
                <div
                  className={`absolute right-0 top-0 h-16 w-16 rounded-bl-[2rem] ${card.bubbleTone}`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#6e7b92]">
                      {card.badge}
                    </div>
                    <h3 className="mt-4 max-w-[16rem] text-[1.04rem] font-black leading-[1.35] text-[#1e2d44] sm:text-[1.15rem]">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-[17rem] text-[0.88rem] leading-7 text-[#747e90]">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${card.accent}`}
                  >
                    <CardIcon type={card.icon} />
                  </div>
                </div>

                <div className="relative mt-10 h-px bg-[#e7dfd2]" />
                <div className="relative mt-2 text-[0.95rem] font-black text-[#22314a] opacity-0 transition group-hover:opacity-100">
                  View details
                </div>
                <div className="absolute right-3 top-3 text-[0.64rem] font-bold tracking-[0.2em] text-[#b8b0a4]">
                  {card.bubble}
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-[790px] rounded-[1rem] bg-[#102948] px-5 py-4 text-left text-[0.82rem] leading-7 text-white shadow-[0_16px_36px_rgba(9,15,28,0.18)] sm:px-6 sm:text-[0.92rem]">
            <span className="inline-flex items-center gap-3">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-[#f4c24b]/55 text-[0.7rem] text-[#f4c24b]">
                i
              </span>
              Offline App, Vocal Exercise ও Tongue Twister বইয়ের Study Guide-এ
              সরাসরি আছে।
            </span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f0e8df] px-4 py-20 sm:py-24 lg:py-28 text-[#102034]">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46]">
            INSIDE THE BOOK
          </div>
          <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] font-black tracking-[-0.02em] text-[#122034]">
            বইটি একবার পড়ে দেখুন
          </h2>
          <p className="mt-3 max-w-[780px] mx-auto text-sm text-[#516070]">
            প্রতিটি পেজে রয়েছে শেখার প্রক্রিয়ার সব উপাদান।
          </p>

          <div className="mt-8">
            <div className="mx-auto max-w-[920px] relative overflow-hidden">
              <img
                src={bookImage}
                alt="Open book preview"
                className="mx-auto w-[min(860px,88%)] h-auto rounded-[8px] drop-shadow-[0_18px_40px_rgba(16,20,24,0.12)] mb-8 object-contain"
              />

              <div className="flex justify-center items-center gap-4 mt-2">
                <button className="rounded-full bg-white/90 px-4 py-2 text-sm shadow-sm">
                  ◄ আগের পৃষ্ঠা
                </button>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-8 rounded-full bg-[#d6c6ad]" />
                  <span className="h-2 w-2 rounded-full bg-[#d6c6ad]/50" />
                  <span className="h-2 w-2 rounded-full bg-[#d6c6ad]/50" />
                </div>
                <button className="rounded-full bg-white/90 px-4 py-2 text-sm shadow-sm">
                  পরের পৃষ্ঠা ►
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f7f4ef] px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 text-[#122034]">
            <div className="lg:w-1/2 text-left">
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46]">
                THE BOOK, UNPACKED
              </div>
              <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.4rem)] font-black tracking-[-0.02em] text-[#122034]">
                বইটিতে যা যা রয়েছে
              </h2>
            </div>

            <div className="lg:w-1/2 text-left lg:text-right">
              <p className="mt-3 max-w-[560px] mx-auto text-sm text-[#516070]">
                একটি Word Page-এ শুধু অর্থ নয়-উচ্চারণ, ব্যবহার ও Revision-এর
                প্রয়োজনীয় Cue-গুলোও একই Learning Sequence-এ সাজানো হয়েছে।
              </p>
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-[920px] relative overflow-hidden">
            <img
              src={bookDetail}
              alt="Book detail overlay"
              className="mx-auto w-[min(860px,88%)] h-auto rounded-[8px] drop-shadow-[0_12px_30px_rgba(16,20,24,0.08)] object-contain"
            />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#050812] px-4 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[640px] lg:pr-8 text-left">
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#f7c84f]">
                BOOK + DIGITAL SUPPORT
              </div>
              <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] font-black tracking-[-0.02em] text-white">
                শুধু বই নয়—পুরো একটি Learning System
              </h2>
              <p className="mt-4 max-w-[520px] text-sm text-white/60">
                একটি Vocabulary বই, App, ভিডিও, অডিও, এবং Practice টুল — সব
                একসাথে আপনার learning support করার জন্য সাজানো।
              </p>
            </div>

            <div className="relative justify-self-end w-[min(100%,640px)] translate-x-3 lg:translate-x-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={heroArtwork}
                  alt="phones mockup"
                  className="relative w-[min(520px,88%)] md:w-[min(640px,88%)] select-none object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] z-20"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group relative min-h-[160px] overflow-hidden rounded-[12px] border border-white/6 bg-[#07101a] px-5 py-6 text-left shadow-[0_18px_36px_rgba(2,8,20,0.6)]"
              >
                <div
                  className={`absolute right-0 top-0 h-12 w-12 rounded-bl-[1rem] ${card.bubbleTone}`}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#9aa6b6]">
                      {card.badge}
                    </div>
                    <h3 className="mt-4 max-w-[16rem] text-[1.02rem] font-black leading-[1.25] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-[17rem] text-[0.88rem] leading-7 text-white/60">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`grid h-11 w-11 place-items-center rounded-2xl ${card.accent}`}
                  >
                    <CardIcon type={card.icon} />
                  </div>
                </div>

                <div className="absolute right-3 top-3 text-[0.64rem] font-bold tracking-[0.2em] text-[#b8b0a4]">
                  {card.bubble}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="rounded-[12px] bg-[#0b2230] px-6 py-4 text-[1.1rem] font-extrabold text-[#f7c84f]">
              ৳৪৯৯ টাকা (সারা দেশে কন্টেন্ট অন ডেলিভারি)
            </div>

            <a
              href="#"
              className="rounded-2xl bg-[#f7c84f] px-6 py-3 text-sm font-bold text-[#10172a] shadow-[0_14px_35px_rgba(247,200,79,0.38)] transition hover:-translate-y-0.5"
            >
              এখনই অর্ডার করুন →
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f7f4ef] px-4 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="flex flex-col items-center">
            <div className="h-0.5 w-14 bg-[#af8f46] rounded" />
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46] mt-3">
              WHO IT IS FOR
            </div>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.8rem)] font-black text-[#122034]">
              এই বইটি কার্ডের জন্য
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="relative rounded-[1rem] border border-[#e9e2d8] bg-white px-6 py-8 text-left shadow-[0_18px_36px_rgba(24,32,48,0.04)] overflow-visible">
              <div className="text-sm text-[#b59f78]">০১</div>
              <h3 className="mt-3 text-lg font-black text-[#122034]">
                পরীক্ষার প্রস্তুতি
              </h3>
              <div className="mt-2 text-sm text-[#516070]">
                SSC, HSC, University, BCS &amp; Bank Job Candidate
              </div>
              <p className="mt-4 text-sm text-[#9aa6b6]">
                প্রয়োজনীয় vocabulary একটি নির্দিষ্ট sequence-এ revise করুন।
              </p>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#f4d78a] opacity-95 pointer-events-none" />
            </article>

            <article className="relative rounded-[1rem] border border-[#e9e2d8] bg-white px-6 py-8 text-left shadow-[0_18px_36px_rgba(24,32,48,0.04)] overflow-visible">
              <div className="text-sm text-[#b59f78]">০২</div>
              <h3 className="mt-3 text-lg font-black text-[#122034]">
                যোগাযোগ দক্ষতা
              </h3>
              <div className="mt-2 text-sm text-[#516070]">
                IELTS &amp; Spoken English Learner
              </div>
              <p className="mt-4 text-sm text-[#9aa6b6]">
                অর্থ জানতে pronunciation, example ও ব্যবহার শিখুন।
              </p>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#fac8b1] opacity-95 pointer-events-none" />
            </article>

            <article className="relative rounded-[1rem] border border-[#e9e2d8] bg-white px-6 py-8 text-left shadow-[0_18px_36px_rgba(24,32,48,0.04)] overflow-visible">
              <div className="text-sm text-[#b59f78]">০৩</div>
              <h3 className="mt-3 text-lg font-black text-[#122034]">
                নিজে শেখার যাত্রা
              </h3>
              <div className="mt-2 text-sm text-[#516070]">
                Vocabulary Beginner &amp; Self Learner
              </div>
              <p className="mt-4 text-sm text-[#9aa6b6]">
                বই, App ও support প্ল্যাটফর্মে প্রতিদিনের প্রচেষ্টা সহজ করে।
              </p>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#f6e9a8] opacity-95 pointer-events-none" />
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#060812] to-[#071022] px-4 py-28 sm:py-32 lg:py-36 text-white">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="h-0.5 w-14 bg-[#f7c84f] rounded mx-auto" />
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#f7c84f] mt-3">
            STUDENT PROOF
          </div>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-black">
            শিক্ষার্থীদের অভিজ্ঞতা
          </h2>

          <div className="mt-6">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#f7c84f]">
              STUDENT STORIES
            </div>
            <h3 className="mt-2 text-[1.2rem] font-black">ভিডিও অভিজ্ঞতা</h3>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
              {["০১", "০২", "০৩"].map((num) => (
                <div
                  key={num}
                  className="relative w-72 h-[520px] rounded-[18px] overflow-hidden bg-gradient-to-b from-[#07243a] to-[#041826] shadow-[0_48px_90px_rgba(2,8,20,0.75)]"
                >
                  <div className="absolute inset-0">
                    <div className="absolute left-8 top-12 h-[220px] w-[220px] rounded-full border border-[#17384c] opacity-18" />
                    <div className="absolute left-16 top-20 h-[220px] w-[220px] rounded-full border border-[#284e66] opacity-12 transform rotate-8" />
                    <div className="absolute -left-10 -top-6 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-transparent via-[#062433]/25 to-transparent opacity-40 rotate-12" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -inset-3 rounded-full border-[3px] border-[#17384c] opacity-28" />
                      <div className="h-44 w-44 rounded-full flex items-center justify-center text-6xl font-extrabold text-[#f7c84f]">
                        {num}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-6 top-6 h-2 w-8 bg-white/6 rounded" />
                  <div className="absolute right-12 top-12 h-2 w-2 bg-[#f7c84f] rounded-full" />

                  <div className="absolute left-4 bottom-4 right-4 bg-black/25 backdrop-blur-sm rounded-md px-3 py-3 text-left">
                    <div className="text-xs text-white/60">OXFORD 3000</div>
                    <div className="mt-1 text-sm font-bold">
                      শিক্ষার্থীর নাম
                    </div>
                    <div className="text-xs text-white/60">(স্টুডেন্ট)</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="h-0.5 w-14 bg-[#f7c84f] rounded mx-auto" />
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#f7c84f] mt-3">
              WRITTEN FEEDBACK
            </div>
            <h3 className="mt-3 text-lg font-black">লিখিত মতামত</h3>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {[
              "আবার শব্দ word meaning পড়লে, নিজের মনে রাখতে পারি; example, audio এবং app দিয়ে revise করতে পারছি।",
              "Oxford 3000 এর জন্য আমার vocabulary অনেক সহজে মনে হচ্ছে — meaning খুব তাড়াতাড়ি মনে থাকে।",
              "বইয়ের সাথে app, audio এবং video পেলে vocabulary শেখা অনেক বেশি সহজ হয়েছে।",
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/6 bg-[#07101a] px-6 py-6 text-left shadow-[0_12px_24px_rgba(2,8,20,0.5)] flex items-start gap-4"
              >
                <div className="text-[#f7c84f] text-3xl leading-none">“</div>
                <p className="mt-1 text-sm text-white/80">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#f8f2e6] px-4 py-20 sm:py-24 lg:py-28 text-[#102034]">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="h-0.5 w-14 bg-[#af8f46] rounded mx-auto" />
          <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46] mt-3">
            THE DECISION
          </div>
          <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.4rem)] font-black">
            সাধারণ Word List থেকে এটা কীভাবে আলাদা?
          </h2>
          <p className="mt-4 max-w-[820px] mx-auto text-sm text-[#516070]">
            ঠিকঠাক Learning System কিভাবে আপনার শেখার জারিকে পথে নিতে পারে, জেনে
            নিন।
          </p>

          <div className="mt-8 mx-auto max-w-[980px] rounded-[12px] overflow-hidden border border-[#ece4d6] bg-white shadow-[0_20px_40px_rgba(16,20,24,0.06)]">
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="px-6 py-4 text-left bg-[#0b2030] text-white rounded-tl-lg">
                শেখার ফ্রেমওয়ার্ক
              </div>
              <div className="px-6 py-4 text-left bg-[#f7c84f] text-[#10172a]">
                Oxford 3000 System
              </div>
              <div className="px-6 py-4 text-left bg-[#0b2030] text-white rounded-tr-lg">
                সাধারণ বই
              </div>
            </div>

            <div className="grid grid-cols-3 divide-y divide-[#efe6d8]">
              <div className="px-6 py-4 text-left">শব্দ শেখার কৌশল</div>
              <div className="px-6 py-4 text-left bg-[#fff4d1] flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#10172a"
                    opacity="0.12"
                  />
                  <path
                    d="M7 12l3 3 7-7"
                    stroke="#10172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Oxford 3000 sequence</span>
              </div>
              <div className="px-6 py-4 text-left">বিভিন্ন word list</div>

              <div className="px-6 py-4 text-left">বোঝা ও উদাহরণ</div>
              <div className="px-6 py-4 text-left bg-[#fff4d1] flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#10172a"
                    opacity="0.12"
                  />
                  <path
                    d="M7 12l3 3 7-7"
                    stroke="#10172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>বাংলা অর্থ + উচ্চারণ + Example</span>
              </div>
              <div className="px-6 py-4 text-left">
                সাধারণত meaning-সেন্ট্রিক
              </div>

              <div className="px-6 py-4 text-left">Practice support</div>
              <div className="px-6 py-4 text-left bg-[#fff4d1] flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#10172a"
                    opacity="0.12"
                  />
                  <path
                    d="M7 12l3 3 7-7"
                    stroke="#10172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>App + Audio + Video + Check Box</span>
              </div>
              <div className="px-6 py-4 text-left">বইয়ের ভেতরে সীমিত</div>

              <div className="px-6 py-4 text-left">রিভিশন ট্র্যাকিং cue</div>
              <div className="px-6 py-4 text-left bg-[#fff4d1] flex items-center gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#10172a"
                    opacity="0.12"
                  />
                  <path
                    d="M7 12l3 3 7-7"
                    stroke="#10172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Practice &amp; Progress support</span>
              </div>
              <div className="px-6 py-4 text-left">নিজে tracking করতে হয়</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7e9c9] px-4 py-16 sm:py-20 lg:py-24 text-[#102034]">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="text-left">
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46] mb-3">
                — ANDROID COMPANION
              </div>

              <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-black text-[#102034] leading-tight">
                ফ্রি Android App
              </h2>

              <h3 className="text-[1.2rem] font-black text-[#102034] mt-2">
                ডাউনলোড করুন
              </h3>

              <p className="mt-4 text-sm text-[#516070] leading-6">
                Offline—যোগাযোগ সময় Practice করুন।
              </p>

              <div className="mt-2 pl-4 border-l-2 border-[#af8f46] text-xs text-[#516070]">
                ক্রয়ের সাথে ডেডিকেটেড Android App-এর অ্যাক্সেস পাবেন।
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block rounded-2xl bg-[#f7c84f] px-6 py-3 text-sm font-bold text-[#10172a] shadow-[0_14px_35px_rgba(247,200,79,0.38)] transition hover:-translate-y-0.5 hover:bg-[#ffd86d]"
                >
                  ডাউনলোড করুন →
                </a>
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <img
                src={androidApp}
                alt="Android mockup"
                className="block max-w-xs lg:max-w-sm w-full select-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              />

              <div className="mt-6 flex gap-3 flex-wrap justify-center">
                <span className="px-5 py-2 rounded-full bg-white text-sm font-medium text-[#102034] shadow-sm">
                  Word Practice
                </span>
                <span className="px-5 py-2 rounded-full bg-white text-sm font-medium text-[#102034] shadow-sm">
                  Audio
                </span>
                <span className="px-5 py-2 rounded-full bg-white text-sm font-medium text-[#102034] shadow-sm">
                  Video
                </span>
                <span className="px-5 py-2 rounded-full bg-white text-sm font-medium text-[#102034] shadow-sm">
                  Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-28 lg:py-32 text-[#102034]">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.42em] text-[#af8f46] mb-3 pl-6 ml-4">
                — QUESTIONS, ANSWERED
              </div>
              <h2 className="text-[1.6rem] font-black text-[#102034] leading-tight pl-6 ml-4">
                সাধারণ প্রশ্ন ও উত্তর
              </h2>
              <p className="mt-4 text-sm text-[#516070] leading-6 pl-6 ml-4">
                আরও কিছু জানতে চান? সরাসরি কল করুন
              </p>

              <div className="mt-10 pt-8 border-t-2 border-[#efe6d8] pl-6 ml-4">
                <a
                  href="tel:01405458800"
                  className="text-[1.2rem] font-black text-[#af8f46] hover:text-[#f7c84f] transition-colors border-b-2 border-[#af8f46] pb-1 inline-block"
                >
                  0140-545-8800-2
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#efe6d8] pb-4 hover:bg-[#fffaf0]/50 px-4 py-2 rounded-lg transition cursor-pointer"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                >
                  <div className="flex items-start justify-between gap-4 group">
                    <h3 className="font-bold text-sm text-[#102034] group-hover:text-[#af8f46] transition flex-1">
                      {item.question}
                    </h3>
                    <div className="text-2xl text-[#516070] group-hover:text-[#af8f46] flex-shrink-0 font-light">
                      {expandedIndex === index ? "−" : "+"}
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <p className="mt-4 text-sm text-[#516070] leading-7 pl-0">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7e9c9] px-2 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b2030] to-[#142d4d] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -ml-6 -mb-6"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-6 flex-1">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full border-2 border-[#f7c84f] bg-white/5">
                    <svg
                      className="h-10 w-10 text-[#f7c84f]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#f7c84f] mb-2">
                    — YOUR CONFIDENCE, PROTECTED
                  </div>
                  <h3 className="text-[2rem] sm:text-[2.2rem] font-black text-white leading-tight">
                    100% মানি-ব্যাক গ্যারান্টি
                  </h3>
                  <p className="text-sm text-white/85 mt-3 leading-6 max-w-md">
                    ক্রয়ের ৩০ দিনের মধ্যে কোন কারণে সন্তুষ্ট না হলে সম্পূর্ণ
                    অর্থ ফেরত পাবেন। কোন প্রশ্ন জিজ্ঞাসা করা হবে না।
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="tel:01405458800"
                  className="inline-flex flex-col items-center gap-3 rounded-3xl bg-[#f7c84f] hover:bg-[#ffd86d] px-8 py-6 text-center shadow-[0_16px_40px_rgba(247,200,79,0.35)] transition hover:-translate-y-1"
                >
                  <div className="text-sm font-bold text-[#10172a] uppercase tracking-wide">
                    যোগাযোগ করুন
                  </div>
                  <div className="text-[1.3rem] font-black text-[#10172a]">
                    0140-545-8800-2
                  </div>
                  <div className="text-xs font-semibold text-[#10172a] opacity-90">
                    সোম-শুক্র, ৯-৫
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#061120] via-[#07131f] to-[#050812] px-4 py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-[1240px] px-3 pt-4 sm:px-5 lg:px-0 lg:pt-3">
          <div className="grid items-center gap-6 px-3 pb-10 pt-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:pt-10">
            <div className="max-w-[560px] lg:pr-6 text-left">
              <div className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-[#f7c84f]">
                START YOUR MASTERY LOOP
              </div>

              <h1 className="mt-6 whitespace-nowrap text-[clamp(2.15rem,5vw,3.2rem)] font-black tracking-[-0.05em] text-[#f7c84f] leading-[0.98]">
                আগে বই বুঝে নিন,
                <br />
                পণ্য হাতে পেয়ে টাকা দিন
              </h1>

              <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-8 text-white/65 sm:text-[1.02rem]">
                সারা দেশে ক্যাশ অন ডেলিভারি — ডেলিভারি চার্জ মাত্র ৮৫০
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[420px]">
                <div className="rounded-[12px] border border-white/6 bg-[#07101a] px-4 py-4 text-left shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
                  <div className="text-sm font-bold text-white">
                    Oxford 3000 Vocab বই + Dedicated Android App
                  </div>
                </div>
                <div className="rounded-[12px] border border-white/6 bg-[#07101a] px-4 py-4 text-left shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
                  <div className="text-sm font-bold text-white">
                    Audio, Video, Practice 3 Progress Support
                  </div>
                </div>
              </div>

              <div className="mt-6 max-w-[420px]">
                <div className="rounded-[12px] border border-white/6 bg-[#07101a] px-4 py-4 text-sm text-white/80">
                  হাতে পেয়ে দেখে তারপর পেমেন্ট করুন
                </div>
              </div>
            </div>

            <div className="relative justify-self-end w-[min(100%,420px)] translate-x-1 lg:translate-x-4">
              <img
                src={image6}
                alt="order form"
                className="block w-full max-w-[420px] h-auto select-none object-contain rounded-[10px] shadow-[0_12px_30px_rgba(2,8,20,0.18)] bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#06111f] border-t border-white/8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src={logo}
              alt="Oxford 3000 logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <div>
              <div className="text-sm font-semibold leading-none text-white">
                Oxford 3000
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.32em] text-[#f7c84f]">
                VOCABULARY SYSTEM
              </div>
              <p className="mt-2 text-[0.8rem] text-white/60">
                English Commando-এর বই ও digital learning support একসাথে।
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 text-right sm:items-end">
            <div className="text-sm font-semibold text-white">
              কল করুন: 0140-545-8800-2
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center">
              <a href="#" className="hover:text-white">
                গোপনীয়তা নীতি
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="#top" className="hover:text-white">
                উপরে ফিরুন ↑
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[1240px] border-t border-white/10 pt-6 text-sm text-white/50 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-left">
            © 2026 English Commando. সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:gap-4">
            <a href="#" className="hover:text-white">
              গোপনীয়তা নীতি
            </a>
            <a href="#top" className="hover:text-white">
              উপরে ফিরুন ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
