import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.maj.ir/",
  match: "https://www.maj.ir/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "maj-ir.json",
  maxTokens: 2000000,
  selector: "body"
};
