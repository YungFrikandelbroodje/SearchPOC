chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // console.log(message.msg)
  if (message.msg == "SEARCH_TERMS") {
    searchGoogle();
  }
});

async function searchGoogle(url) {
  let terms = ["food", "nature", "computers", "trees", "clothing"];
  console.log(terms);

  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    // console.log(`SendMSG got tab id ${tabs[0].id}`);

    terms.forEach(function (term) {
      console.log("Sending term..");
      chrome.tabs.sendMessage(tabs[0].id, { msg: "SEARCH_SINGLE_TERM", term: term }, function (response) {
        setTimeout(() => {
          console.log(response);
        }, 5000);

        console.log(response);
      });
    });
  });
}

function clearStorage() {
  chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
  });
}

function sendMsgToContent(data) {
  let r;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // console.log(`SendMSG got tab id ${tabs[0].id}`);
    chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
      r = response;
      return r;
    });
  });
}

function getAllKeys() {
  chrome.storage.local.get(null, function (items) {
    var allKeys = Object.keys(items);
    console.log(allKeys);
  });
}

function readLocalStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (Object.values(result)[0] != undefined) {
        resolve(Object.values(result)[0].val);
      } else {
        reject();
      }
    });
  });
}
