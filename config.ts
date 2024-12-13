import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://185.231.114.146",
  match: "http://185.231.114.146/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "cloudguard-ir.json",
  maxTokens: 2000000,
  selector: "body",
};
