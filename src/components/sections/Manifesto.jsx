import { motion as Motion } from "motion/react";
import Container from "../ui/Container";

export default function Manifesto() {
  return (
    <div className="bg-white py-8">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, easing: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl md:text-4xl  leading-tight max-w-4xl mx-auto">
            <span className="text-gray-500">
              Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana
            </span>{" "}
            ensures access to quality medicines at affordable prices for every
            citizen. We believe healthcare is a right, not a privilege.
          </h2>
        </Motion.div>
      </Container>
    </div>
  );
}
