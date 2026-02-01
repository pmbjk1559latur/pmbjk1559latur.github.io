import { MapPin, Phone, Clock } from "lucide-react";
import Container from "../ui/Container";

export default function StoreInfo() {
  return (
    <Container>
      <div className="bg-[#0B3D62] rounded-[14px] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">
              Pradhan Mantri Bhartiya
              <br />
              Jan Aushadhi Kendra
            </h3>
            <div className="space-y-4 opacity-90">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <p>
                  Shop No: 01, House No-R-8-8/1848
                  <br />
                  Ram Nagar, Nandi Road
                  <br />
                  Latur – 413512
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 shrink-0" />
                <p className="font-mono">7588062750 / 7588062751</p>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 shrink-0" />
                <p>09:00 AM – 09:00 PM (All Days)</p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-50 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
            <span className="text-sm font-medium tracking-widest uppercase">
              Map Placeholder
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
