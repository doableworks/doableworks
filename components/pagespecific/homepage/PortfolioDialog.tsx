"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { XIcon } from "lucide-react";

const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

export default function PortfolioDialog() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pdfPath = "/Doable Works Cred Deck 2026.pdf";

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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

      {mounted && open && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-full max-w-5xl h-[90vh] bg-[#0a0a0a] rounded-xl border border-white/10 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0">
              <span className="text-white font-medium text-sm">Portfolio-2026</span>
              <div className="flex items-center gap-3">
                <a
                  href={pdfPath}
                  download
                  className="group/dl flex items-center gap-2 bg-[#9AD3FF] text-[#002E79] font-medium text-sm py-1.5 px-4 rounded-full hover:bg-white transition-colors"
                >
                  <img src="/images/icons/download.svg" alt="" className="w-4 h-4 transition-transform duration-200 group-hover/dl:-translate-y-0.5" />
                  Download
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                >
                  <XIcon className="w-5 h-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
            </div>

            <PDFViewer file={pdfPath} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
