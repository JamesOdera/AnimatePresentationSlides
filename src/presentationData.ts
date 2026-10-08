export type SlideKind =
  | "title"
  | "agenda"
  | "quote"
  | "split"
  | "loop"
  | "engines"
  | "timeline"
  | "flow"
  | "metrics"
  | "network"
  | "strategy"
  | "publisher"
  | "survey"
  | "takeaways"
  | "discussion";

export type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  kind: SlideKind;
  presenter: "James" | "Tony" | "Ambrose" | "Maryanne";
  notes: string;
  body?: string;
  items?: string[];
  metrics?: { value: string; label: string }[];
  quote?: string;
  attribution?: string[];
  footnote?: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "Open web · Agentic advertising",
    title: "Taboola Strengthens Agentic AI for Open Web Ads",
    kind: "title",
    presenter: "James",
    body: "Realize+, Budget Allocator, and DeeperDive",
    footnote: "MediaPost commentary · Laurie Sullivan · April 24, 2026",
    notes:
      "This session walks through Taboola’s next phase of agentic advertising on the open web: Realize+, conversational AI workflows, and the separate publisher product DeeperDive.",
  },
  {
    id: 2,
    eyebrow: "The briefing",
    title: "Six ideas. One shifting ecosystem.",
    kind: "agenda",
    presenter: "James",
    items: [
      "Why search and social are hitting a ceiling",
      "What Realize+ actually does",
      "Decision Engine, Budget Allocator, Element Generator",
      "Phase 2 and Claude Skills",
      "The open-web budget opportunity",
      "DeeperDive, the Answer Engine",
    ],
    notes:
      "We start with the problem, then the product, the commercial case, and close with DeeperDive before discussion.",
  },
  {
    id: 3,
    eyebrow: "01 · The pressure",
    title: "The performance ceiling",
    kind: "quote",
    presenter: "James",
    quote:
      "“Fishing for customers through search and social hit a performance ceiling, and costs rose.”",
    footnote: "Fictitious narrator · Taboola YouTube launch film",
    notes:
      "Taboola opens with a diagnosis: marketers relying on search and social are paying more for results that have stopped improving.",
  },
  {
    id: 4,
    eyebrow: "02 · The launch",
    title: "Product and story shipped together",
    kind: "split",
    presenter: "James",
    items: [
      "PRODUCT|A rebuilt platform: Realize+|A completely new architecture based on agentic AI.",
      "STORY|An AI-generated YouTube ad|The features, benefits, and future of the system—told through AI.",
    ],
    notes:
      "Realize+ is the rebuilt platform. The YouTube film is itself AI-generated and explains what the system does and where Taboola says it is going.",
  },
  {
    id: 5,
    eyebrow: "03 · Realize+",
    title: "From strategy to outcomes—with less manual work",
    kind: "loop",
    presenter: "Tony",
    items: ["Strategy", "Implementation", "Outcomes", "Optimization"],
    body:
      "Machine learning finds and converts consumers through work humans miss—or cannot do efficiently.",
    notes:
      "The promise is bigger than AI-written copy. The system builds strategy, puts it into market, and refreshes allocation and creative.",
  },
  {
    id: 6,
    eyebrow: "04 · Architecture",
    title: "Two working parts. Distinct jobs.",
    kind: "engines",
    presenter: "Tony",
    items: [
      "DECISION ENGINE|Moves budgets in real time to the highest-performing campaigns and opportunities.|Budget Allocator",
      "ELEMENT GENERATOR|Continuously improves ads and targeting without manual updates.|Ads + targeting",
    ],
    footnote: "Powered by first-party data + AI",
    notes:
      "The Decision Engine decides where money should go. The Budget Allocator carries out that move. The Element Generator improves ads and targeting.",
  },
  {
    id: 7,
    eyebrow: "The practitioner view",
    title: "The hardest move happens in real time",
    kind: "quote",
    presenter: "Tony",
    quote:
      "“Allocating budgets across campaigns in real time is one of the biggest challenges in performance marketing.”",
    attribution: [
      "Hector Vargas Mendoza",
      "Senior Growth Marketing Manager, Team Lead",
      "Sonova Marketing GmbH",
    ],
    notes:
      "The challenge is not setting a budget once. It is moving money across campaigns while performance is changing.",
  },
  {
    id: 8,
    eyebrow: "05 · Roadmap",
    title: "From beta to Phase 2",
    kind: "timeline",
    presenter: "Tony",
    items: [
      "BETA|Several months|Positive feedback",
      "PHASE 2|Q2|Improved models",
      "2026 ROADMAP|To be released|Extensive plan",
    ],
    notes:
      "Realize+ has been in beta for several months. Phase 2 in Q2 is the committed next step; the wider roadmap is forthcoming.",
  },
  {
    id: 9,
    eyebrow: "06 · Claude Skills",
    title: "A conversational front door",
    kind: "flow",
    presenter: "Ambrose",
    items: [
      "Advertiser / agency",
      "Claude Skill",
      "Realize+",
      "Campaign setup + optimization",
    ],
    footnote: "Several more skills planned over the coming months",
    notes:
      "The integration is a front door, not a replacement for the Decision Engine. The first skill handles campaign setup and optimization.",
  },
  {
    id: 10,
    eyebrow: "07 · The opportunity",
    title: "Would marketers move money to the open web?",
    kind: "metrics",
    presenter: "Ambrose",
    metrics: [
      {
        value: "80%",
        label:
          "Would increase open-web investment if automated AI tools matched walled gardens.",
      },
      {
        value: "~86%",
        label:
          "Would allocate up to one-quarter of performance budgets to the open web.",
      },
    ],
    footnote: "Taboola company data · Conditional intentions, not actual budget shifts",
    notes:
      "These are statements about what marketers say they would do if open-web tools matched the walled gardens—not spend that has already moved.",
  },
  {
    id: 11,
    eyebrow: "08 · Existing scale",
    title: "18,000 advertisers",
    kind: "network",
    presenter: "Ambrose",
    items: [
      "ADVERTISERS|Walmart · Macy’s · Wayfair",
      "PUBLISHERS|NBC News · Yahoo · The Weather Company",
      "AGENCIES|Acting for brands",
    ],
    footnote: "Taboola recommendations engine · Early 2026",
    notes:
      "Realize+ sits on an existing network. The recommendations engine already works with roughly 18,000 advertisers and large publishers.",
  },
  {
    id: 12,
    eyebrow: "09 · Strategic claim",
    title: "What Realize+ is designed to unlock",
    kind: "strategy",
    presenter: "Ambrose",
    items: [
      "Replicate the performance of walled gardens",
      "Provide a direct path to premium inventory",
      "Keep more of the budget on outcomes",
    ],
    quote:
      "“Autonomously, pulling from data and optimizing content based on human feedback.”",
    footnote: "Laurie Sullivan’s commentary—not a product specification",
    notes:
      "The three goals are Taboola’s. The line about where ad systems go next is the author’s own view; keep those claims separate.",
  },
  {
    id: 13,
    eyebrow: "Publisher product · Not Realize+",
    title: "DeeperDive is a different product",
    kind: "publisher",
    presenter: "Maryanne",
    body: "Answer Engine",
    metrics: [
      { value: "~7M", label: "monthly active users" },
      { value: "8", label: "months after launch" },
    ],
    items: [
      "HuffPost UK",
      "Gannett / USA Today Network",
      "India Today",
      "BuzzFeed Asia",
    ],
    notes:
      "Realize+ runs ads. DeeperDive lets people ask questions inside publisher sites. HuffPost UK selected it.",
  },
  {
    id: 14,
    eyebrow: "10 · Audience behavior",
    title: "What people ask—and whether they engage",
    kind: "metrics",
    presenter: "Maryanne",
    metrics: [
      { value: "50%", label: "Recent news, entertainment, and sports" },
      { value: "Up to 17%", label: "User engagement" },
      { value: "1 in 6", label: "Visitors actively asks a question" },
    ],
    footnote:
      "Figures come from a company report scheduled for publication soon.",
    notes:
      "Half the questions cluster around news, entertainment, and sports. Flag that the figures come from a forthcoming company report.",
  },
  {
    id: 15,
    eyebrow: "11 · Survey frame",
    title: "The marketer survey behind the report",
    kind: "survey",
    presenter: "Maryanne",
    metrics: [
      { value: "200", label: "senior marketers" },
      { value: "US + UK", label: "enterprise respondents" },
      { value: "1,000+", label: "employees per company" },
    ],
    footnote: "2026 survey · A senior-enterprise cut, not all advertisers",
    notes:
      "This is the frame the article gives for the report: 200 senior marketers, large employers only, across two countries.",
  },
  {
    id: 16,
    eyebrow: "12 · Synthesis",
    title: "Five things to remember",
    kind: "takeaways",
    presenter: "Maryanne",
    items: [
      "Realize+ is the rebuilt agentic platform for open-web performance ads.",
      "Decision Engine + Budget Allocator move money; Element Generator improves ads.",
      "Phase 2 improves models; Claude Skills are the conversational front door.",
      "Budget-shift numbers are conditional intentions—not completed moves.",
      "DeeperDive is the separate publisher Answer Engine.",
    ],
    notes:
      "Keep Realize+ and DeeperDive separate, the budget and creative tools separate, and the adoption numbers conditional.",
  },
  {
    id: 17,
    eyebrow: "Discussion",
    title: "Four questions for the room",
    kind: "discussion",
    presenter: "Maryanne",
    items: [
      "Is real-time budget allocation the bottleneck—or is creative harder?",
      "Would a Claude skill change setup, or would you still want the console?",
      "If automation matched walled gardens, would you move up to a quarter of budget?",
      "Does an Answer Engine inside a news site help the advertiser, publisher—or both?",
    ],
    notes:
      "Use these questions to separate “the product exists” from “we would buy it.” The article does not provide independent performance case studies.",
  },
];

export const presenters = ["James", "Tony", "Ambrose", "Maryanne"] as const;
