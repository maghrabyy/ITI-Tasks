const findCountryBtn = document.getElementById("findBtn")
const myLocationBtn = document.getElementById("myLocationBtn")
const countriesDropdown = document.getElementById("countries")


function initMap(lat,lng) {
  const myLatLng = { lat, lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

function myCurrentLocation (){
  navigator.geolocation.getCurrentPosition((posObj)=>{ 
    initMap(posObj.coords.latitude,posObj.coords.longitude)
  },(e)=>{
    console.log(e)
  })
}
myCurrentLocation()

findCountryBtn.addEventListener("click",()=>{
    const selectedCoord = countriesDropdown.value.split(",").map(coord => {
        return coord.split(":")[1]
    })
    const selectedLat = +selectedCoord[0]
    const selectedLong = +selectedCoord[1]
    initMap(selectedLat,selectedLong)
})

myLocationBtn.addEventListener("click",myCurrentLocation)