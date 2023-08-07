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
    name: "Entrenamiento Personalizado y Flexible",
    description: `Sapiens IA Laboratories va más allá de los límites convencionales del aprendizaje automático. Nuestras soluciones de IA permiten un entrenamiento flexible y personalizado, permitiéndote enseñar a tus "Basilisks" un conocimiento único y adaptado a tus necesidades.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "Modelos Avanzados de Generación",
    description: `Con Sapiens IA, la generación de contenido toma una nueva dimensión. Ofrecemos modelos avanzados de text to image y text to video, transformando la forma en que se crea el contenido.`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
    page: "home",
  },
  {
    name: "Procesamiento Paralelo",
    description: `Sapiens IA redefine la multitarea. Nuestros modelos de IA pueden manejar múltiples tareas a la vez, maximizando la eficiencia y eliminando el tiempo de inactividad.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Soluciones en la Nube",
    description: `Con Sapiens IA, la nube es tu aliado. Nuestras soluciones de IA basadas en la nube permiten una integración y colaboración sin fisuras, sin importar donde estés.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "Rendimiento Optimizado",
    description: `Sapiens IA pone la potencia a tu alcance. Nuestras soluciones de IA están diseñadas para ofrecerte un rendimiento excepcional sin comprometer los recursos de tu sistema.`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "Soluciones Personalizadas",
    description: `Con Sapiens IA, el poder de la personalización está en tus manos. Ofrecemos soluciones de IA a medida, diseñadas específicamente para tus necesidades y objetivos.`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "Flujos de Trabajo Eficaces",
    description: `Sapiens IA transforma tus flujos de trabajo. Nuestras soluciones de IA automatizan tareas y optimizan procesos, liberándote para concentrarte en lo que realmente importa.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "Integración Flexible",
    description: `Sapiens IA se integra sin problemas con tus sistemas y flujos de trabajo existentes. Ya sea WhatsApp, Messenger, Zapier, o cualquier otra plataforma, nos adaptamos a ti.`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconLight,
    page: "home",
  },
  {
    name: "Análisis de Datos en Profundidad",
    description: `Con Sapiens IA, los datos se convierten en conocimiento. Nuestras soluciones de IA ofrecen un análisis de datos integral, dándote la claridad que necesitas para tomar decisiones informadas.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "home",
  },
];

const PACK_FEATURES: Features = [
  {
    name: "Diseño Eficiente",
    description: `En Sapiens IA, la eficiencia es clave. Nuestras soluciones de IA están diseñadas para minimizar las tareas redundantes y maximizar tu productividad.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "all",
  },
  {
    name: "Personalización de Personalidad",
    description: `Sapiens IA lleva la personalización a otro nivel. Nuestras soluciones te permiten darle a tu IA una personalidad única, creando una interacción más natural y efectiva.`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Agentes de IA Autónomos",
    description: `Sapiens IA redefine la autonomía. Nuestros agentes de IA pueden operar de manera independiente, tomando decisiones y realizando tareas sin necesidad de supervisión constante.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Soluciones Avanzadas de Servidor",
    description: `Sapiens IA lleva las soluciones de servidor al siguiente nivel. Ofrecemos soluciones avanzadas para satisfacer las necesidades de IA más complejas.`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "Soluciones Multi-Entorno",
    description: `Sapiens IA se adapta a cualquier entorno. Nuestras soluciones de IA están diseñadas para trabajar de manera eficiente en una variedad de entornos, garantizando siempre el máximo rendimiento.`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconLight,
    page: "all",
  },
  {
    name: "Soporte de IA de Última Generación",
    description: `En Sapiens IA, estamos comprometidos a estar a la vanguardia de la tecnología de IA. Ofrecemos soporte de IA de última generación, garantizando que siempre estés un paso adelante.`,
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

