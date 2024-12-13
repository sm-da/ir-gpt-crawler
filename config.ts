import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://isa.ir/",
  match: "https://isa.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "isa.json",
  maxTokens: 2000000,
  selector: "body"
};
