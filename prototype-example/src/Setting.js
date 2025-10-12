export class Setting {
  constructor(theme, lan, font) {
    this.theme = theme;
    this.lan = lan;
    this.font = font;
  }

  clone() {
    return new Setting(this.theme, this.lan, this.font);
  }
}
