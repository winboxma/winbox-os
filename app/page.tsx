// Removed next/dynamic as it's handled in dynamic-components
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { HeroSection } from "@/components/landing/hero-section";
import { RevenueSimulator } from "@/components/landing/revenue-simulator";
import { LeadCaptureSection } from "@/components/landing/lead-capture-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { StoryFlowSection } from "@/components/landing/story-flow-section";
import { WhyWinboxSection } from "@/components/landing/why-winbox-section";
import { TrustSection } from "@/components/landing/trust-section";
import { AiDemo } from "@/components/landing/ai-demo";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { PulseBorder } from "@/components/landing/nervous-system";
import { EvidenceSection } from "@/components/landing/evidence-section";
import { WhoWeBuildForSection } from "@/components/landing/who-we-build-for-section";
import { MagneticCursor } from "@/components/landing/magnetic-cursor";
import { MarketingIntelligenceSection } from "@/components/landing/marketing-intelligence-section";
import { AgencyShowcaseSection } from "@/components/landing/agency-showcase-section";
import { siteConfig } from "@/lib/site";

// Lazy load WebGL and Heavy Interactive components to prevent hydration errors and boost performance
import { SpatialBackground, GlobeSection, AiLabSection, AiDock } from "@/components/landing/dynamic-components";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: ["Morocco", "West Africa", "International"],
  founder: { "@type": "Person", name: "Yassine Raha" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat / Sale",
    addressCountry: "MA",
  },
  sameAs: [siteConfig.whatsappLink],
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <SpatialBackground />

      <div className="relative z-10 flex flex-col gap-y-12 sm:gap-y-20 md:gap-y-32 pb-40">
        <SiteHeader />

        <main className="flex flex-col gap-y-24 md:gap-y-40">
          {/* 1. HERO */}
          <HeroSection />

          {/* 2. AI LAB (WINBOX AI Core) */}
          <AiLabSection />

          {/* 3. SYSTEM MODULES */}
          <ServicesSection />

          {/* 4. REAL BUSINESS RESULTS */}
          <div className="flex flex-col gap-y-24">
            <AgencyShowcaseSection />
            <PulseBorder id="case-studies">
              <CaseStudiesSection />
            </PulseBorder>
            <WhoWeBuildForSection />
          </div>

          {/* 5. MARKETING INTELLIGENCE */}
          <div className="flex flex-col gap-y-24">
            <MarketingIntelligenceSection />
            <PulseBorder id="simulator">
              <RevenueSimulator />
            </PulseBorder>
          </div>

          {/* 6. GROWTH PROTOCOL */}
          <div className="flex flex-col gap-y-24">
            <StoryFlowSection />
            <ProcessSection />
          </div>

          {/* 7. EVIDENCE */}
          <EvidenceSection />

          {/* 8. GLOBAL TRUST */}
          <div className="flex flex-col gap-y-24">
            <GlobeSection />
            <TrustSection />
          </div>

          {/* 9. CONVERSATIONAL AI */}
          <AiDemo />

          {/* 10. FINAL CTA */}
          <div className="flex flex-col gap-y-24">
            <WhyWinboxSection />
            <LeadCaptureSection />
          </div>
        </main>

        <SiteFooter />

        {/* Floating UI layer */}
        <AiDock />
        <MagneticCursor />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
