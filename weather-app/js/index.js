var weather_key = "f1b7c3880e9f62c0fcc45b36eab32426";
var temp_c = 0;
var icon = 0;
var degrees = 0;
var city;

function gatIcon(code) {
  switch (code) {
    case "01d":
      icon_src = "https://41.media.tumblr.com/ca37cb9334f9c5a4fd9a5f96f3fb58f5/tumblr_o56bzpOMZy1v8xvjdo1_100.png";
      bg_src = "http://www.thewatcherfiles.com/images/Sun2.jpg";
      break;
    case "01n":
      icon_src = "https://41.media.tumblr.com/7c49ec5d8cbdbb011ac4b7c180cef472/tumblr_o56g0yMVbS1v8xvjdo1_100.png";
      bg_src = "http://photos-for-you.com/wp-content/uploads/2011/08/Moonlit-Clouds-2-Black-White-Film.jpg";
      break;
    case "02d":
      icon_src = "https://40.media.tumblr.com/f4081b985f387f120dc08271ab58cb35/tumblr_o56fsqceu61v8xvjdo1_100.png";
      bg_src = "https://tau0.files.wordpress.com/2014/02/cows_and_clouds_bw.jpg";
      break;
    case "02n":
      icon_src = "https://36.media.tumblr.com/e089fb85cc7dfb1ca4d090e804ffa10c/tumblr_o56ft3MzGL1v8xvjdo1_100.png";
      bg_src = "https://il1.picdn.net/shutterstock/videos/2831005/thumb/1.jpg";
      break;
    case "03d":
      icon_src = "https://41.media.tumblr.com/2d69a402da8aab1fe56d1d1a26fad13f/tumblr_o56g46LAyk1v8xvjdo1_100.png";
      bg_src = "http://images.freeimages.com/images/previews/f37/grey-clouds-1346177.jpg";
      break;
    case "03n":
      icon_src = "https://41.media.tumblr.com/2d69a402da8aab1fe56d1d1a26fad13f/tumblr_o56g46LAyk1v8xvjdo1_100.png";
      bg_src = "http://weathernationtv.com/static/img/backgrounds/cloudy-mc-night.jpg";
      break;
    case "04d":
      icon_src = "https://41.media.tumblr.com/2d69a402da8aab1fe56d1d1a26fad13f/tumblr_o56g46LAyk1v8xvjdo1_100.png";
      bg_src = "http://weathernationtv.com/static/img/backgrounds/cloudy-mc-night.jpg";
      break;
    case "04n":
      icon_src = "https://41.media.tumblr.com/2d69a402da8aab1fe56d1d1a26fad13f/tumblr_o56g46LAyk1v8xvjdo1_100.png";
      bg_src = "http://weathernationtv.com/static/img/backgrounds/cloudy-mc-night.jpg";
      break;
    case "09d":
      icon_src = "https://40.media.tumblr.com/b186c9d4f02a8e4724421d04a0c58405/tumblr_o56friIEqG1v8xvjdo1_100.png";
      bg_src = "http://rayli.net/blog/wp-content/uploads/2012/03/rain_floor-1.jpg";
      break;
    case "09n":
      icon_src = "https://40.media.tumblr.com/b186c9d4f02a8e4724421d04a0c58405/tumblr_o56friIEqG1v8xvjdo1_100.png";
      bg_src = "http://darkroom.baltimoresun.com/wp-content/uploads/2013/05/AFP_Getty-168809206.jpg";
      break;
    case "10d":
      icon_src = "https://41.media.tumblr.com/8b34d29b671dc7953e2cbbeb7fa4f382/tumblr_o56fsbvDgU1v8xvjdo1_100.png";
      bg_src = "http://www.thelostogle.com/wp-content/uploads/2011/09/rain.jpg";
      break;
    case "10n":
      icon_src = "https://41.media.tumblr.com/8b34d29b671dc7953e2cbbeb7fa4f382/tumblr_o56fsbvDgU1v8xvjdo1_100.png";
      bg_src = "http://www.thelostogle.com/wp-content/uploads/2011/09/rain.jpg";
      break;
    case "11d":
      icon_src = "https://41.media.tumblr.com/13703d830d1fb2ee49ba976f3d0def60/tumblr_o56gkvjq5V1v8xvjdo1_100.png";
      bg_src = "http://i.dailymail.co.uk/i/pix/2012/09/20/article-2205885-15186BAC000005DC-898_964x642.jpg";
      break;
    case "11n":
      icon_src = "https://41.media.tumblr.com/13703d830d1fb2ee49ba976f3d0def60/tumblr_o56gkvjq5V1v8xvjdo1_100.png";
      bg_src = "http://i.dailymail.co.uk/i/pix/2012/09/20/article-2205885-15186BAC000005DC-898_964x642.jpg";
      break;
    case "13d":
      icon_src = "https://41.media.tumblr.com/dde19f4fedbf9af7d5d353bf8f5ae021/tumblr_o56gmfYoba1v8xvjdo1_100.png";
      bg_src = "http://40.media.tumblr.com/2dfe0ddfb21e3a4f21480798a080bfe6/tumblr_nhs1y3tD0z1qdeuyro1_1280.jpg";
      break;
    case "13n":
      icon_src = "https://41.media.tumblr.com/dde19f4fedbf9af7d5d353bf8f5ae021/tumblr_o56gmfYoba1v8xvjdo1_100.png";
      bg_src = "http://41.media.tumblr.com/af171d1a72a92cc15efefac87ef24b49/tumblr_mxitxvNq8y1qdeuyro1_1280.jpg";
      break;
    case "50d":
      icon_src = "https://40.media.tumblr.com/30444cc91af92eae4520f610f2cddfa8/tumblr_o56go53vsJ1v8xvjdo1_100.png";
      bg_src = "http://lh3.ggpht.com/SXZS55cCOzqZD2M0Irgs5mBLYLpOXJt1nJY8XYiIOMuYMMS7NMthoXFb657yFjsmLM1Lsr1v80uydTP6riR2DfGD=s285-c";
      break;
    case "50n":
      icon_src = "https://41.media.tumblr.com/eb5ebe9439195c4d5ef0d9ed558dc35a/tumblr_o56goxPyLe1v8xvjdo1_100.png";
      bg_src = "http://lh3.ggpht.com/SXZS55cCOzqZD2M0Irgs5mBLYLpOXJt1nJY8XYiIOMuYMMS7NMthoXFb657yFjsmLM1Lsr1v80uydTP6riR2DfGD=s285-c";
      break;
      defult:
        icon_src = "https://41.media.tumblr.com/ca37cb9334f9c5a4fd9a5f96f3fb58f5/tumblr_o56bzpOMZy1v8xvjdo1_100.png";
      break;
  }
  url = "url("+bg_src+")"
  document.body.style.backgroundImage = "url('img_tree.png')";
  document.body.style.backgroundImage = url;
  return icon_src;
}

function loadDoc(url, cfunc) {
  console.log(url);
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      cfunc(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


// thie function use Google API to convert the GPS location to a city name
function getCity(xhttp) {
  data = JSON.parse(xhttp.responseText);
  for (var i = 0; i < data["results"].length; i++) {
    if (data["results"][i]["types"][0] == "locality") {
      address = data["results"][i]["formatted_address"];
      //city = address.split(",")[0];
      document.getElementById("location").innerHTML = address.split(",")[0];
      //console.log(city);
      city = address.split(",")[0];
      console.log(city);
      gatWeather();
    }
  }
}

// getting the tempature from the waether API
function getTemp(xhttp) {
  weather = JSON.parse(xhttp.responseText);
  temp_k = weather["main"]["temp"];
  temp_c = Math.round(temp_k - 273.15);
  console.log(temp_c);
  document.getElementById("temp").innerHTML = temp_c + "°";
  description = weather["weather"][0]["description"];
  document.getElementById("description").innerHTML = description;
  icon = weather["weather"][0]["icon"];
  console.log(icon);
  icon_src = gatIcon(icon);
  document.getElementById("icon").src=icon_src;

}

// get user location from the browser
function getLocation() {
  var url;
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long;
    //console.log(url);
    loadDoc(url, getCity)
  });
}

// helper function to convert celsius to fahranheit
function celsius2fahranheit(temp_c) {
  return Math.round(temp_c * 1.8 + 32);
}

function gatWeather() {
  console.log(city);
  var weather_url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + weather_key;
  console.log(weather_url)
  loadDoc(weather_url, getTemp)
}

// Change from degrees format form Celsius to Fahrenheit and vice versa 
function changeDegrees(degrees) {
  if (degrees == 0) {
    degrees = 1;
    document.getElementById("temp").innerHTML = celsius2fahranheit(temp_c) + "°";
    document.getElementById("degrees").innerHTML = "C";
    return degrees
  } else {
    degrees = 0;
    document.getElementById("temp").innerHTML = temp_c + "°";
    document.getElementById("degrees").innerHTML = "F";
    return degrees
  }
}

document.getElementById("degrees").onclick = function() {
  degrees = changeDegrees(degrees);
}

function putIcon(src) {
  var img = document.createElement("IMG");
  img.src = src;
  document.getElementById('weather_icon').appendChild(img);
}

function setWeather() {
  getLocation()
}

document.getElementById("refresh").onclick = function() {
  setWeather();
}

document.onready = setWeather() ;