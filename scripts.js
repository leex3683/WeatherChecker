let APIKey = 'f1bb294bcd5a2c18f9c57262deef0ea8';
let inputElSearch = document.querySelector('.searchInput');
let sectionElForecast = document.querySelector('.forecast');
let buttonEl = document.querySelector('.submitInput');
let weatherHeaderEl = document.querySelector('.weather-header');
let todayTempEl = document.querySelector('.today-temp');
let todayWindEl = document.querySelector('.today-wind');
let todayHumidityEl = document.querySelector('.today-humidity');
let todayPicEl = document.querySelector('.today-pic');
let hist0 = document.querySelector('.a0');
let hist1 = document.querySelector('.a1');
let hist2 = document.querySelector('.a2');
let hist3 = document.querySelector('.a3');
let hist4 = document.querySelector('.a4');
let buttonElh = $('.dropdown-item');
let store = [];
today = dayjs();

//Clicking drop down options pulls weather from API
buttonElh.on('click', function () {

  let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + $(this).text() + '&appid=f1bb294bcd5a2c18f9c57262deef0ea8'
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //wipe forecast cards
      sectionElForecast.textContent = "";
      weatherHeaderEl.textContent = '';
      todayPicEl.textContent = '';
      console.log(data)
      for (let i = 0; i < data.list.length; i++) {
        for (let j = 0; j < 6; j++) {
          if (j == 0 && i == 0) {
            //Create Today's weather card (j = 0)
            let h4El = document.createElement('h4');
            weatherHeaderEl.appendChild(h4El).textContent = inputElSearch.value + " | " + data.list[i].dt_txt;
            todayTempEl.textContent = "Temp: " + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + 32) + "°F";
            todayWindEl.textContent = "wind: " + data.list[i].wind.speed + " MPH";
            todayHumidityEl.textContent = "humidity: " + data.list[i].main.humidity + '%';
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png');
            imgEl.setAttribute('alt', 'weather icon');
            todayPicEl.appendChild(imgEl);
          }
          else {
            if (data.list[i].dt_txt.includes(today.add(j, 'day').format('YYYY-MM-D')) && data.list[i].dt_txt.includes('12:00:00')) {
              //create forecast cards (j = [1,6])
              let divEl1 = document.createElement('div');
              let divChEl1 = document.createElement('div');
              let divChEl2 = document.createElement('div');
              let h5El = document.createElement('h5');
              let pEl1 = document.createElement('p');
              let pEl2 = document.createElement('p');
              let imgEl = document.createElement('img');
              imgEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png');
              imgEl.setAttribute('alt', 'weather icon');
              divChEl2.appendChild(imgEl);
              divChEl2.appendChild(h5El).textContent = "Temp: " + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + 32) + "°F";
              divChEl2.appendChild(pEl1).textContent = "wind: " + data.list[i].wind.speed + " MPH";
              divChEl2.appendChild(pEl2).textContent = "humidity: " + data.list[i].main.humidity + '%';
              divEl1.appendChild(divChEl1).textContent = data.list[i].dt_txt;
              divEl1.appendChild(divChEl2);
              sectionElForecast.appendChild(divEl1);
              divEl1.setAttribute('class', 'card bg-light mb-3');
              divChEl1.setAttribute('class', 'card-header');
              divEl1.setAttribute('style', 'max-width: 18rem;');
              divChEl2.setAttribute('class', 'card-body');
              h5El.setAttribute('class', 'card-title');
              pEl1.setAttribute('class', 'card-text');
              pEl2.setAttribute('class', 'card-text');
            };
          }
        }
      }
    })
    .catch(function () {
      alert("Please enter a valid city");
    })
})

//clicking the submit button also pulls weather from API
buttonEl.addEventListener("click", function () {

  
  storeSearches()

  let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputElSearch.value + '&appid=f1bb294bcd5a2c18f9c57262deef0ea8'
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log('Fetch Response \n-------------');
      // console.log(data.list);

      //wipe forecast cards
      sectionElForecast.textContent = "";
      weatherHeaderEl.textContent = '';
      todayPicEl.textContent = '';

      for (let i = 0; i < data.list.length; i++) {
        for (let j = 0; j < 6; j++) {
          if (j == 0 && i == 0) {
            //Create Today's weather card (j = 0)
            let h4El = document.createElement('h4');
            weatherHeaderEl.appendChild(h4El).textContent = inputElSearch.value + " | " + data.list[i].dt_txt;
            todayTempEl.textContent = "Temp: " + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + 32) + "°F";
            todayWindEl.textContent = "wind: " + data.list[i].wind.speed + " MPH";
            todayHumidityEl.textContent = "humidity: " + data.list[i].main.humidity + '%';
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png');
            imgEl.setAttribute('alt', 'weather icon');
            todayPicEl.appendChild(imgEl);
          }
          else {
            if (data.list[i].dt_txt.includes(today.add(j, 'day').format('YYYY-MM-D')) && data.list[i].dt_txt.includes('12:00:00')) {
              //create forecast cards (j = [1,6])
              let divEl1 = document.createElement('div');
              let divChEl1 = document.createElement('div');
              let divChEl2 = document.createElement('div');
              let h5El = document.createElement('h5');
              let pEl1 = document.createElement('p');
              let pEl2 = document.createElement('p');
              let imgEl = document.createElement('img');
              imgEl.setAttribute('src', 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png');
              imgEl.setAttribute('alt', 'weather icon');
              divChEl2.appendChild(imgEl);
              divChEl2.appendChild(h5El).textContent = "Temp: " + Math.round((data.list[i].main.temp - 273.15) * (9 / 5) + 32) + "°F";
              divChEl2.appendChild(pEl1).textContent = "wind: " + data.list[i].wind.speed + " MPH";
              divChEl2.appendChild(pEl2).textContent = "humidity: " + data.list[i].main.humidity + '%';
              divEl1.appendChild(divChEl1).textContent = data.list[i].dt_txt;
              divEl1.appendChild(divChEl2);
              sectionElForecast.appendChild(divEl1);
              divEl1.setAttribute('class', 'card bg-light mb-3');
              divChEl1.setAttribute('class', 'card-header');
              divEl1.setAttribute('style', 'max-width: 18rem;');
              divChEl2.setAttribute('class', 'card-body');
              h5El.setAttribute('class', 'card-title');
              pEl1.setAttribute('class', 'card-text');
              pEl2.setAttribute('class', 'card-text');
            };
          }
        }
      }
      
    })
    .catch (function() {
      alert("Please enter a valid city");
    })    
});

function storeSearches() {
  //check if local storage is null or undefined. If so, setup a blank array 'store' and push first item to it
  if (JSON.parse(localStorage.getItem("history")) === undefined || JSON.parse(localStorage.getItem("history")) === null) {

    store = [];
    store.push(inputElSearch.value);
    localStorage.setItem("history", JSON.stringify(store));

    //If the value is already in the array ignore it
  } else if (JSON.parse(localStorage.getItem("history")).includes(inputElSearch.value)) {

    return;
    //we're only storing the last 5 unique values searched
  } else if (JSON.parse(localStorage.getItem("history")).length < 5) {

    store.push(inputElSearch.value);
    localStorage.setItem("history", JSON.stringify(store));
  } else {

    store.shift();
    store.push(inputElSearch.value);
    localStorage.setItem("history", JSON.stringify(store));
  }
  grabValues();
}

//places local storage in an array 'store' if exists
function grabValues() {

  if (JSON.parse(localStorage.getItem("history")) === undefined || JSON.parse(localStorage.getItem("history")) === null) {
    console.log("null")
    return;
  } else {

    store = JSON.parse(localStorage.getItem("history"));

    hist0.textContent = JSON.parse(localStorage.getItem("history"))[0];
    hist1.textContent = JSON.parse(localStorage.getItem("history"))[1];
    hist2.textContent = JSON.parse(localStorage.getItem("history"))[2];
    hist3.textContent = JSON.parse(localStorage.getItem("history"))[3];
    hist4.textContent = JSON.parse(localStorage.getItem("history"))[4];
  }
}

grabValues();

