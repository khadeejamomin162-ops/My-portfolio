import { useParams, Link, Navigate } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { googleShots, metaShots } from "../data/screenshots";
import ScreenshotGrid from "../components/ScreenshotGrid";

const typeLabel = {
  practice: "Practice Project",
  illustrative: "Illustrative Example",
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/work" replace />;

  const isCafeMocha = slug === "cafe-mocha-house";

  return (
    <article className="max-w-content mx-auto px-6 pt-16 pb-24">
      <Link to="/work" className="text-sm text-stone hover:text-blue">
        &larr; All case studies
      </Link>

      <div className="flex items-center gap-3 mt-6">
        <span className="text-xs text-blue">{study.platformBadge}</span>
        <span className="text-[11px] text-stone border border-line rounded-full px-2 py-0.5">
          {typeLabel[study.type]}
        </span>
      </div>
      <h1 className="font-display italic text-3xl md:text-4xl mt-3">{study.name}</h1>
      <p className="text-xs text-stone mt-2">{study.category} - {study.objective}</p>
      <p className="text-stone mt-4 max-w-2xl leading-relaxed">{study.summary}</p>

      <div className="mt-14">
        <h2 className="font-display italic text-xl mb-3">The Problem</h2>
        <p className="text-stone leading-relaxed max-w-2xl">{study.problem}</p>
      </div>

      <div className="mt-14">
        <h2 className="font-display italic text-xl mb-5">Approach</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {study.approach.map((item) => (
            <div key={item.label} className="border border-line rounded-xl p-5">
              <p className="text-xs text-blue mb-2">{item.label}</p>
              <p className="text-sm text-stone leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {isCafeMocha && (
        <div className="mt-14">
          <h2 className="font-display italic text-xl mb-5">Screenshots</h2>
          <p className="text-sm text-stone mb-5">Google Ads setup</p>
          <ScreenshotGrid shots={googleShots} />
          <p className="text-sm text-stone mt-10 mb-5">Meta Ads setup</p>
          <ScreenshotGrid shots={metaShots} />
        </div>
      )}

      {study.keyTakeaway && (
        <div className="mt-14 border-t border-line pt-8">
          <p className="text-xs text-blue mb-2">Key Takeaway</p>
          <p className="text-stone leading-relaxed max-w-2xl italic">{study.keyTakeaway}</p>
        </div>
      )}

      <div className="mt-14">
        <h2 className="font-display italic text-xl mb-3">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {study.tools.map((t) => (
            <span key={t} className="text-xs border border-line rounded-full px-3 py-1.5 text-stone">
              {t}
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-stone mt-14 border-t border-line pt-6">{study.note}</p>
    </article>
  );
}
