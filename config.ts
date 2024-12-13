import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://irib.ir/",
  match: "https://irib.ir/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "irib.json",
  maxTokens: 2000000,
  selector: "body",
};
