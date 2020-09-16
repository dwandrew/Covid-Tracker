const ALPHABETARRAY = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let letterSelect = () => document.getElementById("country-letter")
let countrySelect = () => document.getElementById('country')
let button = () => document.getElementById("show-data")
let pieDisplay = false

document.addEventListener('DOMContentLoaded', (event) => {
    getCovidData()
    populateLetterFilters(letterSelect(), ALPHABETARRAY)
    showCountry()
    displayChart()
} )



function getCovidData(){
    fetch("https://api.covid19api.com/summary", {
        headers: {
            "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data["Message"])
        if (!data["Countries"]){
            let div =document.getElementById('global-div')
            div.innerHTML = data["Message"]
        }
        else {
        Country.createAllCountries(data["Countries"])
        Global.create(data["Global"])
        Global.displayGlobalData()
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        }
    })
}

function populateLetterFilters(list, letters){
    for (let i = 0; i<letters.length; i++){
        let option = document.createElement("option")
        option.innerText = letters[i]
        option.value = letters[i]
        list.add(option)
        }
        list.addEventListener('change', (event) => {
            countrySelect().innerHTML = ""
            console.log(event.target.value)
            let countryList = Country.all.filter(c => c["country"][0] === event.target.value)
            countryList.forEach(country => {
            let option = document.createElement("option")
            option.innerText = country["country"]
            option.value = country["country"]
            countrySelect().add(option)
            })
        })
}

function showCountry(){
    button().addEventListener("click", (event) => {
        event.preventDefault()
        Country.displayCountryData(countrySelect().value)
    })
}

function displayChart(){
    let button  = document.getElementById("show-pie-chart")
    let chart = document.getElementById("piechart")
    button.addEventListener('click', (event) => {
        event.preventDefault()
        if (pieDisplay === false){
            pieDisplay = true
            chart.style = "display: block"
        }
        else {
            pieDisplay = false
            chart.style = "display: none"
        } 
    })

}

function drawChart() {
    let dataTable = [['Cases', 'Total Deaths Number']]
    Country.all.forEach(country => dataTable.push([country["country"], country["totalDeaths"]]))
    var data = google.visualization.arrayToDataTable(dataTable);
    var options = {
      title: 'Total Deaths Broken Down by Country',
      width: 800,
      height: 800
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}