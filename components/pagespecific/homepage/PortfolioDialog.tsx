"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function PortfolioDialog() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pdfPath = "/Doable Works Cred Deck 2026.pdf";

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group bg-[#9AD3FF] font-medium py-2 px-6 rounded-full text-[#002E79] flex items-center justify-center gap-2 w-36"
      >
        <img
          src="/images/icons/download.svg"
          alt="Download"
          className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-1"
        />
        <span className="transition-all duration-200 group-hover:font-bold">Portfolio</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="!max-w-[95vw] w-[95vw] h-[90vh] p-0 bg-[#0a0a0a] border border-white/10 flex flex-col overflow-hidden">
          <DialogTitle className="sr-only">Doable Works Portfolio</DialogTitle>
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-medium text-sm">Doable Works — Cred Deck 2026</span>
            <a
              href={pdfPath}
              download
              className="group flex items-center gap-2 bg-[#9AD3FF] text-[#002E79] font-medium text-sm py-1.5 px-4 rounded-full hover:bg-white transition-colors"
            >
              <img
                src="/images/icons/download.svg"
                alt=""
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              Download
            </a>
          </div>
          <iframe
            src={`${pdfPath}#view=${isMobile ? "FitH" : "FitW"}&toolbar=0`}
            className="flex-1 w-full h-full border-0"
            title="Doable Works Cred Deck 2026"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
