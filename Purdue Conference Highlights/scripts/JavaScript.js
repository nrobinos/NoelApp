//sample code from cordova docs
// this will report back the network connection and display a popup when page is done loading.
//We will want to actually detect when the div is loaded and swap out the pages
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
        checkConnection();
    }

 function checkConnection() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }
