//BOOKMARK FUNCTIONALITY
var savedCountries;
var savedCountryClick;
var currentCountry = $('.header-country').text();
var countriesListEl = $('.countries-list');

//display saved list in nav 
function renderSavedCountries(){
    countriesListEl.html('');
    savedCountries = JSON.parse(localStorage.getItem('bookmarked countries'));
    //console.log(savedCountries);

    if (savedCountries === null || savedCountries.length === 0) {
        savedCountries = [];
        var countriesListPlaceholder = $('<li class="countries-placeholder">');
        countriesListPlaceholder.text('Bookmark searched countries to add here');
        countriesListEl.append(countriesListPlaceholder);
    } else if (savedCountries.length > 0) {
        for(i = 0; i < savedCountries.length; i++){
            savedCountryItem = $('<li class="uk-flex uk-flex-between uk-flex-middle saved-country">');
            savedCountryClick = $('<div class="saved-country-click">'); //adding extra wrapper around the text for event listener
            savedCountryClick.text(savedCountries[i]);
            savedCountryItem.append(savedCountryClick);
    
            var trashButton = $('<i class="far fa-trash-alt fa-xs" data-country=' + '"' + savedCountries[i] + '">');
            savedCountryItem.append(trashButton);

            countriesListEl.append(savedCountryItem);
        } 
    }  
}

renderSavedCountries();

    // SAVE/UNSAVE COUNTRIES WITH BOOKMARK BUTTON
$('.bookmark').on('click', function(){ // how to distinguish between saving and deleting...

    country = $('#header-country').text();
    var checkarray = jQuery.inArray(country, savedCountries);

    if (checkarray > -1) { //IF ALREADY SAVED
        $(this).removeClass('far fas');
        $(this).addClass('far');
        savedCountries = $.grep(savedCountries, function(value){
            return value !== country;
        });
    } else { //IF NOT SAVED
        $(this).removeClass('far fas');
        $(this).addClass('fas');
        savedCountries.push(country);
    }

    console.log(savedCountries);
    localStorage.setItem('bookmarked countries', JSON.stringify(savedCountries));
    renderSavedCountries();
});

// saved countries listener - OK

$(document.body).on('click', '.saved-country-click', function(){
    country = $(this).text();
    localStorage.setItem('current country', country);
    goToDashboard();
    getTravelData();
});

// trash button function

$(document.body).on('click', '.fa-trash-alt', function(){
   
    country = $(this).siblings().text();

    if (country === $('.header-country').text()) {
        $('.bookmark').removeClass('far fas');
        $('.bookmark').addClass('far');
    }

    savedCountries = $.grep(savedCountries, function(value){
        return value !== country;
    });
    localStorage.setItem('bookmarked countries', JSON.stringify(savedCountries));
    renderSavedCountries();   
});
