

{
    // Grab the form
    let form = document.getElementById('cityForm');
    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault();
        // Get the input data from the form
        let inputCity = e.target.cityName.value;
        // Get country info from the input data
        let city = await getWeatherInfo(inputCity);
        // Build and add country card to display
        buildWeatherCard(city)
        e.target.cityName.value = '';
    }

    // Add handleSubmit function as listener to submit even on form
    form.addEventListener('submit', handleSubmit);


    async function getWeatherInfo(cityName){
        try{
            let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=17a14b935273ad3a56648c05de62e04f&units=imperial`)
            let data = await res.json()
            console.log(data)
            return data
        } catch(err) {
            console.error(err)
        }
    }

            // Function to display card and city elements
        function buildCityCard(cityObj){
            // Create the card div
            const card = document.createElement('div');
            card.className = 'card';

            // Create card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            // City Weather and elements
            const cityTitle = document.createElement('h5');
            cityTitle.className = 'card-title'
            cityTitle.innerHTML = cityObj.name;
            
            const temperature = document.createElement('p');
            temperature.className = 'card-text'
            temperature.innerHTML = `Current Temperature: ${Math.round(cityObj.main['temp'])}°F`;

            const feels_like = document.createElement('p');
            feels_like.className = 'card-text'
            feels_like.innerHTML = `Feels Like: ${Math.round(cityObj.main['feels_like'])}°F`;

            const max = document.createElement('p');
            max.className = 'card-text'
            max.innerHTML = `Today's High: ${Math.round(cityObj.main['temp_max'])}°F`;

            const min = document.createElement('p');
            min.className = 'card-text'
            min.innerHTML = `Today's Low: ${Math.round(cityObj.main['temp_min'])}°F`;

            const humidity = document.createElement('p');
            humidity.className = 'card-text'
            humidity.innerHTML = `Humidity: ${Math.round(cityObj.main['humidity'])}`;
        
            // Append title and population to card body
            cardBody.append(cityTitle);
            cardBody.append(temperature);
            cardBody.append(feels_like)
            cardBody.append(max);
            cardBody.append(min);
            cardBody.append(humidity);

            // Add card body to card div
            card.append(cardBody);

            // Create our column for the row
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-3'

            // Add the card to the column
            col.append(card)

            // city display row
            const cityDisplay = document.getElementById('display');

            // Add the new column to our display
            cityDisplay.append(col);
            }
}
// getWeatherInfo(cityName) 