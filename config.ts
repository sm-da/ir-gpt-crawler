import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://en.parliran.ir/",
  match: "http://en.parliran.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "parliran-ir.json",
  maxTokens: 2000000,
  selector: "body",
};
