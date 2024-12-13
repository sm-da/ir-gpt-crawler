import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://isa.ir/index.php",
  match: "https://isa.ir/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "isa.json",
  maxTokens: 2000000,
  selector: "body",
};
