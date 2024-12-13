import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.cao.ir/",
  match: "https://www.cao.ir/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "cao.json",
  maxTokens: 2000000,
  selector: "body",
};
