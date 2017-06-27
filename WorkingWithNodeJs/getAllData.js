//To get all the channel list using query string it also displays channel API Keys and channel id
var request = require('request')
var readline = require('readline-sync')
apikey = readline.question("Enter the public API Key: ");
console.log(apikey)
var options={
    url:"https://api.thingspeak.com/channels.json",
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
    qs:{
        api_key:apikey
    }
}
request(options,(err,Response,Body)=>{
    if(err)
        console.log(err)
    else
    {
        console.log(Response.statusCode)
        // console.log(JSON.parse(Response.body)[0].id)
        // console.log(JSON.parse(Response.body)[1].id)
        for(var str of JSON.parse(Response.body))
        {
            console.log(str.id+" : "+str.name+" : WriteAPi->"+str.api_keys[0].api_key+" : ReadAPI->"+str.api_keys[1].api_key)
        }
    }
        

})