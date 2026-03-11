export const siteConfig = {
  name: "WINBOX",
  title: "WINBOX AI LAB — AI-Powered Digital Marketing Agency",
  description:
    "WINBOX builds intelligent growth systems powered by AI to help ambitious businesses generate leads, convert customers, and automate operations.",
  url: "https://www.winbox.ma",
  locale: "en_US",
  phone: "+212 6 69 69 49 45",
  email: "contact@winbox.ma",
  founder: "Yassine Raha",
  location: "Rabat / Sale - Morocco",
  whatsappLink: "https://wa.me/212669694945"
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#systems", label: "AI Systems" },
  { href: "#cases", label: "Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" }
] as const;

export const markets = ["Morocco", "West Africa", "International"] as const;

export const trustLine = "AI-powered growth systems for brands in Morocco and beyond.";

export const targetClients = [
  "Entrepreneurs",
  "SMEs",
  "Luxury brands",
  "Travel agencies",
  "Real estate agencies",
  "Clinics & Aesthetic Centers",
  "E-commerce brands",
  "Automotive Dealers",
  "Hospitality & Restaurants",
  "Educational Institutions"
] as const;

export const whoWeServe = [
  { label: "Startups & Scale-ups", icon: "rocket", desc: "From zero to traction fast" },
  { label: "Clinics & Aesthetics", icon: "heart-pulse", desc: "Patient acquisition systems" },
  { label: "Real Estate Agencies", icon: "building-2", desc: "High-intent lead funnels" },
  { label: "Ecommerce Brands", icon: "shopping-bag", desc: "ROAS-driven growth engines" },
  { label: "Hospitality & Hotels", icon: "hotel", desc: "Booking automation & SEO" },
  { label: "Automotive Dealers", icon: "car", desc: "Showroom lead generation" },
  { label: "Education & Training", icon: "graduation-cap", desc: "Enrollment funnels" },
  { label: "Premium Restaurants", icon: "utensils", desc: "Reservation & loyalty systems" },
  { label: "Personal Brands", icon: "user-check", desc: "Authority & audience growth" },
  { label: "Corporate Events", icon: "calendar-check", desc: "Ticketing & lead capture" }
] as const;

export const growthOsNodes = [
  {
    id: "traffic",
    label: "Traffic Intelligence",
    description: "Paid and organic traffic channels calibrated to high-intent segments.",
    x: 10,
    y: 20
  },
  {
    id: "creatives",
    label: "Creative Intelligence",
    description: "AI-assisted creative production loops for ads, hooks, and messaging.",
    x: 34,
    y: 12
  },
  {
    id: "landing-pages",
    label: "Conversion Interfaces",
    description: "High-conversion page systems optimized for clarity, speed, and trust.",
    x: 53,
    y: 48
  },
  {
    id: "crm",
    label: "Lead Routing",
    description: "Lead routing, segmentation, and automated follow-up logic.",
    x: 75,
    y: 18
  },
  {
    id: "whatsapp-ai",
    label: "WhatsApp AI Agents",
    description: "Instant qualification and response automation for inbound demand.",
    x: 86,
    y: 62
  },
  {
    id: "analytics",
    label: "Analytics & Intelligence",
    description: "Unified dashboards tracking CAC, ROAS, pipeline velocity, and bookings.",
    x: 28,
    y: 70
  }
] as const;

export const smartEngines = [
  {
    title: "AI Lead Engine",
    tag: "Acquisition",
    bullets: ["Lead funnels", "WhatsApp automation", "Lead qualification"]
  },
  {
    title: "Performance Acquisition Engine",
    tag: "Paid Media",
    bullets: ["Meta Ads", "Google Ads", "Retargeting"]
  },
  {
    title: "Premium Website Engine",
    tag: "Conversion",
    bullets: ["High-conversion websites", "Landing pages", "Ecommerce stores"]
  },
  {
    title: "Brand Identity Engine",
    tag: "Brand",
    bullets: ["Visual identity", "Creative strategy", "Premium branding"]
  },
  {
    title: "AI Content Engine",
    tag: "Creative",
    bullets: ["AI visuals", "AI videos", "Ad creatives"]
  },
  {
    title: "Automation Engine",
    tag: "Operations",
    bullets: ["CRM automation", "Follow-ups", "Appointment systems"]
  }
] as const;

export const proofPillars = [
  {
    id: "strategic-uplift",
    title: "Strategic Uplift",
    metric: "+320%",
    metricNum: 320,
    metricSuffix: "%",
    metricPrefix: "+",
    label: "Qualified Lead Growth",
    caption: "Across travel, real estate, and clinic campaigns in Morocco",
    tagline: "Higher funnel efficiency",
    color: "#2563EB",
    colorClass: "text-ai-blue",
    bgClass: "bg-ai-blue/8",
    result: "Brands 3× their inbound pipeline within 90 days.",
    bars: [40, 55, 72, 88, 100, 95, 110, 132, 150, 168]
  },
  {
    id: "conversion-delta",
    title: "Conversion Delta",
    metric: "-28%",
    metricNum: 28,
    metricSuffix: "%",
    metricPrefix: "-",
    label: "Acquisition Cost Reduction",
    caption: "Through systematic creative testing and funnel optimization",
    tagline: "More revenue, less spend",
    color: "#10B981",
    colorClass: "text-emerald-signal",
    bgClass: "bg-emerald-signal/8",
    result: "Sustainable growth loops delivering consistent ROAS.",
    bars: [120, 108, 95, 88, 80, 76, 72, 68, 65, 62]
  },
  {
    id: "automation-impact",
    title: "Automation Impact",
    metric: "3×",
    metricNum: 3,
    metricSuffix: "×",
    metricPrefix: "",
    label: "Faster Response Handling",
    caption: "WhatsApp AI agents qualifying leads 24/7 automatically",
    tagline: "Zero missed opportunities",
    color: "#8B5CF6",
    colorClass: "text-vision-violet",
    bgClass: "bg-vision-violet/8",
    result: "24/7 AI qualification with auto-booking and CRM sync.",
    bars: [30, 45, 60, 90, 120, 140, 160, 180, 200, 220]
  }
] as const;

export const visualShowcase = [
  {
    title: "Executive Strategy Sessions",
    image: "/images/team-strategy.jpg",
    description: "Business teams aligning growth priorities with WINBOX system architects."
  },
  {
    title: "Performance Dashboard Control",
    image: "/images/dashboard-workspace.jpg",
    description: "Real-time media and conversion data used for weekly optimization loops."
  },
  {
    title: "WhatsApp Automation Flows",
    image: "/images/phone-automation.jpg",
    description: "Mobile-first automation experiences for lead qualification and booking."
  }
] as const;

export const caseStudies = [
  {
    id: "travel",
    title: "Travel Agency",
    sector: "Tourism & Travel",
    badge: "Acquisition System",
    visual: "/images/travel-agency.jpg",
    problem: "High ad spend with inconsistent lead quality and manual WhatsApp handling.",
    systemBuilt: "AI-driven destination funnels with automated WhatsApp qualification and CRM routing.",
    metrics: ["+320% qualified leads", "-34% cost per acquisition", "+41% booking conversion"],
    kpi: { value: 320, suffix: "%", label: "Lead Growth", prefix: "+" }
  },
  {
    id: "perfume",
    title: "Perfume Ecommerce",
    sector: "Beauty & Retail",
    badge: "ROAS Engine",
    visual: "/images/ecommerce-brand.jpg",
    problem: "Low store conversion and unstable return on ad spend with high cart abandonment.",
    systemBuilt: "Ecommerce conversion system with creative testing, AI upselling, and dynamic retargeting.",
    metrics: ["+4.1x ROAS", "+63% conversion rate", "-29% acquisition cost"],
    kpi: { value: 4.1, suffix: "×", label: "ROAS Increase", prefix: "+" }
  },
  {
    id: "clinic",
    title: "Medical Clinic",
    sector: "Healthcare",
    badge: "Appointment System",
    visual: "/images/medical-clinic.jpg",
    problem: "Manual follow-up created appointment drop-off and missed after-hours inquiries.",
    systemBuilt: "Full automation pipeline: ads → WhatsApp AI → CRM scheduling → SMS reminders.",
    metrics: ["+190% booked appointments", "-52% lead response time", "+37% booking rate"],
    kpi: { value: 190, suffix: "%", label: "Appointment Growth", prefix: "+" }
  },
  {
    id: "realestate",
    title: "Real Estate Agency",
    sector: "Real Estate",
    badge: "Lead Funnel",
    visual: "/images/real-estate.jpg",
    problem: "High-traffic website generating low-quality leads with long qualification cycles.",
    systemBuilt: "Premium landing pages with AI qualification bots and automated investor nurture sequences.",
    metrics: ["+280% qualified inquiries", "-41% time-to-contact", "2.8x more site visits converted"],
    kpi: { value: 280, suffix: "%", label: "Qualified Inquiries", prefix: "+" }
  },
  {
    id: "automotive",
    title: "Automotive Dealer",
    sector: "Automotive",
    badge: "Showroom System",
    visual: "/images/automotive.jpg",
    problem: "Showroom visits declining due to lack of digital presence and online lead capture.",
    systemBuilt: "Performance ad campaigns, virtual showroom experience, and AI appointment booking system.",
    metrics: ["+145% test drive bookings", "+3.2x ad ROAS", "-38% cost per showroom visit"],
    kpi: { value: 145, suffix: "%", label: "Test Drive Bookings", prefix: "+" }
  },
  {
    id: "hospitality",
    title: "Hospitality Group",
    sector: "Hotels & Dining",
    badge: "Booking Engine",
    visual: "/images/hospitality.jpg",
    problem: "Dependence on OTA platforms eating into margins with no direct booking infrastructure.",
    systemBuilt: "Direct booking system with retargeting, WhatsApp reservation AI, and loyalty automation.",
    metrics: ["+220% direct reservations", "-45% OTA commission spend", "+58% repeat guests"],
    kpi: { value: 220, suffix: "%", label: "Direct Reservations", prefix: "+" }
  }
] as const;

export const processSteps = [
  { step: "1", title: "Discovery", detail: "Business audit, goals, market baseline, and competitor analysis." },
  { step: "2", title: "Strategy", detail: "Offer positioning, channel plan, funnel architecture, and KPI framework." },
  { step: "3", title: "Design", detail: "Premium creative assets, web funnels, brand identity, and conversion UX." },
  { step: "4", title: "Automation", detail: "AI agents, WhatsApp bots, CRM workflows, and appointment systems." },
  { step: "5", title: "Growth", detail: "Weekly data-driven optimization to scale profitable growth loops." }
] as const;

export const trustStats = [
  { label: "Campaigns Delivered", value: "50+" },
  { label: "Industries Served", value: "10+" },
  { label: "Client Satisfaction", value: "5.0★" },
  { label: "Markets", value: "Global" }
] as const;

export const trustBadges = [
  "Performance Growth Partner",
  "AI Automation Studio",
  "Conversion UX Experts",
  "Premium Brand Systems",
  "WhatsApp AI Specialists",
  "Meta Ads Certified"
] as const;

export const industries = [
  "Real Estate", "Medical Clinics", "Travel & Tourism", "Ecommerce",
  "Automotive", "Hospitality", "Education", "Beauty & Cosmetics",
  "Restaurants & Cafes", "Corporate Events", "Legal & Consulting", "Personal Brands"
] as const;

export const clientLogos = [
  "Atlas Travel",
  "Maison d'Or",
  "Sahara Realty",
  "Nova Clinic",
  "Medina Luxe",
  "Riad Collection",
  "Velvet Perfume",
  "Urban Hospitality",
  "Elite Auto",
  "Prestige Academy",
  "Côté Jardin",
  "Bloom Aesthetics"
] as const;
