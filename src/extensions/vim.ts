import { editor } from "monaco-editor";
import { initVimMode, VimMode } from "monaco-vim";

import { setStoredText } from "../store";

export default (editor: editor.IStandaloneCodeEditor, nodeId: string) => {
  const statusNode = document.getElementById(nodeId);
  const vimMode = initVimMode(editor, statusNode);
  window.vimMode = vimMode;
};

VimMode.Vim.defineEx("write", "w", () =>
  setStoredText(window.editor.getValue())
);
