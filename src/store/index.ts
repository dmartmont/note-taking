export function setStoredText(text: string): void {
  localStorage.setItem("editorvalue", text);
}

export function getStoredText() {
  return localStorage.getItem("editorvalue") ?? "";
}
