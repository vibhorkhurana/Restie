#Code to create channel at thingspeak.com

import requests
import json

api_key = raw_input("Enter Public API Key: ")
channel_name = raw_input("Enter Channel Name: ")

url="https://api.thingspeak.com/channels.json"

payload = {
    "api_key":api_key,
    "name":channel_name
}

headers={"Content-Type":"application/json"}

r=requests.post(url,json=payload)
print r.url
if(r.status_code == requests.codes.ok):
    print "Channel Creation Successful"
    st = json.loads(r.content)
    fs=open(st['name']+".json",'w')
    fs.write(json.dumps(st))