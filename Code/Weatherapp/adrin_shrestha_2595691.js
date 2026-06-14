let searchBox=document.getElementById("searchBox");
let button=document.getElementById("button");
let city=document.getElementById("city");
let country=document.getElementById("country");
let temp=document.getElementById("temp");
let condition=document.getElementById("condition");
let description=document.getElementById("description");
let feelsLike=document.getElementById("feelsLike");
let humidity=document.getElementById("humidity");
let pressure=document.getElementById("pressure");
let wind=document.getElementById("wind");
let clouds=document.getElementById("clouds");
let icon=document.getElementById("icon");
async function getWeatherData(cityName){
    try{
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=587d6e546c57a43c97a0b29fa0f398a8`);
        console.log(response);
        let data=await response.json(); // converting json data into js
        console.log(data);
        city.innerText=`${data.name}`;
        country.innerText=`${data.sys.country}`;
        temp.innerText=`${(data.main.temp - 273.15).toFixed(1)} °C`;
        condition.innerText=`${data.weather[0].main}`;
        description.innerText=`${data.weather[0].description}`;
        feelsLike.innerText=`Feels like: ${(data.main.feels_like - 273.15).toFixed(1)} °C`;
        humidity.innerText=`Humidity: ${data.main.humidity}%`;
        pressure.innerText=`Pressure: ${data.main.pressure} hPa`;
        wind.innerText=`Wind speed: ${data.wind.speed} m/s`;
        clouds.innerText=`Cloudiness: ${data.clouds.all}%`;
        icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    catch(error){
        console.log(error);
        city.innerText=`City not found`;
    }
}
getWeatherData("Dudley");
button.addEventListener("click", function(){
    let searchInput=document.getElementById("searchBox").value;
    getWeatherData(searchInput);
});
let now=new Date();
let nownow=now.toLocaleString();
let timedate=document.getElementById("timedate");
timedate.innerText=`${nownow}`;