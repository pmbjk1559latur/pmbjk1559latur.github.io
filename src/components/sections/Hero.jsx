import { motion as Motion } from "motion/react";

export default function Hero() {
  return (
    <section className="w-full px-4 py-20 lg:h-screen lg:flex lg:items-center">
      <div className="mx-auto max-w-5xl text-center">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* Trust Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            Authorized Store · Operational since 2017
          </div>

          {/* Main Title */}
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Pradhan Mantri Bhartiya Jan Aushadhi Kendra
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-600 sm:text-lg md:text-xl">
            Quality generic medicines at affordable prices
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
