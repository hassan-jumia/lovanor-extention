document.addEventListener("DOMContentLoaded", function () {
    var scrapeButton = document.getElementById("scrapeButton");
    var resultContainer = document.getElementById("resultContainer");
  
    scrapeButton.addEventListener("click", function () {
      resultContainer.textContent = "Scraping data...";
  
      // Array of URLs to scrape
      var urlsToScrape = [
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-collection-salon-one-step-seche-cheveux-et-coiffeur-revlon-mpg989685.html",
        "https://www.jumia.ma/calor-brosse-lissante-cf5820c0-calor-power-straight-57355000.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/twist-sponge-curl-sponge-eponge-pour-dreadlocks-curly-hair-et-cheveux-boucles-generic-mpg1370069.html",
        "https://www.jumia.ma/solac-lisseur-cheveux-expert-ionic-brush-2ans-de-garantie-26969313.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/brosse-soufflante-rotative-big-hair-dual-2-temperatures-2-brosses-a-poils-doux-babyliss-mpg1348921.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/brosse-soufflante-et-lissante-one-step-1200w-one-step-mpg1345653.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",
        "https://www.jumia.ma/as200e-brosse-soufflante-dry-straighten-and-style-4-en-11000wrotativenoir-babyliss-mpg1197591.html",

    ];
  
      // Perform scraping logic for each URL
      var scrapedData = [];
      var counter = 0;
  
      function scrapeURL(url) {
        // Perform scraping logic for the current URL
        // Replace the following code with your actual scraping implementation
        fetch(url)
          .then(response => response.text())
          .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, "text/html");
            var titleElement = doc.querySelector('#jm > main > div:nth-child(1) > div.col4 > div > section > div.-hr.-pas > p');
            var title = titleElement ? titleElement.textContent : 'N/A';
  
            // Store the scraped data
            scrapedData.push(title+"<br>");
  
            // Move to the next URL or display the results
            counter++;
            if (counter < urlsToScrape.length) {
              scrapeURL(urlsToScrape[counter]);
            } else {
              // All URLs scraped, display the results
              resultContainer.textContent = scrapedData.join('\n');
            }
          })
          .catch(error => {
            console.error('Error scraping URL:', url);
            // Move to the next URL or display the results (with 'N/A' for the current URL)
            counter++;
            if (counter < urlsToScrape.length) {
              scrapeURL(urlsToScrape[counter]);
            } else {
              // All URLs scraped, display the results
              resultContainer.textContent = scrapedData.join('\n');
            }
          });
      }
  
      // Start scraping with the first URL
      scrapeURL(urlsToScrape[counter]);
    });
  });
  