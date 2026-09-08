import { useEffect, useRef } from "react";
import logo from "./images/logo.png";

function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollProgress,
}) {
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleOutsidePointer = (event) => {
      if (!mobileMenuOpen) return;
      if (menuRef.current?.contains(event.target)) return;
      if (menuToggleRef.current?.contains(event.target)) return;
      setMobileMenuOpen(false);
    };

    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] h-[80px] min-h-[80px] w-full bg-[#050811] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex h-[80px] min-h-[80px] w-full max-w-[1152px] items-center justify-between px-4 sm:px-6 lg:px-0">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="Homepage">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Oxford 3000 logo"
              className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
            />

            <div>
              <div className="font-['Baloo_Da_2'] text-[15.36px] font-bold leading-[16.13px] tracking-[-0.03px] text-white">
                অক্সফোর্ড ৩০০০
              </div>

              <div className="whitespace-nowrap font-['Baloo_Da_2'] text-[11.36px] font-semibold leading-[11.93px] tracking-[1.18px] text-[#E8B84E]">
                ভোকাবুলারি সিস্টেম
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-white/84 xl:flex">
          {[
            ["how-it-works", "কীভাবে কাজ করে"],
            ["book", "বই দেখুন"],
            ["package", "সম্পূর্ণ প্যাকেজ"],
            ["student-stories", "শিক্ষার্থীদের অভিজ্ঞতা"],
            ["android-app", "App দেখুন"],
            ["faq", "প্রশ্নোত্তর"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-menu-link whitespace-nowrap rounded-md px-2 py-1 font-medium transition ${
                activeSection === id
                  ? "bg-white/12 text-white"
                  : "hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

<<<<<<< Updated upstream
        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 xl:hidden"
=======
        {/* Mobile Order Button */}
        <a
          href="#order"
          className="mr-2 flex h-[44px] w-[146px] shrink-0 items-center justify-center gap-[8px] whitespace-nowrap rounded-[12px] border border-[#FFE38E]/40 bg-[#F8C94B] px-[12px] py-[10px] text-[12px] font-bold text-[#10172a] shadow-[0_8px_20px_rgba(248,201,75,0.22),0_0_0_1px_rgba(255,227,142,0.16)] transition hover:brightness-105 max-[420px]:w-[120px] max-[420px]:gap-[4px] max-[420px]:px-[8px] xl:hidden"
>>>>>>> Stashed changes
        >
          <span className="sr-only">মেনু</span>

          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>

        {/* Mobile Navigation Toggle */}
        <button
          ref={menuToggleRef}
          type="button"
          aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          className="mr-2 flex h-[44px] w-[40px] shrink-0 items-center justify-center rounded-[12px] border border-white/25 bg-white/[0.06] text-white shadow-[0_8px_22px_rgba(232,184,78,0.34),0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-white/[0.12] xl:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>

        {/* Desktop Order Button */}
        <a
          href="#order"
          className="hidden h-[46.938px] min-h-[46.4px] w-[242.047px] items-center justify-center gap-[8.8px] rounded-[12px] border border-[rgba(0,0,0,0)] bg-[linear-gradient(135deg,#FFE38E_0%,#F8C94B_46%,#F2B81E_100%)] px-[18.4px] py-[12.48px] text-sm font-bold text-[#10172a] shadow-[0_11px_26px_0_rgba(248,201,75,0.22),0_1px_0_0_rgba(255,255,255,0.50)_inset] transition hover:-translate-y-0.5 hover:brightness-105 xl:flex"
        >
          অর্ডার করুন
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

        {/* Mobile Navigation */}
        <nav
          ref={menuRef}
          aria-hidden={!mobileMenuOpen}
          className={`fixed left-0 right-0 top-[80px] z-[110] flex max-h-[calc(100vh-80px)] flex-col gap-1 overflow-y-auto border-t border-white/10 bg-[#050811] p-4 text-sm text-white/85 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
            mobileMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none invisible -translate-y-4 scale-95 opacity-0"
          }`}
        >
          {[
            ["#how-it-works", "কীভাবে কাজ করে"],
            ["#book", "বই দেখুন"],
            ["#package", "সম্পূর্ণ প্যাকেজ"],
            ["#student-stories", "শিক্ষার্থীদের অভিজ্ঞতা"],
            ["#android-app", "App দেখুন"],
            ["#faq", "প্রশ্নোত্তর"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`nav-menu-link whitespace-nowrap rounded-lg px-3 py-3 font-medium transition ${
                activeSection === href.slice(1)
                  ? "bg-white/12 text-white"
                  : "hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}

          <a
            href="#order"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center rounded-xl bg-[#f8c94b] px-4 py-3 font-bold text-[#10172a]"
          >
            এখনই অর্ডার করুন
          </a>
        </nav>
      </div>

      {/* Scroll Progress */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-white/[0.08]"
        aria-hidden="true"
      >
        <span
          className="block h-full origin-left will-change-transform"
          style={{
            background:
              "linear-gradient(90deg, #f8c94b 0%, #f8c94b 68%, #62d9e4 68%, #62d9e4 100%)",
            transform: `scaleX(${Math.min(100, Math.max(0, scrollProgress)) / 100})`,
          }}
        />
      </div>
    </header>
  );
}

export default Header;
