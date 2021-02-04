import * as fs from "fs"

let config;

/**
 *
 * @param {string} path
 */
export function loadConfig(path) {
  const content = fs.readFileSync(path).toString();
  config = JSON.parse(content);
}

/**
 * @returns {object}
 */
export function getConfig() {
  // return a copy of config object
  return JSON.parse(JSON.stringify(config));
}
