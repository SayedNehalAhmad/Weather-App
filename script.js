const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "76713838ed89fb0045e8a001bb2d8761";
//const url2 = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi";

let inp = document.querySelector(".input");

// let icon = document.querySelector(".icon");
let input = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
async function getData(cityName) {
    const response = await fetch(url + cityName + `&appid=${apikey}`);
    let data = await response.json();
    
    console.log(data);
    console.log("--------------------------------------------");
    console.log(data.weather[0].description);
    //console.log(data.weather[2].value);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    setWeatherImage(data.weather[0].description);

}
searchBtn.addEventListener("click", ()=> {
    getData(inp.value);
});

function setWeatherImage(desc) {
    let weatherImage = document.querySelector(".weather img");
    if (desc === "clear sky") {
        weatherImage.src = "imgResource/clear.png";
    } else if (desc === "few clouds") {
        weatherImage.src = "imgResource/clouds.png";
    } else if (desc === "scattered clouds") {
        weatherImage.src = "imgResource/clouds.png";
    } else if (desc === "rain") {
        weatherImage.src = "imgResource/rain.png";
    } else if (desc === "thunderstorm") {
    weatherImage.src = "imgResource/clouds.png";
    } else if (desc === "snow") {
        weatherImage.src = "imgResource/snow.png";
    } else if (desc === "mist") {
            weatherImage.src = "imgResource/mist.png";
    }
    // } else if (desc === "few clouds") {
    //     weatherImage.src = "https://cdn-icons-png.flaticon.com/512/3536
    // }
} 