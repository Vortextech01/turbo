// Remove when docs is refactored to use the new icons (see ./features.ts)

import React from "react";
import {
  ArrowsExpandIcon,
  BeakerIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChipIcon,
  CloudUploadIcon,
  FingerPrintIcon,
  LightningBoltIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { IconType } from "../components/Icons";

export type Feature = {
  name: string;
  description: React.ReactNode;
  Icon: IconType;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const LEGACY_REPO_FEATURES: Features = [
  {
    name: "Adaptive Learning",
    description: `Our AI models learn from each interaction, improving their responses and adapting to your business needs.`,
    Icon: RefreshIcon,
    page: "all",
  },
  {
    name: "Content-aware Processing",
    description: `Our AI doesn't just look at the data, it understands the context, enhancing its decision-making process.`,
    Icon: FingerPrintIcon,
    page: "home",
  },
  {
    name: "Parallel Learning",
    description: `Our AI learns from multiple data points simultaneously, increasing its efficiency and knowledge base.`,
    Icon: LightningBoltIcon,
    page: "all",
  },
  {
    name: "Cloud-Based Solutions",
    description: `Our AI solutions are cloud-based, ensuring seamless integration with your existing systems and scalability according to your needs.`,
    Icon: CloudUploadIcon,
    page: "all",
  },
  {
    name: "Zero Interference",
    description: `Our AI solutions integrate seamlessly into your existing systems without affecting their performance or operations.`,
    Icon: ChipIcon,
    page: "all",
  },
  {
    name: "Customized Solutions",
    description: `We provide tailored AI solutions, ensuring they meet your specific business needs and goals.`,
    Icon: ChartPieIcon,
    page: "all",
  },
  {
    name: "Intuitive AI",
    description: `Our AI models are designed to understand and optimize their responses based on user interactions.`,
    Icon: ArrowsExpandIcon,
    page: "all",
  },
  {
    name: "Flexible Integration",
    description: `Our AI solutions can be integrated into any system, regardless of the existing infrastructure.`,
    Icon: BeakerIcon,
    page: "home",
  },
  {
    name: `Real-time Analytics`,
    description: `Get real-time insights into your AI's performance and identify areas for improvement.`,
    Icon: ChartBarIcon,
    page: "home",
  },
];

export const LEGACY_REPO_DOCS_FEATURES = LEGACY_REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const LEGACY_REPO_HOME_FEATURES = LEGACY_REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export default LEGACY_REPO_FEATURES;
