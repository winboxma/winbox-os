import { SpatialBackground } from "@/components/landing/spatial-background";
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
import { AiCopilot } from "@/components/landing/ai-copilot";
import { EvidenceSection } from "@/components/landing/evidence-section";
import { GlobeSection } from "@/components/landing/globe-section";
import { WhoWeBuildForSection } from "@/components/landing/who-we-build-for-section";
import { MagneticCursor } from "@/components/landing/magnetic-cursor";
import { MarketingIntelligenceSection } from "@/components/landing/marketing-intelligence-section";
import { AgencyShowcaseSection } from "@/components/landing/agency-showcase-section";
import { siteConfig } from "@/lib/site";

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

      <div className="relative z-10">
        <SiteHeader />

        <main>
          {/* 1. Hero — cinematic entry with 4 floating modules */}
          <HeroSection />

          {/* 2. Services — 6 growth engines with SVG illustrations */}
          <ServicesSection />

          {/* 3. Agency Showcase — real photos showing actual agency work */}
          <AgencyShowcaseSection />

          {/* 4. Marketing Intelligence — WhatsApp sim, campaign KPIs, flow */}
          <MarketingIntelligenceSection />

          {/* 5. Who We Build For — 10 industry grid */}
          <WhoWeBuildForSection />

          {/* 6. Story Flow — 4-step method, cinematic scroll + data visuals */}
          <StoryFlowSection />

          {/* 7. Evidence of Intelligence — live campaign dashboard */}
          <EvidenceSection />

          {/* 8. Revenue Simulator */}
          <PulseBorder id="simulator">
            <RevenueSimulator />
          </PulseBorder>

          {/* 9. Why WINBOX — positioning + growth funnel */}
          <WhyWinboxSection />

          {/* 10. Process — 5-step system */}
          <ProcessSection />

          {/* 11. Case Studies — 6 industry proof panels */}
          <PulseBorder id="case-studies">
            <CaseStudiesSection />
          </PulseBorder>

          {/* 12. Global Globe — WebGL reach visualization */}
          <GlobeSection />

          {/* 13. Trust — industry marquee, testimonials, logos */}
          <TrustSection />

          {/* 14. AI Demo — WhatsApp automation demo */}
          <AiDemo />

          {/* 15. Lead Capture — premium contact form */}
          <LeadCaptureSection />
        </main>

        <SiteFooter />

        {/* Floating UI layer */}
        <AiCopilot />
        <MagneticCursor />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
