import { useState } from "react";
import "./App.css";
import { File } from "./models/file";
import { Folder } from "./models/Folder";
import FolderView from "./components/FolderView";

function App() {
  const root = new Folder("projects");
  const frontend = new Folder("frontend");
  const backend = new Folder("backend");
  frontend.add(new File("index.html"));
  frontend.add(new File("App.js"));
  backend.add(new File("database.sql"));

  root.add(frontend);
  root.add(backend);

  return (
    <div style={{ fontFamily: "monospace" }}>
      <h2>my File Explorer</h2>
      <FolderView folder={root} />
    </div>
  );
}

export default App;
