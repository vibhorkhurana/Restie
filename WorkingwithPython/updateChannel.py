#code to update channel at thingspeak.com
#it will read a JSON containig API keys
#if file is not fpund will ask for API Key
import requests
import json

channel_name=raw_input("Enter Channel Name")
try:
    fs=open(channel_name+".json",'r')
    ob = json.loads(fs.read())
    for st in ob['api_keys']:
        if st['write_flag'] == True:
            print "Write Key: ",st['api_key']
            api_key = st['api_key']
        if st['write_flag'] == False:
            print "Read Key: ", st['api_key']
except IOError:
    print "Json file not found"
    api_key = raw_input("Enter API key")
#print api_key

data = raw_input("Enter data: ")

payload = {
    "api_key":api_key,
    "field1":data
}
headers={"Content-Type":"application/json"}

url="https://api.thingspeak.com/update.json"
print payload
r=requests.post(url,json=payload,headers=headers)
print r.raise_for_status()
print r.status_code
print r.content