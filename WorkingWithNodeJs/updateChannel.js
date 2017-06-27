//This module will read the JSON file of Channel created from createChannel module and update data 
//by reading the API key from the file itself
var request = require('request')
var fs = require('fs')

var readline = require('readline-sync')
var channel_name = readline.question("Enter the channel name")+".json"

var api_key;
data = fs.readFileSync(channel_name)

channel_data = data.toString();
apikey = JSON.parse(channel_data).api_keys[0].api_key;
var data = readline.questionInt("Enter data to be inserted");
console.log(apikey)

var payload = {
    api_key : apikey,
    field1 : data
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
        console.log(response.statusCode)
})