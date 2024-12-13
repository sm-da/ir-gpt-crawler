import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://irib.ir/",
  match: "http://irib.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "irib.json",
  maxTokens: 2000000,
  selector: "body"
};
