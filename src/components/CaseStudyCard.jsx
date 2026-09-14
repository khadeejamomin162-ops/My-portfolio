import { Link } from "react-router-dom";

const typeLabel = {
  practice: "Practice Project",
  illustrative: "Illustrative Example",
};

export default function CaseStudyCard({ study }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group block bg-panel border border-line rounded-xl p-6 hover:border-blue/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-blue">{study.platformBadge}</span>
        <span className="text-[11px] text-stone border border-line rounded-full px-2 py-0.5">
          {typeLabel[study.type]}
        </span>
      </div>
      <h3 className="font-display italic text-xl mb-2">{study.name}</h3>
      <p className="text-xs text-stone mb-4">{study.category} - {study.objective}</p>
      <p className="text-sm text-stone leading-relaxed mb-6">{study.summary}</p>
      <span className="text-sm text-blue group-hover:translate-x-1 transition-transform inline-block">
        View Case Study -&gt;
      </span>
    </Link>
  );
}
