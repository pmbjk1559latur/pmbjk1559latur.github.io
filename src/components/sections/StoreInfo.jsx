import { User, Phone, MapPin, Mail, Clock } from "lucide-react";
import StoreMap from "../StoreMap";

export default function StoreInfo() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to contact the PMBJK-1559, Latur store for information.",
  );

  const whatsappNumber = "917588062751"; // country code + number (no spaces)

  return (
    <section className="w-full p-10 sm:px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column – Contact Details */}
          <div className="space-y-6 text-slate-800">
            <h2 className="text-2xl text-center sm:text-left sm:text-3xl font-bold tracking-tight text-slate-900">
              Store Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Pharmacist</p>
                  <p className="text-slate-600">
                    <span className="font-medium">Manojkumar Agase</span> -
                    7588062750
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium">Sapana Agase</span> -
                    7588062751
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-slate-600">
                    Shop No: 01, House No-R-8-8/1848, <br />
                    Ram Nagar, Nandi Road, <br />
                    Latur – 413512
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-600">pmbjk1559latur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Shop Timing</p>
                  <p className="text-slate-600">
                    <span className="font-medium">Mon – Sat</span> : 10:00 am to
                    9:30 pm
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium">Sun</span> : 10:00 am to 2:00
                    pm & 5:00 pm to 9:30 pm
                  </p>
                </div>
              </div>

              {/* Buttons Container */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  <Phone className="h-4 w-4" />
                  Contact on WhatsApp
                </a>

                <a
                  href="https://maps.app.goo.gl/LLk2pu2hF3fjq3e86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  <MapPin className="h-4 w-4" />
                  Get Location
                </a>
              </div>
            </div>
          </div>

          {/* Right Column – Actual Interactive Map */}
          <div className="h-full w-full min-h-[350px]">
            <StoreMap />
          </div>
        </div>
      </div>
    </section>
  );
}
