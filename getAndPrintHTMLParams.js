var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, function(response){
    // set encoding
    response.setEncoding('utf8');

    // get data in chunks and append to a string
    let rawData = "";
    response.on('data', function(chunk){
      rawData += chunk;
    });

    response.on('end', function() {
      console.log(rawData);
      console.log('Response stream complete.');
    });


  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
