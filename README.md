# TravlMate
TravlMate is a website for travel enthusiasts and bloggers to access helpful information that can aid planning for a trip or research for an article or post.<br>
The benefit of the site is that it is a one-stop-shop for information. It saves users time and effort having to search across many sites for a variety of information they might need. Instead, TravlMate is an easy to use service that instantly collates valuable facts in one place, including currency, water safety, neighbouring countries and much more.<br>
<i><b> Search for, learn about, and bookmark your destinations of interest all with one, easy-to-use site -  TravlMate. </i></b>


<br> <b>See Deployed Application Link: </b>
<a href="https://ffakih5.github.io/Travelmate/dashboard/index.html"> TravlMate </a>

## Table of contents
  - [Motivation](#motivation)
  - [User Story](#userstory)
  - [Acceptance Criteria](#acceptancecriteria)
  - [Process](#process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Credits](#credits)

## Motivation
The motivation behind this project stemmed from the shared yearning to pack up and go on a trip by the members of the group. 

We drew on our personal experiences with travel and brought to light what we consider to be the key elements to ensuring you have a successful trip, wherever your destination may be!

## User Story
AS A traveller/ blogger <br>
I WANT to access a dashboard with useful information about the country I intend to visit/share about. <br>
SO THAT I plan my trip accordingly. <br>

## Acceptance Criteria
<i>GIVEN a travel dashboard with form inputs 

WHEN I search for a country 
<br>THEN I am presented with an overview, currency, neighbours, travel advice, water quality and monthly average weather for that country<br>
WHEN I view the overview for that country<br>
THEN I am presented with the Capital city, spoken languages and country code<br>
WHEN I view the currency for that country
THEN I am presented with a list of the top 10 currencies used in the world/exchanged.<br>
WHEN I input an amount of AUD to exchange<br>
THEN I am presented with the amount in the currency for that country <br>
WHEN I click on the currency dropdown<br>
THEN I am presented with a list of optional currencies to exchange<br>
WHEN I view the neighbours for that country <br>
THEN I am presented with a list of countries<br>
WHEN I click on a neighbouring country<br>
THEN I can view the information for that country and bookmark it <br>
WHEN I view the travel advice for that country <br>
THEN I am presented with the type of precautions to exercise <br>
WHEN I click on the “see more” link in the travel advice <br>
THEN I am presented with the official travel advice page in separate browser window<br>
WHEN I view the water for that country <br>
THEN I am presented with a water-drop icon and “safe” prompting it is safe to drink tap water<br>
WHEN I view the water for that country <br>
THEN I am presented with a water-drop icon with a strike-through it and “not safe” prompting it is only safe to drink bottled water or unknown if the status is unknown<br>
WHEN I view the weather for that country <br>
THEN I am presented with the average weather for the current month and the button for current month changes to red<br>
WHEN I click on the month buttons in the weather <br>
THEN I am presented with the average weather and the button changes to red <br>
WHEN I click the bookmark icon <br>
THEN I am can add my searches to the “my countries list”<br>
WHEN I VIEW my countries <br>
THEN I am presented with a list of bookmarked Countries <br>
WHEN I open the travel dashboard <br>
THEN I am presented with the last searched country</i>


## Process
We began with concept creation centered around our Travel Briefing API. We knew we wanted an information hub for travellers, that would present a consolidated source of key travel insights for any country to make it easy to plan a trip or write a blog. 

We then came to the conclusion that the second API would be a currency converter as this was something we thought was missing from the Travel Brieifng API but important to our intended users.

We decided that we would need the site to have searchability as well as the ability to bookmark countries you had searched for before.


## Mockups
<b>Mobile Homepage</b></br>
![MobileHomepage](https://github.com/ffakih5/Travelmate/blob/main/assets/images/Screenshots/Mobile_Homepage.png?raw=true)


<b>Mobile Dashboard</b></br>
![MobileDashboard](https://github.com/ffakih5/Travelmate/blob/main/assets/images/Screenshots/Mobile_Dashboard.png?raw=true)

<b>Desktop Homepage</b></br>
![DesktopHomepage](https://github.com/ffakih5/Travelmate/blob/main/assets/images/Screenshots/Desktop_Homepage.png?raw=true)


<b>Desktop Dashboard</b></br>

## Built with
- [UI Kit](https://getbootstrap.com/)
- [JQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [Adobe XD](https://www.adobe.com/au/products/xd.html) (prototyping)
- [Travel Briefing API](https://travelbriefing.org/api) to pull country information
- [Exchange Rate API](https://ratesapi.io/) to convert currenices
- [Rest Countries API](https://restcountries.eu/) to display capital cities, regions and languages

## Features
- Search for any country 
- Automatically save search history 
- Bookmark countries to view later
- Display key information on a dashboard
- Convery currency to your chosen currency using current rates
- Display currency rates for the 10 most traded currencies
- About section to inform users of the purpose of the site
- Links to neighbouring countries to view or bookmark for later
- Links to search Google for travel information if it cannot be found by the API
- Mobile Responsive site


## Functionality </br>
<a href="https://ffakih5.github.io/Travelmate/dashboard/index.html"> TravlMate </a><br>
![TravlMate GIF](https)

## Credits
The search icon, bookmark icon and trash icon are from https://fontawesome.com/<br>
The images are from https://blush.design/