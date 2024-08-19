import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

import "./Editor.css";

const Editor = ({ existingContent, callback }) => {
  const [content, setContent] = useState(existingContent);

  useEffect(() => {
    setContent(existingContent);
  }, [existingContent]);

  const editor = useRef(null);

  const onBlurHandler = (content) => {
    callback("content", content);
    setContent(content);
  };

  const config = {
    readonly: false,
    placeholder: "Start typings...",
    toolbarAdaptive: false,
    autoResize: false,
    statusbar: false,
    addNewLine: false,
    allowResizeY: false,
    allowResizeX: false,
    globalFullSize: true,
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      autoResize={false}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => onBlurHandler(newContent)} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => {}}
    />
  );
};

export default Editor;
