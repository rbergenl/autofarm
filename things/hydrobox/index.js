var awsIot = require('aws-iot-device-sdk');
var rpio = require('rpio');

var device = awsIot.device({
    keyPath: '/home/pi/deviceSDK/certs/private.pem.key',
    certPath: '/home/pi/deviceSDK/certs/certificate.pem.crt',
    caPath: '/home/pi/deviceSDK/certs/caCert.crt',
    clientId: '<YOUR THING NAME>',
    region: '<YOUR REGION>'
});

// setup the logic for listening to an MQTT event by subscribing to a topic
device.on('connect', function() {
    device.subscribe('LED');
    device.publish('LED', JSON.stringify({ test_data: 1}));
});

// setup the listener for when a TOPIC we subscribed to receives a message
device.on('message', function(topic, payload) {
    payload = JSON.parse(payload.toString());
    //show the incoming message
    console.log(payload.light);
    if(topic == 'LED') {
        if(payload.light == 'on'){
            rpio.write(12, rpio.HIGH);
        } else {
            rpio.write(12, rpio.LOW);
        }
    }
});

// in AWS IoT, pubish on the topic a test rule with the payload { "light": "on" }
