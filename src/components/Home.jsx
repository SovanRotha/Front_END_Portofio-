import React, { useEffect, useRef } from "react";
import girl from '../assets/girl.jpg';

 function Home() {
  const ringRef = useRef(null);

  // Slow spinning ring via JS for smooth cross-browser support
  useEffect(() => {
    let angle = 0;
    let raf;
    const spin = () => {
      angle += 0.15;
      if (ringRef.current) ringRef.current.style.transform = `rotate(${angle}deg)`;
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .home-serif { font-family: 'Playfair Display', serif !important; }

        /* ── Entry animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
        @keyframes blobMorph {
          0%,100% { border-radius: 62% 38% 70% 30% / 50% 58% 42% 50%; }
          33%      { border-radius: 42% 58% 32% 68% / 62% 38% 62% 38%; }
          66%      { border-radius: 72% 28% 52% 48% / 32% 68% 52% 48%; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.7) translateY(12px); }
          70%  { transform: scale(1.08) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .anim-fade-up-1 { animation: fadeUp .75s ease both; }
        .anim-fade-up-2 { animation: fadeUp .75s ease both .15s; }
        .anim-fade-up-3 { animation: fadeUp .75s ease both .30s; }
        .anim-fade-up-4 { animation: fadeUp .75s ease both .45s; }
        .anim-fade-up-5 { animation: fadeUp .75s ease both .60s; }
        .anim-fade-in   { animation: fadeIn .9s ease both .4s; }

        .avatar-float   { animation: float 5.5s ease-in-out infinite; }
        .blob-morph     { animation: blobMorph 9s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #d97706 0%, #fbbf24 40%, #d97706 60%, #92400e 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .badge-pop { animation: badgePop .6s cubic-bezier(.34,1.56,.64,1) both 1s; }
        .dot-pulse  { animation: pulse 1.8s ease-in-out infinite; }

        /* Hover lift */
        .btn-lift { transition: transform .25s ease, box-shadow .25s ease; }
        .btn-lift:hover { transform: translateY(-3px); }

        /* Scroll hint bounce */
        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .bounce-y { animation: bounceY 1.6s ease-in-out infinite; }

        /* Stat count-up fade */
        .stat-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(217,119,6,.15);
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-amber-50 dark:bg-stone-950 transition-colors duration-500 px-6 pt-24 pb-16"
      >
        {/* ── Background blobs ── */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-amber-200/40 dark:bg-amber-900/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full bg-amber-300/30 dark:bg-amber-800/15 blur-[70px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-100/20 dark:bg-amber-900/10 blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className="order-2 md:order-1 flex flex-col gap-0">

            {/* Label pill */}
            <div className="anim-fade-up-1 mb-5 self-start">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dot-pulse" />
                Full-Stack Developer & Designer
              </span>
            </div>

            {/* Heading */}
            <div className="anim-fade-up-2 mb-6">
              <h1 className="home-serif text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.08] text-stone-900 dark:text-stone-50">
                Crafting<br />
                <em className="shimmer-text not-italic">digital</em>
                <br />
                <span className="text-stone-800 dark:text-stone-100">experiences</span>
              </h1>
            </div>

            {/* Description */}
            <p className="anim-fade-up-3 text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-[420px] mb-10">
              I build thoughtful products at the intersection of engineering and design —{" "}
              <span className="text-stone-700 dark:text-stone-300 font-medium">pixel-perfect interfaces</span> to{" "}
              <span className="text-stone-700 dark:text-stone-300 font-medium">scalable back-end systems</span>.
            </p>

            {/* Buttons */}
            <div className="anim-fade-up-4 flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollTo("projects")}
                className="btn-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-lg shadow-amber-400/25"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-amber-500 text-amber-700 dark:text-amber-400 dark:border-amber-500 font-semibold text-sm hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                Let's Talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>

            {/* Stats row */}
            <div className="anim-fade-up-5 flex items-center gap-4">
              {[["1+", "Years Exp."], ["40+", "Projects"], ["18", "Clients"]].map(([n, l]) => (
                <div key={l} className="stat-card flex flex-col items-center px-5 py-3 rounded-2xl bg-white/60 dark:bg-stone-800/60 backdrop-blur border border-white/70 dark:border-stone-700/60">
                  <span className="home-serif text-2xl font-black text-amber-600">{n}</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 whitespace-nowrap">{l}</span>
                </div>
              ))}
              <div className="hidden sm:flex items-center gap-2 ml-2 text-xs text-stone-400 dark:text-stone-500">
                <span className="block w-8 h-px bg-amber-400" />
                Scroll to explore
                <svg className="w-3.5 h-3.5 bounce-y text-amber-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div className="order-1 md:order-2 anim-fade-in flex justify-center">
            <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] avatar-float">

              {/* Morphing blob background */}
              <div className="blob-morph absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-500 dark:from-amber-700 dark:to-amber-900 opacity-50" />

              {/* Photo circle */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-2xl">
                <img
                  src={girl}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Spinning dashed ring */}
              <div
                ref={ringRef}
                className="absolute -inset-6 rounded-full border border-dashed border-amber-400/40 dark:border-amber-600/30"
              />

              {/* Dotted orbit ring */}
              <div className="absolute -inset-10 rounded-full border border-dotted border-amber-300/20 dark:border-amber-700/20" />

              {/* Floating badge — Available */}
              <div className="badge-pop absolute -bottom-4 -right-2 flex items-center gap-2 bg-white/90 dark:bg-stone-800/90 backdrop-blur border border-white dark:border-stone-700 rounded-2xl px-4 py-2 shadow-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 dot-pulse" />
                <span className="text-xs font-semibold text-stone-700 dark:text-stone-200">Available for hire</span>
              </div>

              {/* Floating badge — React */}
              <div
                className="absolute -top-3 -left-4 flex items-center gap-1.5 bg-white/90 dark:bg-stone-800/90 backdrop-blur border border-white dark:border-stone-700 rounded-xl px-3 py-1.5 shadow-lg"
                style={{ animation: "badgePop .6s cubic-bezier(.34,1.56,.64,1) both 1.2s" }}
              >
                <span className="text-sm">⚛️</span>
                <span className="text-xs font-semibold text-stone-700 dark:text-stone-200">React</span>
              </div>

              {/* Floating badge — Open to remote */}
              <div
                className="absolute top-6 -right-6 flex items-center gap-1.5 bg-amber-500 rounded-xl px-3 py-1.5 shadow-lg"
                style={{ animation: "badgePop .6s cubic-bezier(.34,1.56,.64,1) both 1.4s" }}
              >
                <span className="text-sm">🌏</span>
                <span className="text-xs font-semibold text-white">Remote ok</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
export default Home;