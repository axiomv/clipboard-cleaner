document.addEventListener('DOMContentLoaded', () => {
  const keywordBox = document.getElementById('keywords');
  const regexBox = document.getElementById('regex');
  const status = document.getElementById('status');

  chrome.storage.sync.get(['keywords', 'regex'], (data) => {
    if (data.keywords) {
      keywordBox.value = data.keywords.join('\n');
    }
    if (data.regex) {
      regexBox.value = data.regex.join('\n');
    }
  });

  document.getElementById('save').addEventListener('click', () => {
    const keywords = keywordBox.value.split('\n').map(line => line.trim()).filter(Boolean);
    const regex = regexBox.value.split('\n').map(line => line.trim()).filter(Boolean);

    chrome.storage.sync.set({ keywords, regex }, () => {
      status.textContent = 'Settings saved!';
      setTimeout(() => status.textContent = '', 2000);
    });
  });
});
