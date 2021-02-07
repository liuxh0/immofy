import * as fs from 'fs';

export class ConfigLoader {
  #config;

  constructor(configPath) {
    const fileContent = fs.readFileSync(configPath).toString();
    this.#config = JSON.parse(fileContent);
  }

  /**
   * Returns the value of the given path. If the value does not exist, an error is thrown.
   * @param {string} fieldPath
   */
  getValue(fieldPath) {
    const pathKeys = fieldPath.split('.');

    return pathKeys.reduce((configObject, key) => {
      const nextObject = configObject[key];

      if (nextObject === undefined) {
        throw new Error(`${fieldPath} not found`);
      }

      return configObject[key];
    }, this.#config);
  }

  /**
   * Returns the string value of the given path. If the value does not exist or the value is not a string, an error is
   * thrown.
   * @param {string} fieldPath
   */
  getString(fieldPath) {
    const value = this.getValue(fieldPath);

    if (typeof value != 'string') {
      throw new Error(`${fieldPath} is not a string.`);
    }

    return value;
  }

  // getValueOrDefualt(fieldPath, defaultValue) { }
}
