import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mfa.gov.ir/",
  match: "https://mfa.gov.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body"
};
