import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.mefa.giv.ir/",
  match: "http://www.mefa.giv.ir/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mefa.json",
  maxTokens: 2000000,
  selector: "body"
};
