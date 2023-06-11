chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "fetchData") {
      var dataElement = document.querySelector("#jm > main > div:nth-child(1) > div.col4 > div > section > div.-hr.-pas > p");
      var data = dataElement ? dataElement.innerText : null;
      sendResponse({ data: data });
    }
  });
  