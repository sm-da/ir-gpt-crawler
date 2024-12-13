import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.ict.gov.ir/en/home",
  match: "https://www.ict.gov.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "ict.json",
  maxTokens: 2000000,
  selector: "body",
};
