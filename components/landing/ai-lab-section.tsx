"use client";

import { motion } from "framer-motion";
import { AiLabCore } from "./ai-lab-core";
import { SectionHeading } from "./section-heading";

export function AiLabSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--ai-blue)] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <SectionHeading
            eyebrow="Winbox AI Lab"
            title="The Core Growth Architecture"
            description="Our proprietary AI engines synchronize to automate creativity, acquisition, and expansion."
          />
        </motion.div>

        <div className="flex justify-center items-center">
          <AiLabCore />
        </div>
      </div>
    </section>
  );
}
