function currencyConvert(){
    var currencyAPIKey = 'f077f16bffb7045f4546';
    var yourCurrency = 'AUD';
    localStorage.setItem('current currency', yourCurrency);
    var ForexURL = 'https://free.currconv.com/api/v7/convert?apiKey=' + currencyAPIKey + '&q=' + yourCurrency + '_' + currencyCode + '&compact=y';
    var rate;
    //console.log('function called');


    $.ajax({
        url:ForexURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        //console.log(rate);
            rate = response[yourCurrency + '_' + currencyCode].val; 
            var inputAmount = $("#currency-input").val();
            var convertedAmount = (inputAmount*rate).toFixed(2);
            $("#convert-result").text(convertedAmount);
    });

   setInterval(function(){
        localStorage.getItem('current currency');
        var selectedCurrency = $(".currency-select").val();
        if(selectedCurrency === yourCurrency){
           
        } else {
            localStorage.setItem('current currency', selectedCurrency);
            yourCurrency = selectedCurrency;
            var newURL = 'https://free.currconv.com/api/v7/convert?apiKey=' + currencyAPIKey + '&q=' + yourCurrency + '_' + currencyCode + '&compact=y';
            $.ajax({
                url:newURL,
                method: "GET"
            })
            .then(function(response){
                    rate = response[yourCurrency + '_' + currencyCode].val; 
            });
        }
    }, 300);

    setInterval(function(){
        var inputAmount = $("#currency-input").val();
        var convertedAmount = (inputAmount*rate).toFixed(2);
        $("#convert-result").text(convertedAmount);
    }, 100);
}
