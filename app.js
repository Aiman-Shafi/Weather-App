
		// Hiding Default Information

        document.getElementById("weather-info").style.display = 'none';

        // Getting search Result
        const button = document.getElementById('search-Btn');
        button.addEventListener('click', ()=> {
        const city = document.getElementById('search-input').value;
        document.getElementById("weather-info").style.display = 'block';	
        
        //Calling weather API
        weatherUpdate(city);

        document.getElementById('search-input').value = '';
        })

        // Function for fetching data

        function weatherUpdate(cityName) {
            // body...
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+`${cityName}`+`&appid=d08f838c0e642c739a81545443433a6a`)

            .then(res => res.json())
            .then(data => {

	            document.getElementById('weather-icon').src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	            document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
	            document.getElementById('temperature').innerText = Math.round(`${data.main.temp}` - 273);
	            document.getElementById('weather-condition').innerText = `${data.weather[0].main} (${data.weather[0].description})`;
            })
        // Return Error
            .catch(error => alert('Enter Valid City Name')); 
        }
