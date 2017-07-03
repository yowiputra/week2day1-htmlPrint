var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){
    // set encoding
    response.setEncoding('utf8');

    // get data in chunks
    let rawData = "";
    response.on('data', function(chunk){
      rawData += chunk;
    });

    response.on('end', function() {
      try {
        // const parsedData = JSON.parse(rawData);
        console.log(rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

getAndPrintHTMLChunks();
