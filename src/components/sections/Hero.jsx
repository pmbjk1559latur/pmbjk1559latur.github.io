import { CheckCircle2 } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-surface">
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A3D62 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <Reveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
          <CheckCircle2 className="w-4 h-4 text-bharat-blue" />
          <span className="text-xs font-medium tracking-wide text-secondary uppercase">
            Authorized Jan Aushadhi Kendra
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] mb-6 max-w-4xl mx-auto">
          Affordable Medicines.
          <br />
          <span className="text-bharat-blue">Trusted Care.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-sans text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Government of India initiative providing quality generic medicines at
          affordable prices. Accessible to every citizen.
        </p>
      </Reveal>
    </section>
  );
}
