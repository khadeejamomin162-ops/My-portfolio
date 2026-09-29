import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { caseStudies } from "../data/caseStudies";
import { process } from "../data/process";
import { skills } from "../data/skills";
import { faqs } from "../data/faqs";
import { teardown } from "../data/teardown";
import { googleShots, metaShots } from "../data/screenshots";
import CaseStudyCard from "../components/CaseStudyCard";
import ScreenshotGrid from "../components/ScreenshotGrid";
import ContactForm from "../components/ContactForm";
import Accordion from "../components/Accordion";
import TeardownAccordion from "../components/TeardownAccordion";

const trustItems = [
  {
    title: "Google Ads",
    body: "Search Campaigns - Keyword Strategy - Ad Copy",
  },
  {
    title: "Meta Ads",
    body: "Creative Strategy - Audience Targeting - Campaign Structure",
  },
  {
    title: "Conversion Focused",
    body: "Landing Pages - Tracking - Optimization",
  },
];

const whyPoints = [
  {
    title: "Strategy Before Spend",
    body: "No campaign goes live without a clear plan for who it's targeting and why.",
  },
  {
    title: "Creative + Data Thinking",
    body: "Ad copy and creative decisions are informed by targeting data, not guesses.",
  },
  {
    title: "Conversion-Focused Execution",
    body: "The site the ad points to matters as much as the ad itself -- both get built with the same goal.",
  },
  {
    title: "Clear, Honest Communication",
    body: "No inflated claims -- case studies are labeled clearly as real, practice, or illustrative work.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-hero-glow">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-wide text-stone mb-5">{profile.tagline}</p>
            <h1 className="font-display italic text-4xl md:text-5xl leading-[1.15]">
              Ads That Don't Just Get Clicks.
              <br />
              They Drive Business Growth.
            </h1>
            <p className="text-stone mt-6 max-w-md leading-relaxed">
              I create and optimize Google Ads and Meta Ads campaigns designed to
              attract the right audience, generate qualified leads, and turn
              advertising spend into measurable business results.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/#contact"
                className="bg-blue-dark text-ivory px-6 py-3 rounded-full text-sm font-medium hover:bg-blue transition-colors"
              >
                Book a Free Strategy Call
              </a>
              <Link
                to="/work"
                className="border border-line px-6 py-3 rounded-full text-sm font-medium hover:border-blue/60 transition-colors"
              >
                Explore My Work
              </Link>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 hidden md:block">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
              </div>
              <span className="text-xs text-stone">Campaign Overview</span>
            </div>
            <div className="flex items-end gap-2 h-32 mb-6">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-blue/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-panel border border-line rounded-lg p-3">
                <p className="text-[10px] text-stone mb-1">Platform</p>
                <p className="text-sm font-medium mb-1">Google Ads</p>
                <p className="text-[11px] text-stone">Search intent + ad relevance</p>
              </div>
              <div className="bg-panel border border-line rounded-lg p-3">
                <p className="text-[10px] text-stone mb-1">Platform</p>
                <p className="text-sm font-medium mb-1">Meta Ads</p>
                <p className="text-[11px] text-stone">Audience + creative testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE TRIAL BANNER */}
      <div className="max-w-content mx-auto px-6 -mt-2 mb-2 md:mb-4">
        <a
          href={profile.instagram.url}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-orange-500 to-amber-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="font-display italic text-xl sm:text-2xl text-charcoal mb-2 leading-snug">
                🎁 FREE 3-Day Meta Ad Trial for Small Brands
              </p>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-md">
                No charges. No commitment. If you get sales, we talk monthly. If not,
                no hard feelings.
              </p>
              <p className="text-xs text-charcoal/60 mt-2">
                Limited to first 3 brands this month.
              </p>
            </div>
            <span className="shrink-0 bg-charcoal text-ivory px-6 py-3 rounded-full text-sm font-medium text-center whitespace-nowrap group-hover:bg-panel transition-colors">
              DM me on Instagram @adswithkhadija
            </span>
          </div>
        </a>
      </div>

      {/* TRUST STRIP */}
      <section className="border-y border-line">
        <div className="max-w-content mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
          {trustItems.map((t) => (
            <div key={t.title}>
              <p className="font-display italic text-lg mb-1">{t.title}</p>
              <p className="text-sm text-stone">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-content mx-auto px-6 py-24 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-line">
            <img
              src="/images/about-workspace.jpg"
              alt="Khadija's workspace — laptop and tablet set up for a work session"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display italic text-3xl mb-6">About</h2>
            <div className="space-y-4 text-stone leading-relaxed max-w-lg">
              <p>
                I combine advertising strategy, creative thinking, data analysis, and
                conversion-focused execution -- Google Ads and Meta Ads campaigns, and
                the sites they point to.
              </p>
              <p>
                Based in India, currently studying alongside freelance work. What's
                shown here is a mix of a self-run practice campaign with real
                screenshots, and illustrative examples used to walk through strategy --
                each one labeled clearly as what it is.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-block mt-8 border border-line px-6 py-3 rounded-full text-sm font-medium hover:border-blue/60 transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="max-w-content mx-auto px-6 py-24 border-t border-line scroll-mt-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display italic text-3xl mb-3">Featured Work</h2>
            <p className="text-stone max-w-lg">
              Google and Meta campaigns, each solving a different problem -- local
              footfall, cart abandonment, and lead quality.
            </p>
          </div>
          <Link to="/work" className="text-sm text-blue hover:underline hidden sm:block">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </section>

      {/* SERVICES: GOOGLE ADS + META ADS SHOWCASE */}
      <section id="services" className="border-t border-line scroll-mt-20">
        <div className="max-w-content mx-auto px-6 py-24">
          <h2 className="font-display italic text-3xl mb-4">What I Do.</h2>
          <p className="text-stone max-w-lg mb-10 leading-relaxed">
            From keyword research to creative testing -- the pieces that go into
            every campaign, before deciding what to optimize.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.step} className="border border-line rounded-xl p-6">
                <p className="text-blue font-display italic text-2xl mb-3">{s.step}</p>
                <p className="font-medium mb-2">{s.title}</p>
                <p className="text-sm text-stone leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-content mx-auto px-6 py-24 border-t border-line">
          <h2 className="font-display italic text-3xl mb-4">Search Ads Built Around Intent.</h2>
          <p className="text-stone max-w-lg mb-10 leading-relaxed">
            From keyword research to compelling ad copy and conversion-focused
            landing pages, I build search campaigns designed to connect businesses
            with people actively looking for their products or services.
          </p>
          <ScreenshotGrid shots={googleShots} />
        </div>

        <div className="max-w-content mx-auto px-6 py-24 border-t border-line">
          <h2 className="font-display italic text-3xl mb-1">Creative That Stops the Scroll.</h2>
          <h2 className="font-display italic text-3xl mb-4">Strategy That Moves People.</h2>
          <p className="text-stone max-w-lg mb-10 leading-relaxed">
            Creative, targeting, and campaign structure working together -- built to
            fit how people actually scroll through Instagram and Facebook.
          </p>
          <ScreenshotGrid shots={metaShots} />
        </div>
      </section>

      {/* INDEPENDENT PAID MEDIA TEARDOWN */}
      <section
        id="teardown"
        className="max-w-content mx-auto px-6 py-24 border-t border-line scroll-mt-20"
      >
        <span className="inline-block text-[11px] tracking-wide uppercase text-blue border border-blue/40 rounded-full px-3 py-1 mb-5">
          Independent Research
        </span>
        <h2 className="font-display italic text-3xl mb-3">Independent Paid Media Teardown</h2>
        <p className="text-stone max-w-xl mb-2 leading-relaxed">
          An independent analysis of a real brand's advertising -- not client work, but a
          demonstration of how I think.
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone mt-6 mb-2">
          <span className="text-ivory font-medium">Brand:</span>
          <a
            href={teardown.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:underline"
          >
            {teardown.brand}
          </a>
          <span className="text-line">|</span>
          <span>{teardown.type}</span>
        </div>

        <p className="text-stone text-xs italic max-w-2xl mb-10 leading-relaxed">
          {teardown.disclaimer}
        </p>

        <TeardownAccordion sections={teardown.sections} />

        <div className="mt-8 border-t border-line pt-8">
          <p className="text-xs text-blue mb-2">Key Takeaway</p>
          <p className="text-stone leading-relaxed max-w-2xl italic">{teardown.keyTakeaway}</p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-content mx-auto px-6 py-24 border-t border-line scroll-mt-20">
        <h2 className="font-display italic text-3xl mb-12">My Process</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.step}>
              <p className="text-blue font-display italic text-2xl mb-3">{p.step}</p>
              <p className="font-medium mb-2">{p.title}</p>
              <p className="text-sm text-stone leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="max-w-content mx-auto px-6 py-24 border-t border-line">
        <h2 className="font-display italic text-3xl mb-12">Why Work With Me</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {whyPoints.map((p) => (
            <div key={p.title} className="border border-line rounded-xl p-6">
              <p className="font-medium mb-2">{p.title}</p>
              <p className="text-sm text-stone leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="max-w-content mx-auto px-6 py-24 border-t border-line text-center">
        <h2 className="font-display italic text-3xl mb-4">Built With a Performance-First Mindset</h2>
        <p className="text-stone max-w-md mx-auto leading-relaxed">
          Client testimonials will appear here as projects come in -- no placeholders
          dressed up as real feedback in the meantime.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-content mx-auto px-6 py-24 border-t border-line">
        <h2 className="font-display italic text-3xl mb-10">Frequently Asked Questions</h2>
        <Accordion items={faqs} />
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-line bg-hero-glow">
        <div className="max-w-content mx-auto px-6 py-24 text-center">
          <h2 className="font-display italic text-3xl md:text-4xl max-w-2xl mx-auto mb-5">
            Ready to Turn Ad Spend Into Better Business Results?
          </h2>
          <p className="text-stone max-w-lg mx-auto mb-8 leading-relaxed">
            Let's discuss your goals, identify opportunities, and build an
            advertising strategy focused on meaningful growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-blue-dark text-ivory px-6 py-3 rounded-full text-sm font-medium hover:bg-blue transition-colors"
            >
              Book a Free Strategy Call
            </a>
            <Link
              to="/work"
              className="border border-line px-6 py-3 rounded-full text-sm font-medium hover:border-blue/60 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-content mx-auto px-6 py-24 border-t border-line scroll-mt-20">
        <h2 className="font-display italic text-3xl mb-4">Let's Work Together</h2>
        <p className="text-stone max-w-lg mb-10 leading-relaxed">
          Fill this in, or reach out directly -- whichever's easier.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
