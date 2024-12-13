import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.fatf-gafi.org/",
  match: "https://www.fatf-gafi.org/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "fatf.json",
  maxTokens: 2000000,
  selector: "body",
};
