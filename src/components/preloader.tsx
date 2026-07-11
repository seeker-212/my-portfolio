"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export function Preloader() {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduced ? 0 : 900);
    return () => clearTimeout(t);
  }, [reduced]);

  const initial = siteConfig.name.charAt(0);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="absolute size-72 rounded-full glow opacity-60" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <div className="relative grid size-16 place-items-center rounded-2xl bg-brand-gradient text-2xl font-bold text-white shadow-2xl">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                {initial}
              </motion.span>
              <span className="absolute -inset-1 rounded-2xl border border-white/10" />
            </div>
            <span className="font-display text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              {siteConfig.name.split(" ")[0]}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
