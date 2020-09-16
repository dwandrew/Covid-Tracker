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
        let data = Global.globalData
        div.innerHTML =""
        let h3 = document.createElement("h3")
        h3.innerText = location["country"]
        let h4 = document.createElement("h4")
        let dateTime = location["date"].split("T")
        h4.innerText = `Information up to date as of: ${dateTime[1].slice(0, -1)}, ${dateTime[0]}`
        let p = document.createElement("p")
        p.innerHTML = `New Confirmed cases number : ${location["newConfirmed"]} <br>
        <br>
        New Deaths number : ${location["newDeaths"]} <br> 
        Percent of Global Deaths: ${((location["newDeaths"]/data["NewDeaths"]) *100).toFixed(2)}%<br>
        <br>
        New Recovered number : ${location["newRecovered"]} <br>
        Percent of Global Recovered: ${((location["newRecovered"]/data["NewRecovered"]) *100).toFixed(2)}%<br>
        <br>
        Total Confirmed cases number : ${location["totalConfirmed"]} <br>
        Percent of Total Global Confirmed cases : ${((location["totalConfirmed"]/data["TotalConfirmed"]) *100).toFixed(2)}%<br>
        <br>
        Total Deaths number : ${location["totalDeaths"]} <br>
        Percent ot Total Global Deaths: ${((location["totalDeaths"]/data["TotalDeaths"]) *100).toFixed(2)}%<br>
        <br>
        Total Recovered number : ${location["totalRecovered"]}<br>
        Percent of Total Recovered: ${((location["totalRecovered"]/data["TotalRecovered"]) *100).toFixed(2)}%<br>`
        div.appendChild(h3)
        div.appendChild(h4)
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