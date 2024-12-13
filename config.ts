import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.ict.gov.ir/",
  match: "http://www.ict.gov.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "ict-gov.json",
  maxTokens: 2000000,
  selector: "body"
};
