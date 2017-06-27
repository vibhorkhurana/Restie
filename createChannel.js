//By USing Curl command for creating a channel in thingspeak

curl -X POST http://api.thingspeak.com/channels.json --data '{"api_key":"F4J7A5L8SYHER195", "name":"MyChannel"}' -H "Content-Type:application/json"

//Using Curl command to update the channel data with query string

curl -X POST http://api.thingspeak.com/update?api_key=I80UFNW34PP1AAWI\&field1=10

//Using curl command to update the channel using Json

curl -X POST http://api.thingspeak.com/update.json --data '{"api_key":"I80UFNW34PP1AAWI","field1":20}' -H "Content-Type:application/json"

//Using curl command to update the channel using Json and reading it from file