// type: "practice"     -> a campaign she actually built/ran herself (real screenshots exist), but with
//                          no live client performance data to report -- shown as real setup/research facts.
// type: "illustrative" -> a hypothetical business used purely to demonstrate strategic thinking.
//                          No screenshots, no invented metrics -- qualitative approach only.

export const caseStudies = [
  {
    slug: "cafe-mocha-house",
    name: "Cafe Mocha House",
    platformBadge: "Google Ads + Meta Ads",
    category: "Cafe / Hospitality",
    objective: "Local awareness & weekend reservations",
    type: "practice",
    summary:
      "Built the website, then planned and built out a Google Search Ads and Meta Ads setup for a specialty cafe in Koregaon Park, Pune.",
    problem:
      "The cafe had strong regulars but inconsistent weekend walk-ins, and no paid presence on Search or Meta to capture nearby intent.",
    approach: [
      {
        label: "Keyword Research",
        detail:
          "Used Google Keyword Planner across 12+ terms. \"Cafe near me\" alone showed 100K-1M monthly searches in the area, low competition, with top-of-page bids ranging Rs.1.13-Rs.15.74.",
      },
      {
        label: "Ad Copy",
        detail:
          "Wrote and tested 15 headline variations and 8 description variations within Google's character limits, built around social proof (\"2,000+ Happy Regulars\", \"Rated 4.9\").",
      },
      {
        label: "Assets & Extensions",
        detail:
          "Added full sitelink assets -- Our Location, Our Story, Photo Gallery, Reserve A Table, Reviews, View Menu -- so the ad itself acts as a mini homepage.",
      },
      {
        label: "Meta Campaign Structure",
        detail:
          "Traffic-objective campaign, Rs.500/day budget, Highest Volume bidding, age 18-50, lookalike audiences (1-3%) layered with coffee-related interest targeting.",
      },
      {
        label: "Creative Direction",
        detail:
          "Top-down coffee shot with the line \"Don't let your coffee plans become 'maybe next time.'\" and a direct \"Book now\" CTA.",
      },
    ],
    tools: ["Google Ads", "Google Keyword Planner", "Meta Ads Manager", "Meta Pixel", "React", "Vercel"],
    keyTakeaway:
      "Local intent doesn't need a big budget to capture -- it needs the right keywords, sitelinks, and a message that matches how people already talk about the cafe.",
    note: "Practice project -- self-initiated to demonstrate the full workflow from site build to campaign setup. Not a live client account; figures shown above are real research/build data, not performance results.",
  },
  {
    slug: "veloura",
    name: "Veloura",
    platformBadge: "Meta Ads",
    category: "Fashion E-commerce",
    objective: "Reduce cart abandonment, improve conversion",
    type: "illustrative",
    summary:
      "An illustrative fashion e-commerce brand losing shoppers at checkout -- used to demonstrate a full-funnel retargeting strategy.",
    problem:
      "A common e-commerce pattern: healthy traffic, high cart abandonment, and no retargeting system in place -- ad spend going toward cold traffic only.",
    approach: [
      {
        label: "Conversion Tracking Plan",
        detail: "Meta Pixel + Conversions API for accurate, deduplicated event tracking across the funnel.",
      },
      {
        label: "Campaign Structure",
        detail:
          "3-tier structure: prospecting (lookalikes from past purchasers), retargeting (site visitors, add-to-cart non-buyers, video viewers), and dynamic product ads pulling the exact item each shopper viewed.",
      },
      {
        label: "Creative Direction",
        detail: "5 creative formats per segment tested -- UGC-style video, static product shots, and carousels.",
      },
      {
        label: "Targeting Strategy",
        detail: "A time-limited discount placed only inside retargeting ads, never prospecting, to protect margin on cold traffic.",
      },
    ],
    tools: ["Meta Ads Manager", "Meta Pixel", "Conversions API", "Canva"],
    keyTakeaway:
      "Cold traffic converts less than warm traffic that's already shown interest -- most of the lift comes from acting on that, not spending more against strangers.",
    note: "Illustrative example -- a hypothetical brand used to demonstrate funnel and retargeting strategy for e-commerce. No real business, screenshots, or performance data attached.",
  },
  {
    slug: "flexfit-studio",
    name: "FlexFit Studio",
    platformBadge: "Google Ads",
    category: "Local Business -- Fitness",
    objective: "Lower cost per lead, improve lead quality",
    type: "illustrative",
    summary:
      "An illustrative two-location gym relying on plain Search ads -- used to demonstrate a Performance Max strategy for local lead generation.",
    problem:
      "A common local-business pattern: paying per lead through Search alone, with no reach beyond search intent and no way to pre-qualify who shows up.",
    approach: [
      {
        label: "Campaign Structure",
        detail: "Performance Max covering Search, Display, YouTube, and Maps from a single campaign, with separate asset groups per branch.",
      },
      {
        label: "Landing Page Approach",
        detail: "In-ad Lead Form assets to capture name, phone, and preferred class time without an extra landing-page click.",
      },
      {
        label: "Targeting Strategy",
        detail: "Audience signals from an existing member list plus fitness-related interest categories.",
      },
      {
        label: "Ad Copy",
        detail: "Call and location extensions so nearby users could call or get directions directly from the ad.",
      },
    ],
    tools: ["Google Ads (Performance Max)", "Google Ads Editor", "Google Maps location assets"],
    keyTakeaway:
      "Broadening reach only helps if the campaign can also filter for who's actually ready to book a class, not just who's local.",
    note: "Illustrative example -- a hypothetical business used to demonstrate Performance Max strategy for local lead generation. No real business, screenshots, or performance data attached.",
  },
  {
    slug: "aurelie",
    name: "Aurelie",
    platformBadge: "Google Ads + Meta Ads",
    category: "Fashion E-commerce",
    objective: "Reduce CAC, refresh creative rotation",
    type: "illustrative",
    summary:
      "An illustrative fashion e-commerce brand watching acquisition costs climb as a handful of top-performing creatives lose steam -- used to demonstrate a structured creative-testing and funnel-separation strategy.",
    problem:
      "Rising CAC, ad fatigue, and over-reliance on a small set of winning creatives that eventually stop performing as well.",
    approach: [
      {
        label: "Funnel Separation",
        detail:
          "Split prospecting, retargeting, and customer reactivation into distinct campaigns instead of one blended structure, so each stage could be diagnosed and adjusted independently.",
      },
      {
        label: "Creative Testing Framework",
        detail:
          "Structured testing across four angles -- product, social proof, problem/solution, and lifestyle -- so no single creative carried the whole campaign's performance.",
      },
      {
        label: "Refresh Cadence",
        detail:
          "A planned rotation schedule for swapping creatives before fatigue set in, rather than reacting only after CAC had already climbed.",
      },
    ],
    tools: ["Meta Ads Manager", "Google Ads", "Meta Pixel", "Canva"],
    keyTakeaway:
      "When performance declines, increasing budget isn't always the fix -- creative fatigue and funnel structure are often the real bottleneck.",
    note: "Illustrative example -- a hypothetical brand used to demonstrate creative-testing and funnel strategy for e-commerce. No real business, screenshots, or performance data attached.",
  },
  {
    slug: "brightline-dental",
    name: "Brightline Dental",
    platformBadge: "Google Ads + Meta Ads",
    category: "Local Business -- Dental Clinic",
    objective: "Improve lead quality, not just lead volume",
    type: "illustrative",
    summary:
      "An illustrative dental clinic getting plenty of enquiries, but too many low-intent or price-focused leads that never turn into booked appointments.",
    problem:
      "Lead volume was high, but lead quality was inconsistent -- broad dental keywords were pulling in people who were mainly comparison-shopping on price.",
    approach: [
      {
        label: "Search Intent Restructuring",
        detail:
          "Moved spend away from broad dental keywords toward high-intent, service-specific searches (a named procedure) rather than generic \"dentist near me\" terms.",
      },
      {
        label: "Campaign Separation",
        detail:
          "Split campaigns by service line so budget and messaging could be tuned per procedure instead of one catch-all campaign.",
      },
      {
        label: "Landing Page Match",
        detail:
          "Matched each ad group to a landing page describing that exact service, so the message stayed consistent from search to page.",
      },
    ],
    tools: ["Google Ads", "Google Keyword Planner", "Google Ads Editor"],
    keyTakeaway:
      "A cheaper lead isn't automatically a better lead -- optimization should focus on what happens after the enquiry, not just its cost.",
    note: "Illustrative example -- a hypothetical business used to demonstrate search-intent and lead-quality strategy for a local service business. No real business, screenshots, or performance data attached.",
  },
];
