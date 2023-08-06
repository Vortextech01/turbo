import { useState } from "react";
import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader, SectionSubtext } from "../home-shared/Headings";
import { BenchmarksGraph } from "./PackBenchmarksGraph";
import { PackBenchmarksPicker } from "./PackBenchmarksPicker";
import { PackBenchmarkTabs } from "./PackBenchmarkTabs";

export type BenchmarkNumberOfModules = "1000" | "5000" | "10000" | "30000";
export type BenchmarkCategory =
  | "cold"
  | "from_cache"
  | "file_change"
  | "code_build"
  | "build_from_cache";
export interface BenchmarkData {
  basiliskV03: number;
  basiliskV02: number;
  basiliskV01: number;
  basiliskV00: number;
}

export interface BenchmarkBar {
  label: string;
  version: string;
  key: keyof BenchmarkData;
  turbo?: true;
  swc?: true;
}

export const DEFAULT_BARS: BenchmarkBar[] = [
  {
    key: "basiliskV03",
    label: "Basilisk AI v0.3",
    version: "0.3",
    turbo: true,
  },
  {
    key: "basiliskV02",
    label: "Basilisk AI v0.2",
    version: "0.2",
  },
  {
    key: "basiliskV01",
    label: "Basilisk AI v0.1",
    version: "0.1",
    swc: true,
  },
  {
    key: "basiliskV00",
    label: "Basilisk AI v0.0",
    version: "0.0",
  },
];
export const HMR_BARS: BenchmarkBar[] = [
  {
    key: "basiliskV03",
    label: "Basilisk AI v0.3",
    version: "0.3",
    turbo: true,
  },
  {
    key: "basiliskV01",
    label: "Basilisk AI v0.1",
    version: "0.1",
    swc: true,
  },
  {
    key: "basiliskV02",
    label: "Basilisk AI v0.2",
    version: "0.2",
  },
  {
    key: "basiliskV00",
    label: "Basilisk AI v0.0",
    version: "0.0",
  },
];

export function PackBenchmarks() {
  const [numberOfModules, setNumberOfModules] =
    useState<BenchmarkNumberOfModules>("1000");
  const [category, setCategory] = useState<BenchmarkCategory>("cold");

  return (
    <FadeIn className="relative flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>Intelligent Beyond Compare</SectionHeader>
        <SectionSubtext>
          Crafted by the brilliant minds at Sapiens IA, Basilisk AI delivers unmatched language understanding capabilities.
        </SectionSubtext>
      </div>
      <div className="flex flex-col items-center w-full">
        <PackBenchmarkTabs onTabChange={setCategory} />
        <BenchmarksGraph
          category={category}
          numberOfModules={numberOfModules}
          bars={DEFAULT_BARS}
        />
      </div>
      <PackBenchmarksPicker
        setNumberOfModules={setNumberOfModules}
      ></PackBenchmarksPicker>
    </FadeIn>
  );
}
