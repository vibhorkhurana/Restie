//This module will create a channel and store the repsonse in a json file
var request = require('request')
var readline = require('readline-sync')
var fs = require('fs')
var resp_createChannel = {};

var apikey = readline.question('Please Enter the API Key ');

var channel_name = readline.question('Please Enter Channel Name ');

var payload = {
    api_key:apikey,
    name:channel_name
}
var options = {
    url:"https://api.thingspeak.com/channels.json",
    headers:{
        "Content-Type":"application/json"
    },
    method:"POST",
    body:JSON.stringify(payload)
}

request(options,function(err,response,body){
    if(err)
        console.log(err)
    else
    {
        console.log(response.statusCode)
        console.log(body);
        resp_createChannel = body;
        console.log(JSON.parse(body).name);
        fs.writeFile(JSON.parse(body).name+".json",resp_createChannel,function(err){
            if(err)
                console.log(err)
        })
}
})
