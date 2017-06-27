#this code will update metadata for the channel
#this will illustrate the use of put
import requests
import json

channel_api=raw_input("Enter the API key of channel to be updated: ")
new_name=raw_input("Enter the new name of the channel to be updated: ")

payload={
    "api_key":channel_api,
    "name":new_name
}

headers={"Content-Type":"application/json"}

url="https://api.thingspeak.com/channels/282030.json"

r=requests.put(url,json=payload,headers=headers)
r.raise_for_status()