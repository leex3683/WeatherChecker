let APIKey = 'b8a8e7dd16a33d470c7849ca148ec3f4';
let inputElSearch = document.querySelector('.searchInput');
let sectionElForecast = document.querySelector('.forecast');
let buttonEl = document.querySelector('.submitInput');

today = dayjs();
console.log(today.format('dddd, MMMM, D'));

buttonEl.addEventListener("click", function () {
let requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputElSearch.value + '&appid=b8a8e7dd16a33d470c7849ca148ec3f4'
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Response \n-------------');
      console.log(data);
    });

let divEl1 = document.createElement('div');
let divChEl1 = document.createElement('div');
let divChEl2= document.createElement('div');
let hEl = document.createElement('h5');
let pEl= document.createElement('p');

divChEl2.appendChild(hEl).textContent = "this is hel"
divChEl2.appendChild(pEl).textContent = "this is pel"


divEl1.appendChild(divChEl1).textContent = "this is header";
divEl1.appendChild(divChEl2);

sectionElForecast.appendChild(divEl1);

divEl1.setAttribute('class', 'card bg-light mb-3');
divChEl1.setAttribute('class', 'card-header');
divEl1.setAttribute('style', 'max-width: 18rem;');


divChEl2.setAttribute('class', 'card-body');
hEl.setAttribute('class', 'card-title');
pEl.setAttribute('class', 'card-text');


});











