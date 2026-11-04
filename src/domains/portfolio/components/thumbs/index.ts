import type { ComponentType } from "react";

import SpectraThumb from "./SpectraThumb";
import A2UIVerseThumb from "./A2UIVerseThumb";
import A2UIGitHubThumb from "./A2UIGitHubThumb";
import A2UIProtocolThumb from "./A2UIProtocolThumb";
import KisaDesignSystemThumb from "./KisaDesignSystemThumb";
import JobsCuratorThumb from "./JobsCuratorThumb";
import PochaThumb from "./PochaThumb";
import UMichKisaThumb from "./UMichKisaThumb";
import PasticheThumb from "./PasticheThumb";

// Each project card's diagram, by the card's id in data/projectData.ts.
export const thumbs: Record<string, ComponentType> = {
  spectra: SpectraThumb,
  a2uiverse: A2UIVerseThumb,
  "a2ui-github": A2UIGitHubThumb,
  "a2ui-protocol": A2UIProtocolThumb,
  "kisa-design-system": KisaDesignSystemThumb,
  "jobs-curator": JobsCuratorThumb,
  pocha: PochaThumb,
  umichkisa: UMichKisaThumb,
  pastiche: PasticheThumb,
};
