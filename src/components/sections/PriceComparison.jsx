import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const CARD_WIDTH = 280; // card width + gap
const MEDICINES = [
  {
    name: "Paracetamol Tablets IP 500mg",
    usage: "Pain & fever relief",
    marketPrice: "₹ 14",
    janAushadhiPrice: "₹ 6.57",
    image: "/products/23.jpg",
  },
  {
    name: "Amoxycillin 500mg and Potassium Clavulanate 125mg Tablets",
    usage: "Antibiotic",
    marketPrice: "₹ 192",
    janAushadhiPrice: "₹ 52.60",
    image: "/products/39.jpg",
  },
  {
    name: "Azithromycin Tablets IP 500mg",
    usage: "Antibiotic",
    marketPrice: "₹ 125",
    janAushadhiPrice: "₹ 39.38",
    image: "/products/72.jpg",
  },
  {
    name: "Metformin Hydrochloride Tablets IP 500mg",
    usage: "Anti-diabetic",
    marketPrice: "₹ 42",
    janAushadhiPrice: "₹ 6.19",
    image: "/products/145.jpg",
  },
  {
    name: "Metformin Hydrochloride (PR) 500mg and Glimepiride 2mg Tablets",
    usage: "Anti-diabetic",
    marketPrice: "₹ 180",
    janAushadhiPrice: "₹ 24.75",
    image: "/products/34.jpg",
  },
  {
    name: "Telmisartan Tablets IP 40mg",
    usage: "Anti-hypertensive",
    marketPrice: "₹ 108",
    janAushadhiPrice: "₹ 11.25",
    image: "/products/300.jpg",
  },
  {
    name: "Amlodipine Tablets IP 5mg",
    usage: "Anti-hypertensive",
    marketPrice: "₹ 69",
    janAushadhiPrice: "₹ 5.16",
    image: "/products/264.jpg",
  },
  {
    name: "Pantoprazole 40mg and Domperidone 30mg (PR) Capsules IP",
    usage: "Antacid",
    marketPrice: "₹ 226",
    janAushadhiPrice: "₹ 20.63",
    image: "/products/465.jpg",
  },
  {
    name: "Omeprazole Gastro-resistant Capsules IP 20 mg",
    usage: "Antacid",
    marketPrice: "₹ 60",
    janAushadhiPrice: "₹ 9.29",
    image: "/products/207.jpg",
  },
];

export default function PriceComparison() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-slate-50 py-16">
      {/* Header */}
      <div className="mb-10 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Compare Prices and Save Money!!
        </h2>
        <p className="mx-auto mt-2 max-w-3xl text-sm font-bold leading-relaxed text-slate-600">
          All Medicines tested in NABL-accredited laboratories as per government
          standards.
        </p>
        <p className="mt-1 text-slate-600">
          Here's transparent comparison between Other Branded Medicines and Jan
          Aushadhi prices.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:-left-12 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-slate-700 shadow hover:bg-slate-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 md:-right-12 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-slate-700 shadow hover:bg-slate-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 px-20
            overflow-x-auto scroll-smooth
            scrollbar-hide
            snap-x snap-mandatory
          "
        >
          {MEDICINES.map((med, i) => (
            <div
              key={i}
              className="
                w-64 h-[380px] shrink-0
                rounded-xl border border-slate-200
                bg-white p-5 shadow-sm
                transition hover:shadow-md
              "
            >
              {/* Image */}
              <div className="mb-5 flex h-36 items-center justify-center rounded-lg bg-slate-100 overflow-hidden">
                <img
                  src={med.image}
                  alt={med.name}
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                />
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
                <p className="text-sm text-red-400 font-bold line-through">
                  Market Price: {med.marketPrice}
                </p>
                <p className="text-base font-bold text-green-600">
                  Jan Aushadhi Price: {med.janAushadhiPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
