//Code to update the fileds of a channel using NodeJs API using Query String
var request = require('request');
var options = {
    url:"http://api.thingspeak.com/update",
    qs:{
        api_key:"4HAOT2OMFCM0SNAO",
        field1:30
},
}
request(options,function(err,response,body)
{
    if(err)
        console.log(err);
    else
        console.log(response.statusCode);
})