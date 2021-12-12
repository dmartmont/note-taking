import * as monaco from "monaco-editor";

import initVim from "./extensions/vim";
import { getStoredText } from "./store";

import "./globals";
import "./userWorkers";
import "./style.css";

const editorNode = document.getElementById("editor")!;
const editor = monaco.editor.create(editorNode, {
  theme: "vs-dark",
  language: "markdown",
  fontSize: 14,
  scrollBeyondLastLine: true,
  minimap: {
    enabled: true,
    renderCharacters: false,
  },
  wordWrap: "wordWrapColumn",
  wordWrapColumn: 140,
  wrappingIndent: "indent",
  wordBasedSuggestions: false,
  padding: {
    top: 16,
    bottom: 16,
  },
  folding: true,
});
editor.focus();
window.editor = editor;

const EXTENSIONS = [{ initFunction: initVim, nodeId: "status-bar" }];
EXTENSIONS.forEach(({ initFunction, nodeId }) => {
  initFunction(editor, nodeId);
});

const storedValue = getStoredText();
editor.setValue(storedValue);
