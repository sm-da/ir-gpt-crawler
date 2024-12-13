import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.sabteahval.ir/en/Default.aspx",
  match: "https://www.sabteahval.ir/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "sabteahval.json",
  maxTokens: 2000000,
  selector: "body",
};
