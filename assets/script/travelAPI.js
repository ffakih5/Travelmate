
var country = "ssss"

// Search click 
$(".search-button").on("click", function () {
    getData()})


function getData () {
    country = $(".search-input").val()
var travelAPI = "https://travelbriefing.org/" + country +"?format=json"
$.ajax({
    url:travelAPI,
    method: "GET"
}).then(function(responseStr) {
    // Turn response string to object
    var response = JSON.parse(responseStr)
    console.log(response)
    // Dashboard data
$(".header-country").text(response.names.name)
$("#official-language").text(response.language[0].language);
$("#country-code").text(response.telephone.calling_code);
$("#travel-advice-text").text(response.advise.CA.advise);
$("#travel-advice-link").text(response.advise.CA.url)
$(".water-status").text(response.water.short);

// $(".curren").text(response.currency.name);


// var language = $("<span id='official-language'>").text("Official language: " + response.language[0].language);
// var countryCode = $("<span id='country-code'>").text("Telephone Code: " + response.telephone.calling_code);
// var travelAdv = $("<p id='travel-advice-text'").text("Travel advice: " + response.advise.CA.advise);
// var adviceLink = $("id='travel-advice-link'").text("Details :" + response.advise.CA.url)
// var water = $("<p>").text("Water: " + response.water.short);
// var currency = $("<p>").text("Currency: " + response.currency.name);

// $("body").append(timezone)
// $("body").append(language)
// $("body").append(countryCode)
// $("body").append(travelAdv)
// $("body").append(adviceLink)
// $("body").append(water)
// $("body").append(currency)

$("body").append("<hr>")
// Neighbours
$.each(response.neighbors, function (x,y) {
    var neighbours = $("<p>").text("Neighbour: " + y.name);
        $("body").append(neighbours)
})
$("body").append("<hr>")
// Average temperature
$.each(response.weather, function (x,y) {
    var temperature = $("<p>").text(x+ " :" + JSON.parse(y.tAvg).toFixed(2) + "°C");
        $("body").append(temperature)
})

// Current month js
    })


    console.log(country)
}
