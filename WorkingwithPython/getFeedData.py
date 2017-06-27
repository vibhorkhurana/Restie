#this code will import the data from a channel whose channel Id is provided
import requests
import json

user_api = raw_input("Enter user API Key: ")

url = "https://api.thingspeak.com/channels.json"

dicty = {}

payload={
    "api_key":user_api
}

headers={
    "Content-Type":"application/json"
}

r=requests.get(url,json=payload,headers=headers)
r.raise_for_status()
i=1
print "Available Channels are"
channel_resp=json.loads(r.content)
for st in json.loads(r.content):
    print st['api_keys'][0]['api_key']
    print st['name']," ",st['id']
    dicty.__setitem__(st['id'],st['api_keys'][0]['api_key'])
    #dicty[st['id']]=st['api_keys'][0]['api_key']
#print dicty

channel_id = int(raw_input("Enter the required Channel id:"))

#channel_id.strip()

#print "->",channel_id.strip(),"<-"

#print dicty.has_key(channel_id)

#print dicty.get(channel_id)

url = "https://api.thingspeak.com/channels/"+str(channel_id)+"/feeds.json"

result=raw_input("Enter the no records to view")

header = {
    "Content-Type":"application/json"
}

payload={
    "api_key":dicty.get(channel_id),
    "results":result
}

r=requests.get(url,json=payload,headers=header)
print r.status_code
print r.content