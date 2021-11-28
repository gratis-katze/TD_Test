jQuery("#simulation")
  .on("pageload", ".s-a4ca716e-c3c5-4610-bb37-1aa90e133b6a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPlayAudio",
                  "parameter": {
                    "target": [ "19b541db-49e9-4b37-b4b6-64f6bf0cec21.wav" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 2200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/d9c72410-37a3-4704-9a17-947ce0f7bb71.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ca169f61-b8ea-426a-9104-266d23187f48.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a68735b3-e625-4062-a2c7-2341a7c32008.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/bd58d128-a5e7-48b1-88f4-7c50edf3e733.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/51986be1-5ae2-4933-8721-b1429f40d4b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/8f880f34-1e9f-48cd-bc6c-e0339e4e7eed.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 2200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/d9c72410-37a3-4704-9a17-947ce0f7bb71.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ca169f61-b8ea-426a-9104-266d23187f48.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a68735b3-e625-4062-a2c7-2341a7c32008.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/bd58d128-a5e7-48b1-88f4-7c50edf3e733.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "timed",
                  "delay": 180
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/51986be1-5ae2-4933-8721-b1429f40d4b1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "fade",
                      "duration": 3000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });