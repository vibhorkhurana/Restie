//Code to update the fileds of a channel using NodeJs API using JSON

var request = require('request');
var payload = {
    api_key : "4HAOT2OMFCM0SNAO",
    field1 : 10
};
var options = {
    url:"http://api.thingspeak.com/update.json",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(payload)
};
request.post(options,function(err,response,body){
    if(err)
        console.log('error -> '+err);
    // console.log("Response Code:-> "+response.statusCode);
    // console.log("Response Body:-> "+body);
        console.log(response)
})