$(document).ready(function () {
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // console.log("Got message in contentscript: " + message.msg);
    switch (message.msg) {
      case "BG_SEARCH_TERMS":
        chrome.runtime.sendMessage({ msg: "SEARCH_TERMS"});

      case "SEARCH_SINGLE_TERM":
        firstUrl = searchSingleTerm(message.term);
        return new Promise(function (resolve) {
          console.log("starting wait");
          setTimeout(resolve, 5000);
        }).then(() => {
          console.log("done waiting");
          sendResponse(firstUrl)
        });
    }
    return true; // for sendResponse
  });
});

document.addEventListener("SEARCH_TERMS", function (e) {
  var msg = e.msg;
  chrome.runtime.sendMessage({ msg: "SEARCH_TERMS" });
});

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

function searchSingleTerm(term) {
  // location.href = "https://www.google.com/search?q=a"
  $(".gLFyf.gsfi").val(term);

  console.log("-- Executing click search button--");
  $(".Tg7LZd").click();

  let firstUrl = document.querySelector('.yuRUbf').href

  return firstUrl
}
