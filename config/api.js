import apiai from "apiai";

// read the api.ai docs : https://api.ai/docs/

//Enter your API Key
var app = apiai("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");

// Function which returns speech from api.ai
var getRes = function (query) {
  var request = app.textRequest(query, {
    sessionId: "<unique session id>",
  });
  const responseFromAPI = new Promise(function (resolve, reject) {
    request.on("error", function (error) {
      reject(error);
    });
    request.on("response", function (response) {
      resolve(response.result.fulfillment.speech);
    });
  });
  request.end();
  return responseFromAPI;
};

// test the command :
//getRes('hello').then(function(res){console.log(res)});

export default { getRes };
