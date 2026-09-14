import { useState } from "react";

export default function ScreenshotGrid({ shots }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {shots.map((s) => (
          <button
            key={s.src}
            onClick={() => setActive(s)}
            className="text-left group"
          >
            <div className="rounded-xl overflow-hidden border border-line bg-panel">
              <img src={s.src} alt={s.caption} className="w-full h-auto group-hover:opacity-90 transition-opacity" />
            </div>
            <p className="text-xs text-stone mt-2 leading-relaxed">{s.caption}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption} className="w-full h-auto rounded-lg border border-line" />
            <p className="text-sm text-stone mt-3">{active.caption}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-4 text-sm text-ivory border border-line rounded-full px-4 py-2 hover:border-blue transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
