class apiSearch {
    #apiKey = "YH4HT79Z27LLQYZYYNYT2C57Z";
    location;
    weatherCondition;
    temperature;
    humidity;
    iconName;

    async getWeather(location) {

        try {
            const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.#apiKey}&include=current`);
            const weatherData = await weatherResponse.json();
            this.location = weatherData.address;
            let conditionString = weatherData.currentConditions.conditions;
            this.weatherCondition = conditionString.replace(/\b\w/g, c => c.toUpperCase());
            this.temperature = weatherData.currentConditions.temp;
            this.humidity = Math.floor(weatherData.currentConditions.humidity);
            this.iconName = weatherData.currentConditions.icon + ".svg";
        }
        catch (error) {
            console.error("An error occurred: ", error.message);
        }
        
    }

    convertToCelsius(temperature) {
        this.temperature = Math.floor((temperature - 32) * (5/9));
    }

    convertToFahrenheit(temperature) {
        this.temperature = Math.floor((temperature * (9/5)) + 32);
    }
}

export default apiSearch;