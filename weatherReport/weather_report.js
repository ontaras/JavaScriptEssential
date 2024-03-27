function showweatherDetails(event) {
    event.preventDefault();

     const lat = document.getElementById('lat').value;
     const lon = document.getElementById('lon').value;
      const apiKey = 'e4f8babacbb4ee3834ff6f96869fffba';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp}  &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
      })

      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );