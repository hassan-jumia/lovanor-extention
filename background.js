chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "scrapeData") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tabUrl = tabs[0].url;
        if (tabUrl.startsWith("https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html")) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "fetchData" }, function (response) {
            sendResponse({ data: response.data });
          });
        } else {
          sendResponse({ data: null });
        }
      });
      return true;
    }
  });
  