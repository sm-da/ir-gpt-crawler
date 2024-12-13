import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.leader.ir/en",
  match: "https://www.leader.ir/en/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "leader.json",
  maxTokens: 2000000,
  selector: "body",
};
