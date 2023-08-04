import type Image from "next/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/ecosystem-dark.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/bars-dark.svg";
import BarsIconLight from "../public/images/docs/shared/feature-icons/bars-light.svg";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/multi-env-targets-dark.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/nextjs-dark.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/nextjs-light.svg";
import ServerComponentsIconDark from "../public/images/docs/shared/feature-icons/server-components-dark.svg";
import ServerComponentsIconLight from "../public/images/docs/shared/feature-icons/server-components-light.svg";
import FingerprintIconDark from "../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import CloudIconDark from "../public/images/docs/shared/feature-icons/cloud-dark.svg";
import CloudIconLight from "../public/images/docs/shared/feature-icons/cloud-light.svg";
import CpuIconDark from "../public/images/docs/shared/feature-icons/cpu-dark.svg";
import CpuIconLight from "../public/images/docs/shared/feature-icons/cpu-light.svg";
import PieconDark from "../public/images/docs/shared/feature-icons/piecon-dark.svg";
import PieconLight from "../public/images/docs/shared/feature-icons/piecon-light.svg";
import RefreshIconDark from "../public/images/docs/shared/feature-icons/refresh-dark.svg";
import RefreshIconLight from "../public/images/docs/shared/feature-icons/refresh-light.svg";
import ArrowsExpandIconDark from "../public/images/docs/shared/feature-icons/arrows-expand-dark.svg";
import ArrowsExpandIconLight from "../public/images/docs/shared/feature-icons/arrows-expand-light.svg";
import BeakerIconDark from "../public/images/docs/shared/feature-icons/beaker-dark.svg";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/beaker-light.svg";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const REPO_FEATURES: Features = [
  {
    name: "Streamlined Interactions",
    description: `Sapiens IA Laboratories has developed AI solutions that remember past interactions, improving efficiency and providing a seamless user experience.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "Intelligent Content Analysis",
    description: `Our AI solutions analyze the contents of your data, not just surface-level information, to provide comprehensive insights.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Parallel Processing",
    description: `Our AI models are capable of processing multiple tasks simultaneously, maximizing efficiency and reducing idle time.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Cloud-Based Solutions",
    description: `We offer cloud-based AI solutions, allowing for seamless integration and collaboration across teams and systems.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "Optimized Performance",
    description: `Our AI solutions are designed to offer high performance without compromising system resources.`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "Customized Solutions",
    description: `We offer custom AI solutions tailored to your specific needs and objectives.`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "Streamlined Workflows",
    description: `Our AI solutions are designed to enhance your workflows, automating tasks and optimizing processes.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "Flexible Integration",
    description: `Our AI solutions can integrate seamlessly with your existing systems and workflows.`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconLight,
    page: "home",
  },
  {
    name: "In-depth Data Analytics",
    description: `Our AI solutions provide comprehensive data analysis, helping you understand trends and make informed decisions.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "home",
  },
];

const PACK_FEATURES: Features = [
  {
    name: "Efficient Design",
    description: `Our AI solutions are designed for efficiency, minimizing redundant tasks.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "all",
  },
  {
    name: "Ecosystem Friendly",
    description: `Our AI solutions are designed to integrate seamlessly with your existing technological ecosystem.`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Fast Learning Algorithms",
    description: `Our AI models are equipped with fast learning algorithms, allowing for quick adaptation to new data and situations.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Advanced Server Solutions",
    description: `We offer advanced server solutions for complex AI needs.`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "Multi-Environment Solutions",
    description: `Our AI solutions are designed to work efficiently in diverse environments.`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconLight,
    page: "all",
  },
  {
    name: "Next-Gen AI Support",
    description: `We are committed to staying at the forefront of AI technology, providing next-gen AI support.`,
    iconDark: NextJSIconDark,
    iconLight: NextJSIconLight,
    page: "all",
  },
];
export const REPO_DOCS_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const REPO_HOME_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const PACK_HOME_FEATURES = PACK_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);
