import { Plugin } from "./plugins/type";

class Sensor {
  version: string = "";

  install: (plugin: Plugin) => void = () => {};
}

const sensor = new Sensor();
sensor.version = "1.0.0";

console.log(`sensor version: ${sensor.version}`);
