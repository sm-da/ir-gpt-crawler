import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://cloudguard.ir/",
  match: "https://cloudguard.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "cloudguard-ir.json",
  maxTokens: 2000000,
  selector: "body",
};
