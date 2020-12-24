function activateClicked() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { msg: "BG_SEARCH_TERMS" });
  });
}

document.querySelector(".activate-btn").addEventListener("click", function () {
  activateClicked();
});
