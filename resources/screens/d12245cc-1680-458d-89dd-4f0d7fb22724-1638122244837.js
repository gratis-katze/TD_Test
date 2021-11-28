jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d2ba26ba-2e18-4e84-a022-cd24bdb615aa",
                    "transition": {
                      "type": "fade",
                      "duration": 1400
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
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "options"
                },{
                  "datatype": "variable",
                  "element": "NULL"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_17","#s-Image_6","#s-Image_18","#s-Image_7","#s-Image_14","#s-Image_15","#s-Image_16","#s-Image_11","#s-Image_13","#s-Image_9","#s-Image_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "options" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "options" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_17","#s-Image_6","#s-Image_18","#s-Image_7","#s-Image_14","#s-Image_15","#s-Image_16","#s-Image_11","#s-Image_13","#s-Image_9","#s-Image_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "options" ],
                    "value": "0"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d2ba26ba-2e18-4e84-a022-cd24bdb615aa",
                    "transition": {
                      "type": "fade",
                      "duration": 2000
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
                    "target": "screens/374c9085-d8d4-41cf-9688-a66f10600542",
                    "transition": {
                      "type": "fade",
                      "duration": 2000
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/374c9085-d8d4-41cf-9688-a66f10600542",
                    "transition": {
                      "type": "fade",
                      "duration": 2000
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
  .on("pageload", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .pageload", function(event, data) {
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "rainloop" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "rainloop"
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "value": "./images/147b9f25-0c06-4164-8bf9-8048e1b89ce0.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flag1" ],
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 2000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/9550d1d3-5ae9-40a7-8a1a-4dab5ab9ccce.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "mage" ],
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
                    "value": "./images/89646572-37a1-44c3-a350-093d7690f599.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "coin" ],
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
  .on("variablechange.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .variablechange", function(event, data) {
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
              "condition": (data.variableTarget === "rainloop"),
              "actions": [
                {
                  "action": "jimPlayAudio",
                  "parameter": {
                    "target": [ "2cfb5498-619f-4a57-895d-16e035b5678e.wav" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "rainloop" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "rainloop"
                      },{
                        "datatype": "variable",
                        "element": "ONE"
                      } ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 25000
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
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "flag1"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "timed",
                  "delay": 350
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "value": "./images/c32ffedd-dc18-46e9-9a5e-2b3328bd7875.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "timed",
                  "delay": 350
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "value": "./images/1d904590-52ee-40cf-a7de-1bc4d2698294.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "timed",
                  "delay": 350
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "value": "./images/c2bfe272-760b-49a0-9352-5127ea355e20.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_4" ]
                  },
                  "exectype": "timed",
                  "delay": 350
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "value": "./images/2329bf3a-3a7e-4d26-8935-3777debf18f1.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "flag1" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "flag1"
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "mage"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/494cd055-b007-41b2-8db7-2f42ba1f57b9.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/80764bdb-9cd3-415c-bd7a-e62e2d9d4f1c.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/45cc7288-71b5-402f-b6bc-be72cbe2bc55.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/a3ff05dc-373c-4a24-854f-480e3dbe2a15.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/4f4b4e45-d448-440a-aa34-9c22ce669b10.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/89ad9fd7-8ed9-4461-9d07-5c2d9a7c3780.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/2a1374d1-f37b-41b5-93f3-e71559bcde90.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_8" ]
                  },
                  "exectype": "timed",
                  "delay": 2000
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_8" ],
                    "value": "./images/404b4e9f-ba3f-4c96-8a10-7dbe4de84c90.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "mage" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "mage"
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "coin"),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
                    "value": "./images/a3fd9cf6-0da5-4734-ae86-0fa861f7e9cf.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
                    "value": "./images/ee0976e8-4fee-4377-a380-70d18e4175b5.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
                    "value": "./images/e94137d3-d655-4ba5-be35-478638c984a2.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_10" ]
                  },
                  "exectype": "timed",
                  "delay": 150
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Image_10" ],
                    "value": "./images/41a4823a-0fd2-4367-acb8-3c0d40c78c87.png"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "coin" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "coin"
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