"use client";

import dynamic from "next/dynamic";

export const SpatialBackground = dynamic(() => import("@/components/landing/spatial-background").then(mod => mod.SpatialBackground), { ssr: false });
export const GlobeSection = dynamic(() => import("@/components/landing/globe-section").then(mod => mod.GlobeSection), { ssr: false });
export const AiLabSection = dynamic(() => import("@/components/landing/ai-lab-section").then(mod => mod.AiLabSection), { ssr: false });
export const AiDock = dynamic(() => import("@/components/landing/ai-dock").then(mod => mod.AiDock), { ssr: false });
