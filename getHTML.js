var https = require('https');

function getHTML (options, callback) {
  https.get(options, function(response){
    // set encoding
    response.setEncoding('utf8');

    // get data in chunks and append to a string
    let rawData = "";
    response.on('data', function(chunk){
      rawData += chunk;
    });

    response.on('end', function() {
      callback(rawData);
      console.log('Response stream complete.');
    });

  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
