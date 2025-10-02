class Config {
  constructor() {
    this.setting = {
      theme: "ligth",
      color: "white",
    };
  }

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
  get(key) {
    return this.setting[key];
  }
  setMultipleChanges(newSetting) {
    Object.assign(this.setting, newSetting);
  }
}
const config = Config.getInstance();
Object.freeze(config);
export default config;
