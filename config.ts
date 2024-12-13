import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.aeoi.org.ir/",
  match: "https://www.aeoi.org.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "aeoi.json",
  maxTokens: 2000000,
  selector: "body",
};
