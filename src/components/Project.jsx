import { useRef } from "react";

import project_2 from "../assets/CamFlex.jpg";
import project_3 from "../assets/E-learning.jpg";
import project_4 from "../assets/LearningCode.png";
import project_5 from "../assets/Movie.jpg";
import Clinic from "../assets/Clinic.png";

const projects = [
  // {
  //   name: "VERSES",
  //   description: "A web app to explore, buy and sell products.",
  //   url: "https://sovanrotha.github.io/VERSES-Project-/",
  //   image: project_1,
  //   tag: "E-Commerce",
  // },
  {
    name: "CamFlex",
    description: "A movie exploration and streaming platform.",
    url: "https://preuniversity-gen05.github.io/imovie-platform/",
    image: project_2,
    tag: "Entertainment",
  },
  {
    name: "E-learning",
    description: "Discover and enroll in online courses easily.",
    url: "https://sovanrotha.github.io/my-app-e-learning-/",
    image: project_3,
    tag: "Education",
  },
  {
    name: "Learning Code",
    description: "Learn programming remotely with interactive tools.",
    url: "https://sovanrotha.github.io/Code-learning/",
    image: project_4,
    tag: "EdTech",
  },
  {
    name: "Movie",
    description: "Browse and explore a curated collection of films.",
    url: "https://sovanrotha.github.io/React-Project-2/",
    image: project_5,
    tag: "Entertainment",
  },
  {
    name: "Clinic Management System",
    description: "A web app to manage clinic operations efficiently.",
    url: "https://clinic-system-react-front-7mzc5kn92-sovanrothas-projects.vercel.app/",
    image: Clinic,
    tag: "Healthcare",
  }
];

// Must use full Tailwind strings — no dynamic interpolation
const colSpan = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

const delays = [0, 100, 200, 300, 400];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{
        "--mx": "50%",
        "--my": "50%",
        animationDelay: `${delays[index]}ms`,
        animationFillMode: "forwards",
      }}
      className={[
        "group relative col-span-12 overflow-hidden rounded-2xl",
        "bg-white dark:bg-stone-800",
        "border border-amber-200/70 dark:border-stone-700/60",
        "shadow-sm hover:shadow-xl dark:hover:shadow-stone-900/60",
        "cursor-pointer",
        "opacity-0 translate-y-6 animate-[fadeUp_0.55s_ease_forwards]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5",
        "hover:border-amber-400/60 dark:hover:border-amber-500/40",
        "h-[260px] md:h-[280px]",
        colSpan[index],
      ].join(" ")}
    >
      {/* Cursor spotlight — amber tint */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx) var(--my), rgba(217,119,6,0.10), transparent 60%)",
        }}
      />

      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55] saturate-90 transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-[0.38]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent dark:from-stone-950/95" />

      {/* Top-left: index + tag */}
      <div className="absolute top-4 left-5 z-20 flex items-center gap-2">
        <span
          className="text-[10px] font-semibold tracking-[0.18em] text-amber-400 uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          0{index + 1}
        </span>
        <span className="h-3 w-px bg-amber-400/40" />
        <span
          className="text-[10px] font-medium tracking-[0.12em] text-amber-300/80 uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <h2
          className="text-[1.25rem] font-bold text-white leading-tight mb-1.5 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.name}
        </h2>
        <p
          className="text-[12.5px] text-stone-300/70 leading-relaxed mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {project.description}
        </p>

        {/* CTA pill — slides up on hover */}
        <span
          className="inline-flex w-fit items-center gap-1.5 px-3.5 py-1.5 rounded-full
            bg-amber-500 hover:bg-amber-400 text-white text-xs font-semibold
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          View Project ↗
        </span>
      </div>

      {/* Full-card link */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-30"
        aria-label={`View ${project.name}`}
      />
    </div>
  );
}

export default function Project() {
  return (
    <section
      id="projects"
      className="relative bg-amber-100 dark:bg-stone-900 min-h-screen px-6 py-20 md:px-8 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background texture blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/60 dark:bg-amber-900/10 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-200/40 dark:bg-stone-800/60 blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 max-w-[1100px] mx-auto">

        {/* ── Header ── */}
        <div
          className="mb-12 opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease_forwards]"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-5 h-px bg-amber-500" />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Select Work
            </span>
          </div>

          {/* Title row */}
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1
              className="font-black leading-none tracking-tight text-stone-800 dark:text-stone-100"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
              }}
            >
              My{" "}
              <em className="text-amber-600 dark:text-amber-400" style={{ fontStyle: "italic" }}>
                Projects
              </em>
            </h1>

            {/* <button
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full
                border border-amber-200/60 dark:border-stone-700
                text-stone-600 dark:text-stone-300
                text-sm font-medium bg-white/70 dark:bg-stone-800/70
                backdrop-blur-sm
                transition-all duration-200
                hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400
                hover:bg-amber-50 dark:hover:bg-stone-700/60
                cursor-pointer shadow-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              All Projects
              <span className="text-base transition-transform duration-200 group-hover/btn:translate-x-1">
                →
              </span>
            </button> */}
          </div>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-12 gap-4 [grid-auto-rows:280px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Keyframes injected inline so no extra config needed */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}