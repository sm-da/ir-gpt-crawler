import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://irangov.ir/en",
  match: "https://irangov.ir/en/**",
  maxPagesToCrawl: 999999909,
  outputFileName: "iran-gov.json",
  maxTokens: 2000000,
};
