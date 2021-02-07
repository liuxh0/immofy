import * as path from 'path';
import * as url from 'url';
import { ConfigLoader } from './config.js';

const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
const configFilePath = path.join(currentDir, '../config.json')

const configLoader = new ConfigLoader(configFilePath);
const config = {
  consumerKey: configLoader.getString('consumerKey'),
  consumerSecret: configLoader.getString('consumerSecret'),
  geocoordinates: configLoader.getString('geocoordinates')
};

console.log(config)
