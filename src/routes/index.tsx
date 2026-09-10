import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Promises } from "@/components/site/Promises";
import { Readiness } from "@/components/site/Readiness";
import { Reviews } from "@/components/site/Reviews";
import { Showcase } from "@/components/site/Showcase";
import { Spotlight } from "@/components/site/Spotlight";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Collingwood Press | Get Your Book Shelf-Ready" },
      {
        name: "description",
        content:
          "You wrote the book. Collingwood Press handles editing, cover design, typesetting and distribution so your manuscript arrives shelf-ready.",
      },
      { property: "og:title", content: "Collingwood Press | Get Your Book Shelf-Ready" },
      {
        property: "og:description",
        content:
          "Independent publishing services: editing, cover design, typesetting, ISBN, distribution and launch support for authors.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Promises />
        <Readiness />
        <Spotlight />
        <Team />
        <Showcase />
        <Reviews />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
