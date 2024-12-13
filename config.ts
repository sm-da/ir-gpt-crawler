import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://president.ir/en/",
  match: "https://president.ir/en/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
  selector: "body"
};
