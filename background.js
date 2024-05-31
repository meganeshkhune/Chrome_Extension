chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  for (const tab of tabs) {
    if (tab.url.includes('youtube.com')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: playVideo
      });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: pauseVideo
      });
    }
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: playVideo
    });
  }
});

function playVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.play();
  }
}

function pauseVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.pause();
  }
}
