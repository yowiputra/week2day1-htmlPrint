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
    response.on('data', function(chunk){
      console.log("CHUNK:", chunk, "\n");
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });


  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

getAndPrintHTMLChunks();
