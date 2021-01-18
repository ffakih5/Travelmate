// Changes:
// Please add:
// 1) line 31 within the ajax response in getData() function (pls ignore the rest of the changes I made within that function);
// 2) everything under line 56


// Search click 
$(".search-button").on("click", function () {
    getData();
});


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


getRate(response.currency.code)



// $(".curren").text(response.currency.name);



$("body").append("<hr>")

$(".neighbours-card").empty()
$(".neighbours-card").append("<h2>neighbours</h2>")
// Neighbours
$.each(response.neighbors, function (x,y) {
    
    var neighbours = $("<p>").text(y.name);
        $(".neighbours-card").append(neighbours)
})
$("body").append("<hr>")
// Average temperature
    
})
}

// ******************************* CURRENCY EXCHANGE SECTION *******************************

// Currency function that take the currency of the current country as the quote currency for calculation 
function getRate (quote) {
    // get currency API
    var currencyAPI = "https://api.ratesapi.io/api/latest?base=" + quote;
    $.ajax({
        url:currencyAPI,
        method: "GET"
    }).then(function(response) { 
        base = response.base
    // Sort the response object into alphabetical order
        let list = response.rates;
        function sortObj(obj) { 
            return Object.keys(obj).sort().reduce(function (result, key) {
              result[key] = obj[key];
              return result;
            }, {});
          }
        let sortedList = sortObj(list);
        console.log(sortedList);
    // Append currency options to the dropdown list
        $.each(sortedList, function (quote, rate) {
            var option = $("<option>").text(quote).val(rate)
            $("#currency-list").append(option)
        })
        
    })    


    // Append children within the card
    $(".currency-card").empty()
    var quoted = $("<p> <span id = 'quoted-amount'></span> <span id = 'quote-currency'></span></p>");    

    var currencyList = $("<select id = 'currency-list'>");
        $(".currency-card").append("<h2>currency</h2>")
        .append("<p>This country uses " + quote)
        .append("<input id = 'inputAmount'>")
        .append(currencyList)
        .append(quoted)
        $("#quote-currency").text(quote);
    // Set timer to auto calculate exchanged amount every 0.1s
    setInterval( function () {
        var currentRate = $("#currency-list option:selected").val()
        var inputAmount = $("#inputAmount").val();
        var quotedAmount = calculate(inputAmount,currentRate)
        $("#quoted-amount").text(quotedAmount.toFixed(2))
    },100)
    // Maths function for exchange calculation and result display
    function calculate(amount, rate) {
        var finalAmount = amount/rate
        return finalAmount
        ;
    }
}
