import { motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          background:
            "linear-gradient(180deg, #F8F9FA 0%, #F97316 8%, #F97316 20%, #FFFFFF 60%)",
        }}
      />
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.h2
            className="font-serif text-xl sm:text-2xl font-semibold text-primary-text mb-2 tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PRADHAN MANTRI BHARTIYA JAN AUSHADHI KENDRA
          </Motion.h2>
          <p className="text-secondary-text text-sm font-sans mb-8">
            Latur · Ram Nagar, Nandi Road
          </p>

          <nav className="flex flex-wrap justify-center gap-6 mb-10 font-sans text-sm">
            <a
              href="#about"
              className="text-bharat-blue hover:underline flex items-center gap-1"
            >
              About Scheme
            </a>
            <a
              href="https://janaushadhi.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bharat-blue hover:underline flex items-center gap-1"
            >
              Government Initiative
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="#store"
              className="text-bharat-blue hover:underline flex items-center gap-1"
            >
              Contact
            </a>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1F1E5] border border-green-400/50">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-sans text-primary-text text-sm font-medium">
              Store Open & Operational
            </span>
          </div>

          <p className="text-secondary-text text-xs mt-8 font-sans">
            © Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana · This is a public
            service information site.
          </p>
        </div>
      </div>
    </footer>
  );
}
