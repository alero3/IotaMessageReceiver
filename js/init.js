var iota;

var connection = {"accountData"         : false,
    "previousAccountData" : false,
    "isLoggedIn"          : false,
    "showStatus"          : false,
    "inApp"               : true,
    "isSpamming"          : false,
    "handleURL"           : false,
    "testNet"             : false,
    "host"                : "http://88.198.230.98",
    "port"                : "14265",
    "depth"               : 3,
    "minWeightMagnitude"  : 14,
    "ccurl"               : 1,
    "ccurlPath"           : "",
    "lightWallet"         : false,
    "allowShortSeedLogin" : false,
    "keccak"              : false,
    "language"            : "en"};



var UI = (function(UI, $, undefined) {

    console.log("Initializing UI variable...")
    UI.initializationTime = 0;
    UI.initialConnection  = false;

    UI.isLocked           = false;
    UI.hasFocus           = true;

    UI.start = function() {
        console.log("UI.start: Initialization");


        console.log ("Creating new IOTA instance...")
        iota = new IOTA({
            "host": connection.host,
            "port": connection.port
        });

        console.log ("IOTA object:")
        console.log (iota)
        iota.api.getNodeInfo( function (e, nodeInfo){
            console.log (nodeInfo);

        });



    }




    return UI;
}(UI || {}, jQuery));


$(document).ready(function() {
    console.log ("Going to do UI.start...")
    UI.start();
});

