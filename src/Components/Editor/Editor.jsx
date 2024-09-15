import React, { useState, useRef, useEffect, useMemo } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import Prism from "prismjs";

import "./Editor.css";
import "prismjs/themes/prism.css"; // Default theme

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

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // buttons: [
  //   ...Jodit.defaultOptions.buttons,
  //   {
  //     name: "code",
  //     tooltip: "code",
  //     exec: (editor) => {
  //       editor.s.insertHTML(
  //         `<pre><code class="language-javascript"> // Type your code here... </code></pre>`
  //       );

  //       Prism.highlightAll();
  //     },
  //   },
  // ],

  const config = useMemo(() => {
    return {
      readonly: false,
      placeholder: "Start typings...",
      toolbarAdaptive: false,
      autoResize: false,
      statusbar: false,
      addNewLine: false,
      allowResizeY: false,
      allowResizeX: false,
      globalFullSize: true,
      autofocus: true,
      spellcheck: true,
      toolbarButtonSize: "small",
      defaultActionOnPaste: "insert_as_text",

      uploader: {
        insertImageAsBase64URI: true,
      },
      buttons:
        "bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,lineHeight,superscript,subscript,classSpan,image,spellcheck,cut,copy,paste",
    };
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      autoResize={false}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => onBlurHandler(newContent)} // preferred to use only this option to update the content for performance reasons
    />
  );
};

export default Editor;
