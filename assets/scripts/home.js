console.log('home function');

// add retrieve and render bookmarked countries

// home search submit listener

$('#home-form').on('submit', function(){
    event.preventDefault();
    var searchVal = $('#search-country-home').val();
    country = searchVal.trim();
    country = country.toLowerCase();
    // exit function if input is empty
    if (country === ''){
        return;
    }

    console.log(country);
    $('#search-country-home').val('');
    localStorage.setItem('current country', country);
    window.location.href="dashboard/index.html"; //navigate to dashboard
});

//home nav search

$('#nav-form-home').on('submit', function(){
    event.preventDefault();
    var searchVal = $('#search-nav').val();
    country = searchVal.trim();
    country = country.toLowerCase();
    // exit function if input is empty
    if (country === ''){
        return;
    }

    console.log(country);
    $('#search-nav').val('');
    localStorage.setItem('current country', country);
    window.location.href="dashboard/index.html"; //navigate to dashboard
});