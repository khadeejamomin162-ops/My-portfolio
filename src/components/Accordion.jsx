import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left py-5 gap-4"
            >
              <span className="font-medium">{item.q}</span>
              <span
                className={`shrink-0 text-blue transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="text-stone text-sm leading-relaxed pb-5 max-w-2xl">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
