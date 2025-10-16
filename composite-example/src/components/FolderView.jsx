import { useState } from "react";
import FileView from "./FileView";

const FolderView = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {isOpen ? "📂" : "📁"} {folder.getName()}
      </div>
      {isOpen &&
        folder.children.map((child, index) =>
          child instanceof folder.constructor ? (
            <FolderView key={index} folder={child} />
          ) : (
            <FileView key={index} file={child} />
          )
        )}
    </div>
  );
};
export default FolderView;
