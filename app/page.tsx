import dynamic from "next/dynamic";
import { HeroSection } from "@/components/landing/hero-section";
import { SiteHeader } from "@/components/landing/site-header";
import { siteConfig } from "@/lib/site";
import { SpatialBackground, GlobeSection, AiLabSection, AiDock, MagneticCursor } from "@/components/landing/dynamic-components";

const CaseStudiesSection = dynamic(
  () => import("@/components/landing/case-studies-section").then((mod) => mod.CaseStudiesSection),
  { loading: () => null }
);

const RevenueSimulator = dynamic(
  () => import("@/components/landing/revenue-simulator").then((mod) => mod.RevenueSimulator),
  { loading: () => null }
);

const LeadCaptureSection = dynamic(
  () => import("@/components/landing/lead-capture-section").then((mod) => mod.LeadCaptureSection),
  { loading: () => null }
);

const ProcessSection = dynamic(
  () => import("@/components/landing/process-section").then((mod) => mod.ProcessSection),
  { loading: () => null }
);

const ServicesSection = dynamic(
  () => import("@/components/landing/services-section").then((mod) => mod.ServicesSection),
  { loading: () => null }
);

const StoryFlowSection = dynamic(
  () => import("@/components/landing/story-flow-section").then((mod) => mod.StoryFlowSection),
  { loading: () => null }
);

const WhyWinboxSection = dynamic(
  () => import("@/components/landing/why-winbox-section").then((mod) => mod.WhyWinboxSection),
  { loading: () => null }
);

const TrustSection = dynamic(
  () => import("@/components/landing/trust-section").then((mod) => mod.TrustSection),
  { loading: () => null }
);

const AiDemo = dynamic(
  () => import("@/components/landing/ai-demo").then((mod) => mod.AiDemo),
  { loading: () => null }
);

const SiteFooter = dynamic(
  () => import("@/components/landing/site-footer").then((mod) => mod.SiteFooter),
  { loading: () => null }
);

const PulseBorder = dynamic(
  () => import("@/components/landing/nervous-system").then((mod) => mod.PulseBorder),
  { loading: () => null }
);

const EvidenceSection = dynamic(
  () => import("@/components/landing/evidence-section").then((mod) => mod.EvidenceSection),
  { loading: () => null }
);

const WhoWeBuildForSection = dynamic(
  () => import("@/components/landing/who-we-build-for-section").then((mod) => mod.WhoWeBuildForSection),
  { loading: () => null }
);

const MarketingIntelligenceSection = dynamic(
  () => import("@/components/landing/marketing-intelligence-section").then((mod) => mod.MarketingIntelligenceSection),
  { loading: () => null }
);

const AgencyShowcaseSection = dynamic(
  () => import("@/components/landing/agency-showcase-section").then((mod) => mod.AgencyShowcaseSection),
  { loading: () => null }
);

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

      <div className="relative z-10 flex flex-col gap-y-12 pb-40 sm:gap-y-20 md:gap-y-32">
        <SiteHeader />

        <main className="flex flex-col gap-y-24 md:gap-y-40">
          <HeroSection />
          <AiLabSection />
          <ServicesSection />

          <div className="flex flex-col gap-y-24">
            <AgencyShowcaseSection />
            <PulseBorder id="case-studies">
              <CaseStudiesSection />
            </PulseBorder>
            <WhoWeBuildForSection />
          </div>

          <div className="flex flex-col gap-y-24">
            <MarketingIntelligenceSection />
            <PulseBorder id="simulator">
              <RevenueSimulator />
            </PulseBorder>
          </div>

          <div className="flex flex-col gap-y-24">
            <StoryFlowSection />
            <ProcessSection />
          </div>

          <EvidenceSection />

          <div className="flex flex-col gap-y-24">
            <GlobeSection />
            <TrustSection />
          </div>

          <AiDemo />

          <div className="flex flex-col gap-y-24">
            <WhyWinboxSection />
            <LeadCaptureSection />
          </div>
        </main>

        <SiteFooter />
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
