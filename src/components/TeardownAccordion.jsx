import { useState } from "react";

export default function TeardownAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {sections.map((s, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={s.step} className="border border-line rounded-xl overflow-hidden bg-panel/40">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4"
            >
              <span className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span className="text-blue font-display italic text-xl sm:text-2xl shrink-0">
                  {s.step}
                </span>
                <span className="font-medium">{s.title}</span>
              </span>
              <span
                className={`shrink-0 text-blue transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 max-w-2xl">
                {s.body && (
                  <p className="text-sm text-stone leading-relaxed mb-4">{s.body}</p>
                )}

                {s.callouts && (
                  <div className="space-y-3">
                    {s.callouts.map((c) => (
                      <div key={c.label}>
                        <p className="text-xs text-blue mb-1">{c.label}</p>
                        <p className="text-sm text-stone leading-relaxed">{c.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {s.list && (
                  <ul className="space-y-2 mt-1">
                    {s.list.map((item, idx) => (
                      <li key={idx} className="text-sm text-stone leading-relaxed flex gap-2">
                        <span className="text-blue shrink-0">--</span>
                        <span>
                          {item.label && (
                            <span className="text-ivory font-medium">{item.label}: </span>
                          )}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
