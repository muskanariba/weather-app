
document.getElementById('searchbtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('input').value;
    const apiKey = 'ef3fcbfb945d00bafceade8eaac9da28';  

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
               
                document.querySelector('.temp').textContent = `${data.main.temp}°C`;
                document.querySelector('.city').textContent = data.name;
                document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
                document.querySelector('.wind').textContent = `${data.wind.speed} km/h`;
                document.getElementById('weather').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            } else {
                alert('City not found!');
            }
        })
        
}


