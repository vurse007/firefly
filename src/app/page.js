"use client";

export default function Home() {
  return (
    <>
      <nav className="glass-effect fixed inset-x-0 top-0 z-50 p-4 slide-in">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="text-2xl font-medium italic tracking-wider text-[var(--accent)]">
            firefly
          </div>
          <div className="space-x-12">
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <main className="px-8 pt-32 text-center">
        <h1 className="text-5xl font-medium leading-none tracking-tight italic md:text-7xl slide-in text-[var(--text)]">
          Muscle Rehabilitation<br className="hidden md:block" />
          <span
            className="block reinvented mx-auto mt-8 md:mt-6 slide-in"
            style={{ fontSize: "clamp(6rem, 18vw, 13rem)" }}
          >
            Reinvented.
          </span>
        </h1>

        <p className="mx-auto mt-14 max-w-2xl text-lg italic md:text-2xl font-light slide-in text-[var(--muted)]">
          An all-new recovery sleeve powered by EMS technology.
        </p>

        <button className="mt-16 buy-btn slide-in">Buy Now</button>
      </main>
    </>
  );
}