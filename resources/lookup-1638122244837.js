(function(window, undefined) {
  var dictionary = {
    "a4ca716e-c3c5-4610-bb37-1aa90e133b6a": "StartUp",
    "374c9085-d8d4-41cf-9688-a66f10600542": "Upgrades",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "48a6e27b-d462-49b2-99dc-23e3c2dcf4f8": "inLevel",
    "d2ba26ba-2e18-4e84-a022-cd24bdb615aa": "Level Selection",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);