class Global {
    static globalData = ''

    constructor (NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered){
        this.NewConfirmed= NewConfirmed,
        this.TotalConfirmed = TotalConfirmed, 
        this.NewDeaths = NewDeaths, 
        this.TotalDeaths = TotalDeaths, 
        this.NewRecovered = NewRecovered, 
        this.TotalRecovered= TotalRecovered
    }
    
    static create(data){
    Global.globalData = new Global(data["NewConfirmed"], data["TotalConfirmed"], data["NewDeaths"], data["TotalDeaths"], data["NewRecovered"], data["TotalRecovered"])
    }

    static displayGlobalData(){
        let data = Global.globalData
        let div = document.getElementById("global-div")
        let p = document.createElement("p")
        p.innerHTML = `New Confirmed cases number : ${data["NewConfirmed"]} <br>
        New Deaths number : ${data["NewDeaths"]} <br>
        New Recovered number : ${data["NewRecovered"]} <br>
        Total Confirmed cases number : ${data["TotalConfirmed"]} <br>
        Total Deaths number : ${data["TotalDeaths"]} <br>
        Total Recovered number : ${data["TotalRecovered"]}` 
        div.appendChild(p)
    }
}
