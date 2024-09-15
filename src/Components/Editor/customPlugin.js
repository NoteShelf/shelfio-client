import { Jodit } from "jodit"; // Import Jodit

/**
 * @param {Jodit} jodit
 */
function simplePlugin(jodit) {
  console.log("Plugin loaded"); // Check if this message appears in the console

  // Add a simple button to the toolbar
  jodit.toolbar.addButton("simpleButton", {
    icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="currentColor"/></svg>',
    title: "Simple Button",
    exec: () => {
      console.log("Simple Button clicked"); // Check if this message appears when clicking the button
    },
  });
}

Jodit.plugins.add("simplePlugin", simplePlugin);
