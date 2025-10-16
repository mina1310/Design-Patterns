import { FileSystem } from "./FileSystem";
export class File extends FileSystem {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
