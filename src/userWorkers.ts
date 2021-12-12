import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

// @ts-ignore
self.MonacoEnvironment = {
  getWorker() {
    return new editorWorker();
  },
};
