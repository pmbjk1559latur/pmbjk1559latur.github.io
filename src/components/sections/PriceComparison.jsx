import { motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const CARD_WIDTH = 280; // card width + gap
const VISIBLE_CARDS = 3;

const MEDICINES = [
  {
    name: "Paracetamol 500mg",
    usage: "Pain & fever relief",
    marketPrice: "₹30",
    janAushadhiPrice: "₹8",
  },
  {
    name: "Amlodipine 5mg",
    usage: "Blood pressure control",
    marketPrice: "₹75",
    janAushadhiPrice: "₹18",
  },
  {
    name: "Metformin 500mg",
    usage: "Type 2 diabetes",
    marketPrice: "₹65",
    janAushadhiPrice: "₹14",
  },
  {
    name: "Atorvastatin 10mg",
    usage: "Cholesterol management",
    marketPrice: "₹120",
    janAushadhiPrice: "₹28",
  },
  {
    name: "Pantoprazole 40mg",
    usage: "Acidity & GERD",
    marketPrice: "₹90",
    janAushadhiPrice: "₹22",
  },
  {
    name: "Cetirizine 10mg",
    usage: "Allergy relief",
    marketPrice: "₹25",
    janAushadhiPrice: "₹6",
  },
];

export default function PriceComparison() {
  const [index, setIndex] = useState(0);

  const maxIndex = MEDICINES.length - VISIBLE_CARDS;
  const isPrevDisabled = index === 0;
  const isNextDisabled = index === maxIndex - 1;

  return (
    <section className="w-full bg-slate-50 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Compare Prices, Save More
        </h2>
        <p className="mt-2 text-slate-600">
          Transparent comparison with Jan Aushadhi prices
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Controls */}
        <div className="relative mx-auto max-w-6xl ">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={isPrevDisabled}
            className={`absolute -left-10 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 transition ${
              isPrevDisabled
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-white text-slate-700 shadow hover:bg-slate-100"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            disabled={isNextDisabled}
            className={`absolute -right-10 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 transition ${
              isNextDisabled
                ? "cursor-not-allowed bg-slate-100 text-slate-400"
                : "bg-white text-slate-700 shadow hover:bg-slate-100"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <Motion.div
              className="flex gap-6 px-4"
              animate={{ x: -index * CARD_WIDTH }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {MEDICINES.map((med, i) => (
                <div
                  key={i}
                  className="w-64 h-[380px] shrink-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  {/* Image Placeholder */}
                  <div className="mb-5 flex h-36 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                    Product Image
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold text-slate-900">
                    {med.name}
                  </h3>
                  <p className="mb-4 text-sm text-slate-600 truncate">
                    {med.usage}
                  </p>

                  {/* Prices */}
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500 line-through">
                      Market Price: {med.marketPrice}
                    </p>
                    <p className="text-base font-bold text-green-600">
                      Jan Aushadhi Price: {med.janAushadhiPrice}
                    </p>
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
