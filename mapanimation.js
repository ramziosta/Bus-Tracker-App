// //global variable to allow setting the routes to view on the map
// let currentRouteID = '';
// //global map variable to display Boston
// let map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-71.131663,42.352152],
//         zoom: 12
//     });


// //global variable to track reatedmarkers 
// let markers = [];

// // a color object for customizing markers
// const customColor = {
//     Orange: "#FF7F50",
//     Blue: "#1E90FF",
//     Red: "#DC143C",
//     Default: "#9932CC"
// }
// function getRouteID(){

//     return document.getElementById("select-element").value;
// }
// function getURL(){
//     let routeID = getRouteID();
//     return 
// }

// // Request bus data from MBTA
// async function getBusLocations(){
//     //let routeID = document.getElementById("select-element").value;
//     let url = "https://api-v3.mbta.com/vehicles?filter[route]=" + getRouteID();
//     const response = await fetch(url);
//     const json     = await response.json();
//     return json.data;
// }

// // Request alert data from MBTA
// async function getAlerts(){
//     //let routeID = document.getElementById("select-element").value;
//     let    url = "https://api-v3.mbta.com/alerts?filter[route]=" + getRouteID();
//     const response = await fetch(url);
//     const json     = await response.json();
//     return json.data;
// }

// // Display alerts
// async function displayAlerts(){
//     const routeAlerts = await getAlerts();
    
//     //let banner = document.getElementById("alert");
//     if (routeAlerts !== null && routeAlerts !== undefined) 
//     {
//         let msg = "";
//         for (let i = 0; i < routeAlerts.length; i++) 
//         {
//             msg  += `${routeAlerts[i].attributes.header}       `;
//         }
//         setAlertBanner(msg);
//     }
// }

// async function setAlertBanner(msg){
//     let characterCount = await msg.length;    
//     let bannerWidth = characterCount*(7.9) 
//     let duration = bannerWidth/40;
//     let banner = document.getElementById("alert");
//     banner.style.display="block";
//     banner.style.width= characterCount*(7.8) + "px";
//     banner.style.animation = `slide linear ${duration}s infinite`;
//     banner.innerHTML=  `${msg}`;
//     console.log("Characters " + characterCount + " Width " + banner.offsetWidth + " Duration" + duration);
//     return banner;
// }

// async function displayMarkers(){
//     // get bus data
//    const locations = await getBusLocations();

//    let routeID = getRouteID();
   
//     //deleting old markers when route is changed
//    if (routeID !== currentRouteID && markers.length >0){
//     markers.forEach(element => element.remove());
//     markers.splice(0,markers.length);
//    }
//     // loop will only run if locations has been defined
//     if(locations !== null && locations !== undefined){
//         //#2 added for loop to run function to add markers
//         for (let i = 0; i < locations.length; i++){
//             // variables for marker lat and long
//             let latitude = locations[i].attributes.latitude;
//             let longitude = locations[i].attributes.longitude;
//             // variables to add to pop up messages
//             let currentStatus = locations[i].attributes.current_status;
//             currentStatus = currentStatus.toLowerCase();
//             currentStatus = currentStatus.replaceAll('_', ' ');
//             let msg = `Route ${locations[i].relationships.route.data.id} Bus ${locations[i].attributes.label} ${currentStatus} Stop ${locations[i].attributes.current_stop_sequence}`;
//             //setting default color
//             let markerColor = customColor.Default;
            
//             //setting marker color variable based on route
//             if(locations[i].relationships.route.data.id ==="Orange"){
//                 markerColor = customColor.Orange;
//             }
//             else if(locations[i].relationships.route.data.id ==="Blue"){
//                 markerColor = customColor.Blue;
//             }
//             else if(locations[i].relationships.route.data.id ==="Red"){
//                 markerColor = customColor.Red;
//             }
//             else {
//                 markerColor = customColor.Default;
//             }
//             //creating marker with custom color
//             let marker = new mapboxgl.Marker({color: markerColor});
//             //adding marker to array 
//             markers.push(marker);
//             //setting marker array element attributes
//             markers[i].setLngLat([longitude,latitude]);
//             markers[i].setPopup(new mapboxgl.Popup().setText(msg));
//             markers[i].addTo(map);
//         }
//         currentRouteID =  routeID;
//     }
// }

// async function runAlerts(){

//     displayAlerts();
//    // timer
//    setTimeout(runAlerts, 120000);
// }
// async function runMarkers(){
   
//     displayMarkers();
//    // timer
//    setTimeout(runMarkers, 15000);
// }

// async function upDate(){
//     runMarkers();
//     runAlerts();
// }

// runMarkers();
// runAlerts();

const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicmFtemkxOTczIiwiYSI6ImNrdXl2M25kaDc2aHUydm8zY2FqbjkyZ2IifQ.TPXzw7cVnKncIqLo6WqJIA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});
   var marker = new mapboxgl.Marker()
    .setLngLat([-71.0915642,42.358862])
    .addTo(map);

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // for( counter = 0; counter < busStops.length; counter ++){
  //   let stop = busStops[counter]
  //   setInterval( marker.setLngLat(stop),1000);
  // }
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
    setTimeout(()=> {
      if(counter >=busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter ++
      move();
    }, 1000)
}
//setTimeout(move(),1000);
