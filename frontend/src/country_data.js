class Country{
    static all = []

    constructor(country, countryCode, slug, newConfirmed, totalConfirmed, newDeaths, totalDeaths, newRecovered, totalRecovered, date){
        this.country = country; 
        this.countryCode = countryCode; 
        this.slug = slug; 
        this.newConfirmed = newConfirmed; 
        this.totalConfirmed = totalConfirmed; 
        this.newDeaths = newDeaths; 
        this.totalDeaths = totalDeaths; 
        this.newRecovered = newRecovered; 
        this.totalRecovered = totalRecovered; 
        this.date = date;
    }

    static create(data){
        let country = new Country(data["Country"], data["CountryCode"], data["Slug"], data["NewConfirmed"], data["TotalConfirmed"], data["NewDeaths"], data["TotalDeaths"], data["NewRecovered"], data["TotalRecovered"], data["Date"])
        Country.all.push(country)
        return country
    }

    static createAllCountries(countries_data){
        countries_data.forEach(country => {
            Country.create(country)
        });

    }

    static displayCountryData(country){
        let location = Country.all.find(c => c["country"] === country)
        let div = document.getElementById("country-div")
        div.innerHTML =""
        let h3 = document.createElement("h3")
        h3.innerText = location["country"]
        let p = document.createElement("p")
        p.innerHTML = `New Confirmed cases number : ${location["newConfirmed"]} <br>
        New Deaths number : ${location["newDeaths"]} <br>
        New Recovered number : ${location["newRecovered"]} <br>
        Total Confirmed cases number : ${location["totalConfirmed"]} <br>
        Total Deaths number : ${location["totalDeaths"]} <br>
        Total Recovered number : ${location["totalRecovered"]}` 
        div.appendChild(h3)
        div.appendChild(p)
    }

    


}

// Country: "Swaziland";
//     CountryCode: "SZ",
//     Slug: "swaziland",
//     NewConfirmed: 24,
//     TotalConfirmed: 5128,
//     NewDeaths: 0,
//     TotalDeaths: 101,
//     NewRecovered: 27,
//     TotalRecovered: 4401,
//     Date: "2020-09-16T06:35:28Z",