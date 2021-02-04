import * as path from "path";
import * as url from "url";
import { getConfig, loadConfig } from "./config.js";

const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
const configFilePath = path.join(currentDir, "../config.json")
loadConfig(configFilePath);
console.log(getConfig())
