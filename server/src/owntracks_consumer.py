#!/usr/bin/env python3

import paho.mqtt.client as mqtt
import json

# The callback for when the client successfully connects to the broker
def on_connect(client, userdata, rc):
    ''' We subscribe on_connect() so that if we lose the connection
        and reconnect, subscriptions will be renewed. '''

    client.subscribe("owntracks/+/+")

# The callback for when a PUBLISH message is received from the broker
def on_message(client, userdata, msg):

    topic = msg.topic

    try:
        data = json.loads(str(msg.payload))

        print("TID = {0} is currently at {1}, {2}".format(data['tid'], data['lat'], data['lon']))
    except:
        print("Cannot decode data on topic {0}".format(topic))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("localhost", 1883, 60)

# Blocking call which processes all network traffic and dispatches
# callbacks (see on_*() above). It also handles reconnecting.

client.loop_forever()
