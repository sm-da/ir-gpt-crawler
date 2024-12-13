import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.sabteahval.ir/",
  match: "https://www.sabteahval.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "sabteahval.json",
  maxTokens: 2000000,
  selector: "body",
};
