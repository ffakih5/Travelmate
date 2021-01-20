function currencyConvert(){
    var currencyAPIKey = 'f077f16bffb7045f4546';
    var yourCurrency = $(".currency-select option:selected").val();
    var ForexURL = 'https://free.currconv.com/api/v7/convert?apiKey=' + currencyAPIKey + '&q=' + yourCurrency + '_' + currencyCode + '&compact=y';
    //console.log('function called');
    $.ajax({
        url:ForexURL,
        method: "GET"
    })
    .then(function(response){
        //console.log(response);
        //console.log(rate);
            var rate = response[yourCurrency + '_' + currencyCode].val; 
            var inputAmount = $("#currency-input").val();
            var convertedAmount = (inputAmount*rate).toFixed(2);
            $("#convert-result").text(convertedAmount);
    })
}
