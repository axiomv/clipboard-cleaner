function getSanitizedHTML(selection) {
  const range = selection.getRangeAt(0);
  const container = document.createElement('div');
  container.appendChild(range.cloneContents());
  return container.innerHTML;
}

document.addEventListener('copy', (e) => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const plain = selection.toString();
  const html = getSanitizedHTML(selection);

  e.preventDefault(); // Block site's clipboard injection
  e.clipboardData.setData('text/plain', plain);
  e.clipboardData.setData('text/html', html);

  console.log('[Clipboard Cleaner] Cleaned clipboard content.');
});
