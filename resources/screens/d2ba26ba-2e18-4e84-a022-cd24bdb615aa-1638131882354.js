jQuery("#simulation")
  .on("click", ".s-d2ba26ba-2e18-4e84-a022-cd24bdb615aa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "fade",
                      "duration": 1500
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
    } else if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/55e14b7a-fb3d-4f01-a9cf-208e553335fa",
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
  })
  .on("pageload", ".s-d2ba26ba-2e18-4e84-a022-cd24bdb615aa .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
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
                  "delay": 400
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "demon" ],
                    "value": "1"
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
  })
  .on("variablechange.jim", ".s-d2ba26ba-2e18-4e84-a022-cd24bdb615aa .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "demon"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 130
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 130
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 130
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 170
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 130
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/aafd25c8-99f5-4fd5-a246-9988d04c53be.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/03201730-11dc-48c7-8853-5e99681c302c.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/ab819311-7357-428b-a3e4-ff49cfeba87f.png"
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
                  "delay": 270
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/a225f6cc-33e7-4753-b913-c404faeca27b.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/3ce88491-f948-48dd-9d90-89c8559443be.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/0b45e9a7-c766-4838-9843-0651d999b52e.png"
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
                  "delay": 200
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "demon2" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "demon2"
                      },{
                        "datatype": "variable",
                        "element": "ONE"
                      } ]
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
        },
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "demon2"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "value": "./images/1d5d4b98-53ad-4ed8-bb3b-57be03ebde60.png"
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
                    "value": "./images/0ae4d99b-d37c-43e2-9ee3-95d09c4f36f5.png"
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
                    "value": "./images/d797ff8c-c146-4012-b866-ed446da1b3bd.png"
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
                    "value": "./images/0f8b0fe8-4721-4a09-806d-38ab67add252.png"
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
                    "value": "./images/effcc8db-37f1-4990-8295-4994c3497a76.png"
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
                    "value": "./images/c3cbb4a8-bf2f-4aeb-b295-19dc9250cc0b.png"
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
                    "value": "./images/f7cfa5e6-e93e-4de1-b9c3-1b6770100ba9.png"
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
                    "value": "./images/4585389d-f85d-4b90-b757-bfe922ea193a.png"
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
                    "value": "./images/50e32f75-31e9-460d-8cbc-4bace18054e6.png"
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
                    "value": "./images/63a31d68-78f0-4398-915f-1942cdbfe22d.png"
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
                    "value": "./images/a42033cc-ca6f-4aaa-8502-7d86130fc6d0.png"
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
                    "variable": [ "demon" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "demon"
                      },{
                        "datatype": "variable",
                        "element": "ONE"
                      } ]
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