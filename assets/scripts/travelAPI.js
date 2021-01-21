console.log('connected');

var country;
var currencyCode;

// NAVIGATING TO DASHBOARD
function goToDashboard(){
    //if not on dashboard page, navigate to it
    var pathname = window.location.pathname;
    console.log(pathname);  // check pathname
    
    if(pathname !== '/Travelmate/dashboard/index.html'){ 
        window.location.pathname="/Travelmate/dashboard/index.html"; //navigate to dashboard
    } 
    
    if(pathname === '/Travelmate/dashboard/index.html'){ 
        location.reload(); //RELOAD DASHBOARD TO STOP INTERVAL
    }

    
    /*if(pathname !== '/Users/ferwicker/Documents/BOOTCAMP/PROJECT-1/TravelMate/dashboard/index.html'){ //LOCAL TESTING ONLY
        window.location.assign('/Users/ferwicker/Documents/BOOTCAMP/PROJECT-1/TravelMate/dashboard/index.html'); //navigate to dashboard
    }
    
    if(pathname === '/Users/ferwicker/Documents/BOOTCAMP/PROJECT-1/TravelMate/dashboard/index.html'){ //LOCAL TESTING ONLY
        location.reload(); //RELOAD DASHBOARD TO STOP INTERVAL
    } */
}

function getTravelData () { 

country = localStorage.getItem('current country');

//TRAVEL API
var travelAPI = "https://travelbriefing.org/" + country +"?format=json";

$.ajax({
    url:travelAPI,
    method: "GET"
})
.then(function(responseStr) {

    // Turn response string to object
    var response = JSON.parse(responseStr)
    console.log(response)

    // BOOKMARK BUTTON LOOK

    //check if it is saved
    country = response.names.name;

    var checkarray = jQuery.inArray(country, savedCountries);

    if (checkarray > -1) { // if in array fill button
        $('.bookmark').removeClass('far');
        $('.bookmark').removeClass('fas');
        $('.bookmark').addClass('fas'); 
    } else {                // if not saved use unmarked option
        $('.bookmark').removeClass('far');
        $('.bookmark').removeClass('fas');
        $('.bookmark').addClass('far');
    }


    // HEADER COUNTRY
    $("#header-country").text(response.names.name);
    // moved language and calling code to other api due to some small countries not having this value

    // TRAVEL ADVICE CARD
    if (response.advise.UA === undefined) {
        $("#travel-advice-text").text('No travel advice found.');
        $("#travel-advice-link").text('Search for travel advice');
        $("#travel-advice-link").attr('href', 'https://www.google.com/search?q=' + country + '+travel+advice');
        $("#travel-advice-link").attr('target', '_blank');
    } else {
        $("#travel-advice-text").text(response.advise.UA.advise); // australian advice - add what to do if undefined
        $("#travel-advice-link").text('See more');
        $("#travel-advice-link").attr('href', 'https://www.smartraveller.gov.au/search?search=' + country); //changed -- to search on aus website
    }

    // WATER CARD
    var waterStatus = response.water.short;
    
    if (waterStatus === 'safe') {
        $(".water-status").text(waterStatus);
        $('#water-icon').removeClass('fa-tint-slash');
        $('#water-icon').removeClass('fa-question');
        $('#water-icon').addClass('fa-tint');
    } else if(waterStatus === 'not safe') {
        $(".water-status").text(waterStatus);
        $('#water-icon').addClass('fa-tint-slash');
        $('#water-icon').removeClass('fa-tint');
        $('#water-icon').removeClass('fa-question');
    } else {
        $(".water-status").text('unknown');
        $('#water-icon').removeClass('fa-tint-slash');
        $('#water-icon').removeClass('fa-tint');
        $('#water-icon').addClass('fa-question');
    }

    // CURRENCY CARD
    $('#currency-country').text(response.names.name);
    $('#currency-text').text(response.currency.name);
    $('#currency-name').text(response.currency.name);
    $('#convert-result').text('');
    currencyCode = response.currency.code;
    $('#result-code').text(currencyCode);
    $("#currency-input").val('');
    currencyConvert();

    // NEIGHBOURS CARD
    $('#neighbours-list').html('');
    for(i = 0; i < 3; i++) {
        var neighbourItem = $('<li class="neighbour-country">');
        neighbourItem.text(response.neighbors[i].name);
        $('#neighbours-list').append(neighbourItem);
    }

    // WEATHER CARD
    // Current month js
    var currentMonth = moment().format('MMMM'); // returns name eg. January

    $('.month-btn').removeClass('active-month');
    $('#' + currentMonth).addClass('active-month');

    $('#avg-current-month').text(currentMonth);
    var temp = response.weather[currentMonth].tAvg;
    temp = parseInt(temp).toFixed(1);
    $('#temperature-current').text(temp + '°C');

    $('.month-btn').on('click', function(){
        currentMonth = $(this).attr('id');
        $('.month-btn').removeClass('active-month');
        $(this).addClass('active-month');

        $('#avg-current-month').text(currentMonth);
        var temp = response.weather[currentMonth].tAvg;
        temp = parseInt(temp).toFixed(1);
        $('#temperature-current').text(temp + '°C');
    });

        // SECOND API to get capital city, region, languages, calling codes (inside travelAPI to solve country name issue)
        var countryName = response.names.name; // full country name for search only
        // fix USA name issue
        if (countryName === 'United States') {
            countryName = 'USA';
        }

        var countryQueryURL = 'https://restcountries.eu/rest/v2/name/' + countryName;

        $.ajax({
            url:countryQueryURL,
            method: "GET"
        })
        .then(function(response){
            //console.log(response);
            $('#capital-city').text(response[0].capital);
            $('#region').text(response[0].subregion );
                
                // allowing for more than one language to display
                var languages = '';

                for (i = 0; i < response[0].languages.length; i++){
                    if (languages === ''){ // this if adds the comma in the correct place
                        languages = response[0].languages[i].name
                    } else {
                        languages = languages + ', ' + response[0].languages[i].name;
                    }
                }

                $("#official-language").text(languages);

            $("#country-code").text('+' + response[0].callingCodes[0]);
        });

});

};

// NAV SEARCH EVENT
// Changed search button click to form submit
$("#nav-form").on('submit', function () {
    event.preventDefault();
    currencyCode = '';
    var searchVal = $('#search-nav').val();
    country = searchVal.trim();
    country = country.toLowerCase();
    // exit function if input is empty
    if (country === ''){
        return;
    }
    localStorage.setItem('current country', country);
    $('#search-nav').val('');
    goToDashboard();
    getTravelData();

});

// mob search form event
$("#mob-nav-form").on('submit', function () {
    event.preventDefault();
    currencyCode = '';
    var searchVal = $('#mob-search-nav').val();
    country = searchVal.trim();
    country = country.toLowerCase();
    // exit function if input is empty
    if (country === ''){
        return;
    }
    localStorage.setItem('current country', country);
    $('#mob-search-nav').val('');
    goToDashboard();
    getTravelData();

});

// currency form event listener
$('#currency-form').on('submit', function(){
    event.preventDefault();
});

//neighbours event listener - OK

$(document.body).on('click', '.neighbour-country', function(){
    country = $(this).text();
    localStorage.setItem('current country', country);
    goToDashboard();
    getTravelData();
});

// --saved countries listener in bookmark script