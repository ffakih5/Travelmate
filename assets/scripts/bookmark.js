console.log('connected');

var savedCountries = [];
var currentCountry = $('.header-country').text();
var countriesListEl = $('.countries-list');

//display saved list in nav 
function renderSavedCountries(){
    countriesListEl.html('');
    for(i = 0; i < savedCountries.length; i++){
        savedCountryItem = $('<li class="saved-country">');
        savedCountryItem.text(savedCountries[i]);
        countriesListEl.append(savedCountryItem);
    }
}

//save current country when bookmark is clicked
$('.bookmark').on('click', function(){
    $(this).toggleClass('far');
    $(this).toggleClass('fas');

    var checkarray = jQuery.inArray(currentCountry, savedCountries);

    if (checkarray > -1) {
        return; //don't add button or save to array if already exists
    }

    savedCountries.push(currentCountry);
    console.log(savedCountries);
    renderSavedCountries();
});

