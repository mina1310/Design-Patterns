import { FileSystem } from "./FileSystem";
export class Folder extends FileSystem {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }
  getName() {
    return this.name;
  }
  add(newfile) {
    this.children.push(newfile);
  }
  show() {
    this.children.forEach((item) => {
      return item;
    });
  }
}
