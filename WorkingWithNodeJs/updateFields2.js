//Code to update the fileds of a channel using NodeJs API using JSON
var request = require('request')
var payload = {
    api_key : "4HAOT2OMFCM0SNAO",
    field1: 20
}
var options={
    url : "http://api.thingspeak.com/update.json",
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
}
request(options,function(err,response,body)
{
    if(err)
        console.log(err);
    else
        console.log(response.statusCode);
})