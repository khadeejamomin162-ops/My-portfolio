import CaseStudyCard from "../components/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";

export default function Work() {
  return (
    <section className="max-w-content mx-auto px-6 pt-16 pb-24">
      <h1 className="font-display italic text-3xl md:text-4xl mb-3">Case Studies</h1>
      <p className="text-stone max-w-xl mb-12">
        A mix of a real self-run practice campaign and illustrative strategy
        examples across Google and Meta -- each one labeled clearly as what it is.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((s) => (
          <CaseStudyCard key={s.slug} study={s} />
        ))}
      </div>
    </section>
  );
}
