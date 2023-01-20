
let userLocation={
    longitude:0,latitude:0,
}
function getLatLon(position) {
  console.log(position)
    userLocation.latitude =position.coords.latitude;
    userLocation.longitude =position.coords.longitude;
}
/*
navigator.geolocation.getCurrentPosition(function () {}, function () {}, {});
navigator.geolocation.getCurrentPosition(getLatLon);
console.log(navigator.geolocation.getCurrentPosition(getLatLon))
*/

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolocation.getCurrentPosition(getLatLon, function(){}, options);

let locationLoaded=false;
let repull=2300;



let mapLoad= setInterval(function(){
    console.log(userLocation)
    if(userLocation.latitude!=0 && document.getElementById('mapGlue')!==null){


        var mymap = L.map("mapGlue").setView([ userLocation.latitude,  userLocation.longitude ], 13);



        var urlM="https://api.mapbox.com/styles/v1/mapbox/";
        var accessToken="pk.eyJ1IjoicG90ZW50aWFsIiwiYSI6ImNsNTh4dGxqNTA0dXkzbHFxNWtqdWZtdTQifQ.Enuv7oW3wJihJNBveo7wxg";
        /*
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1IjoicG90ZW50aWFsIiwiYSI6ImNrajRzYWtlbTBucjYycW52NGFjenJlOWUifQ.ieDtRfnXEwnHT3xxaGOPHw"
        }).addTo(mymap);
        */

        L.tileLayer('https://api.mapbox.com/styles/v1/potential/cknpbo85v096a18jskm9xm4k9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicG90ZW50aWFsIiwiYSI6ImNsNTh4dGxqNTA0dXkzbHFxNWtqdWZtdTQifQ.Enuv7oW3wJihJNBveo7wxg', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(mymap);



        var myIcon = L.icon({
            iconUrl: "./src/assets/images/apple-watch-1.jpeg",
            iconSize: [30, 30],

        });
        var myIcon2 = L.icon({
            iconUrl: "./src/assets/images/apple-watch-1.jpeg",
            iconSize: [30, 30],

        });
        var shipping_package = L.icon({
            iconUrl: "./src/assets/images/apple-watch-1.jpeg",
            iconSize: [30, 30],
        });

        L.marker([userLocation.latitude,  userLocation.longitude], {icon: myIcon}).addTo(mymap);

        L.marker([userLocation.latitude-0.003,  userLocation.longitude-0.23], {icon: myIcon}).addTo(mymap);
        L.marker([userLocation.latitude-0.016,  userLocation.longitude-0.23], {icon: shipping_package}).addTo(mymap);

        var drawRoute=[
            [ userLocation.latitude, userLocation.longitude ],
            [ userLocation.latitude-0.003, userLocation.longitude-0.23 ],
        ]

        //var polygon = L.polygon(drawRoute,{color:"#6a89cc"}).addTo(mymap);
        var polyline = L.polyline(drawRoute,{color:"#8c7ae6"}).addTo(mymap);






        repull=0;
        clearInterval(mapLoad)
    }

},repull);
