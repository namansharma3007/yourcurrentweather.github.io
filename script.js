let weather = {
    apiKey:"c75922bf9e3274652f0112981a5560f8",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city
            +"&units=metric&appid="
            +this.apiKey
        ).then(response=>response.json())
        .then(data=>this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".humidity").innerHTML="Humidity: "+humidity+"%";
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".wind").innerHTML="Wind speed: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button")
.addEventListener("click",function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function (event){
    if(event.key=="Enter"){
        weather.search();
    }
});

let initialization = {
    cities: ["london", "delhi", "dehradun", "chandigarh", "los angeles", "amsterdam", "hyderabad", "mumbai", "chennai", "new york", "patna", "rome", "tokyo", "moscow", "bhopal", "allahabad", "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson"],
    randomCity: function () {
        var index = Math.floor(Math.random() * this.cities.length);
        return this.cities[index];
    }
};

weather.fetchWeather(initialization.randomCity());
