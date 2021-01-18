console.log('connected');

var savedCountries = [];
var currentCountry = $('.header-country').text();
var countriesListEl = $('.countries-list');

//display saved list in nav 
function renderSavedCountries(){
    countriesListEl.html('');
    for(i = 0; i < savedCountries.length; i++){
        savedCountryItem = $('<li class="uk-flex uk-flex-between uk-flex-middle saved-country">');
        savedCountryItem.text(savedCountries[i]);
        countriesListEl.append(savedCountryItem);

        var trashButton = $('<i class="far fa-trash-alt fa-xs" data-country=' + '"' + savedCountries[i] + '">');
        savedCountryItem.append(trashButton);
    }
}

//save current country when bookmark is clicked
$('.far').on('click', function(){ // how to distinguish between saving and deleting...
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

