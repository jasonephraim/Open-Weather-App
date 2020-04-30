// define variables

let cityWeatherInfo = document.getElementById("cityWeatherInfo");
let cityInputField = document.getElementById("cityInputField");
let citySubmitButton = document.getElementById("citySubmitButton");

// fetch from openweathermap.org api

citySubmitButton.addEventListener("click", function () {
  let callAddress = `http://api.openweathermap.org/data/2.5/weather?q=${cityInputField.value}&appid=7a4e4f6a3f4efcdb0badfcf426957c65&units=imperial`;
  fetch(callAddress)
    .then((response) => response.json())
    .then((cityWeatherObject) => {
      console.log(cityWeatherObject);
      // let description = convertArray(cityWeatherObject.weather[0].description)
      let weatherHTML = `<div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${cityWeatherObject.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${cityWeatherObject.weather[0].description}</h6>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Maximum Temperature: ${cityWeatherObject.main.temp_max}°F</li>
                                    <li class="list-group-item">Minimum Temperature: ${cityWeatherObject.main.temp_min}°F</li>
                                    <li class="list-group-item">Feels like: ${cityWeatherObject.main.feels_like}°F</li>
                                </ul>
                            </div>
                        </div>`;
      cityWeatherInfo.innerHTML = weatherHTML;
    });
});
