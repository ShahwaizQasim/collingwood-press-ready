import coverOne from "@/assets/cover-1.jpg";
import coverThree from "@/assets/cover-3.jpg";
import coverTwo from "@/assets/cover-2.jpg";

export const navLinks = [
  { label: "Services", href: "#readiness" },
  { label: "Covers", href: "#spotlight" },
  { label: "Our Team", href: "#team" },
  { label: "Our Books", href: "#showcase" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const platforms = ["Gardners", "Goodreads", "Google Books", "hoopla"];

export const testimonials = [
  {
    quote:
      "I spent eleven years on this manuscript. Collingwood Press was the first team that treated it like it mattered as much to them as it did to me.",
    name: "Margaret Ellison",
    title: "Author, The Weight of Absence",
    tone: "butter" as const,
  },
  {
    quote:
      "No inflated promises, no disappearing account manager. I had one project manager, one schedule, and a book on Gardners inside four months.",
    name: "Robert Hale",
    title: "Author, A Brighter Exile",
    tone: "mint" as const,
  },
  {
    quote:
      "The cover was the moment it became real. They read the whole book before they drew a single line — you can tell.",
    name: "Claire Whitfield",
    title: "Author, How The River Remembers",
    tone: "blush" as const,
  },
  {
    quote:
      "I'd been quoted twice as much for half as much. Everything was written down before I paid a penny, and everything arrived when they said it would.",
    name: "Daniel Kell",
    title: "Author, The Last Library",
    tone: "sky" as const,
  },
];

export const extraReviews = [
  {
    quote:
      "They pushed back on my title. They were right. That's the difference between a printer and a publisher.",
    name: "Elise Monroe",
    title: "Author, The Silent Kingdom",
  },
  {
    quote:
      "The interior layout is the part nobody warns you about. Mine came back looking like a book from a shop shelf.",
    name: "Priya Raman",
    title: "Author, Salt and Season",
  },
  {
    quote:
      "Two years later they still answer my emails about royalties and reprints. I didn't expect that.",
    name: "Thomas Byrne",
    title: "Author, The Quiet Ledger",
  },
];

export const readinessCards = [
  {
    tone: "mint" as const,
    tag: "Editing",
    title: "The Manuscript Edit",
    body: "Developmental notes, line editing and a final proofread by editors who work in your genre — not a spellcheck pass with an invoice attached.",
  },
  {
    tone: "sky" as const,
    tag: "Design",
    title: "The Cover That Sells",
    body: "Original cover artwork and typography built from your actual manuscript, delivered in every format a retailer or printer will ask for.",
  },
  {
    tone: "butter" as const,
    tag: "Interiors",
    title: "Typeset Like A Book",
    body: "Print-ready interior layout with proper margins, running heads and chapter openers, plus a clean reflowable ebook build.",
  },
  {
    tone: "blush" as const,
    tag: "Reach",
    title: "Distribution & Marketing",
    body: "ISBN registration, metadata, retail listings and launch support so readers can actually find the book once it exists.",
  },
];

export const team = [
  {
    name: "Daniel Draper",
    role: "Senior Project Manager",
    initials: "DD",
    tone: "sky" as const,
    bio: "Fifteen years shepherding literary fiction and memoir from raw draft to retail. Daniel runs schedules that authors can actually plan a life around.",
  },
  {
    name: "Jay Davis",
    role: "Project Manager, Design",
    initials: "JD",
    tone: "butter" as const,
    bio: "Jay sits between authors and the design studio, translating 'something like this, but not quite' into covers that hold up in a bookshop window.",
  },
  {
    name: "Alex Brown",
    role: "Project Manager, Distribution",
    initials: "AB",
    tone: "mint" as const,
    bio: "Metadata, ISBNs, retailer feeds and print specs. Alex handles the unglamorous machinery that decides whether a book is findable.",
  },
];

export const books = [
  {
    title: "The Silent Kingdom",
    author: "Elise Monroe",
    genre: "Literary Fiction",
    blurb:
      "A deposed cartographer returns to a country that has quietly erased him from its maps.",
    cover: coverOne,
  },
  {
    title: "How The River Remembers",
    author: "Claire Whitfield",
    genre: "Memoir",
    blurb:
      "Three generations of a fishing family, told through the water that outlasted all of them.",
    cover: coverTwo,
  },
  {
    title: "The Weight of Absence",
    author: "Margaret Ellison",
    genre: "Historical Fantasy",
    blurb:
      "A gatekeeper's daughter inherits a doorway she was never meant to open.",
    cover: coverThree,
  },
];

export const faqs = [
  {
    q: "What does Collingwood Press actually do with my manuscript?",
    a: "We take a finished manuscript and prepare it for publication: editing, cover design, interior typesetting, ebook conversion, ISBN and metadata registration, print setup and retail distribution. You keep your rights and your royalties throughout — we are a service publisher, not a rights buyer.",
  },
  {
    q: "How much does publishing with you cost?",
    a: "It depends on word count, genre and which services you need. We quote in writing, per project, before any work begins, and the quote does not move unless you ask us to add something. There are no monthly fees and no percentage taken from your royalties.",
  },
  {
    q: "Do I keep the rights to my book?",
    a: "Yes. You retain full copyright and one hundred percent of your rights. Every cover, interior file and print-ready asset we produce is handed over to you, and you can take them elsewhere at any time.",
  },
  {
    q: "How long does the whole process take?",
    a: "A typical full-service project runs three to six months from manuscript hand-off to retail availability. Editing is the longest stage. Your project manager gives you a dated schedule at the start and tells you immediately if anything moves.",
  },
  {
    q: "Where will my book be available to buy?",
    a: "We distribute through the major wholesale and retail channels, including Gardners for UK and international bookshop ordering, plus the main online retailers, library platforms such as hoopla, and discovery listings on Goodreads and Google Books.",
  },
  {
    q: "Can you help if my book is already published?",
    a: "Often, yes. We regularly re-cover, re-typeset and re-launch books that were rushed the first time around, or move an existing title onto stronger distribution. Send us what you have and we'll tell you honestly whether it's worth redoing.",
  },
  {
    q: "What if my manuscript isn't finished yet?",
    a: "Talk to us anyway. We can advise on structure and scope before you spend another year on a draft, and we'll tell you plainly if the book isn't ready for the money a full production run costs.",
  },
];
