const submitBtn = document.getElementById("submitBtn");
const cityName =  document.getElementById("cityName");
const outputVal = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getWeatherInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        outputVal.innerText = `Please Enter a City Name!`;
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c0e67022cf9cf72290f64c1a07919629`
            const response  = await fetch(url);
            const data = await response.json();
            const arrayData = [data];
            city_name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country} Lat:${arrayData[0].coord.lat} Lon:${arrayData[0].coord.lon}`;
            temp.innerText = arrayData[0].main.temp;
            const tempMood = arrayData[0].weather[0].main;
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }else if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #f1f2f6;'></i>"
            }
            console.log(data);
        }catch{
            outputVal.innerText = `Please enter the correct CITY name!`;   
        }
    }
}

submitBtn.addEventListener("click", getWeatherInfo);