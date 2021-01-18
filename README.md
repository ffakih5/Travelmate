# TravlMate
TravlMate is a website for travel enthusiasts and bloggers to access helpful information that can aid planning for any trip or research for an article or post. 
The benefit of the site is that it is a one-stop-shop for information. It saves users time and effort having to search across many sites for a variety of information they might need. Instead, TravlMate is an easy to use service that instantly collates valuable facts in one place, including currency, water safety, neighbouring countries and much more.
Search for, learn about, and bookmark your destinations of interest all with one, easy-to-use site -  TravlMate. 


[See deployed application.](update link)

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
AS A traveller/ blogger 
I WANT to access a dashboard with useful information about the country I intend to visit/share about.
SO THAT I plan my trip accordingly.

## Acceptance Criteria
GIVEN a travel dashboard with form inputs 
WHEN I search for a country 
THEN I am presented with an overview, currency, neighbours, travel advice, water quality and monthly average weather for that country
WHEN I view the overview for that country
THEN I am presented with the Capital city, spoken languages and country code
WHEN I view the currency for that country
THEN I am presented with a list of the top 10 currencies used in the world/exchanged. 
WHEN I input an amount of AUD to exchange 
THEN I am presented with the amount in the currency for that country 
WHEN I click on the currency dropdown
THEN I am presented with a list of optional currencies to exchange
WHEN I view the neighbours for that country 
THEN I am presented with a list of countries
WHEN I click on a neighbouring country
THEN I can view the information for that country and bookmark it 
WHEN I view the travel advice for that country 
THEN I am presented with the type of precautions to exercise 
WHEN I click on the “see more” link in the travel advice 
THEN I am presented with the official travel advice page in separate browser window
WHEN I view the water for that country 
THEN I am presented with a water-drop icon and “safe” prompting it is safe to drink tap water
WHEN I view the water for that country 
THEN I am presented with a water-drop icon with a strike-through it and “not safe” prompting it is only safe to drink bottled water or unknown if the status is unknown
WHEN I view the weather for that country 
THEN I am presented with the average weather for the current month and the button for current month changes to red
WHEN I click on the month buttons in the weather 
THEN I am presented with the average weather and the button changes to red 
WHEN I click the bookmark icon 
THEN I am can add my searches to the “my countries list”
WHEN I VIEW my countries 
THEN I am presented with a list of bookmarked Countries 
WHEN I open the travel dashboard 
THEN I am presented with the last searched country


## Process
We began with concept creation centered around our Travel Briefing API. We knew we wanted an information hub for travellers, that would present a consolidated source of key travel insights for any country to make it easy to plan a trip or write a blog. 

We then came to the conclusion that the second API would be a currency converter as this was something we thought was missing from the Travel Brieifng API but important to our intended users.

We decided that we would need the site to have searchability as well as the ability to bookmark countries you had searched for before.

Fer then went to work on the design coming up with the logo and colour schemes. Then Fatima and Suzie helped Fer research Bootstrap alternatives, eventually Fer went with UI Kit to build the module including the navigation bar, homepage and information dashboard. 

Kevin and Suzie researched the two chosen APIs and worked on the base code to figure out how to call the API. 

Fatima set up the respository and project kaban chart in Github. 

Kevin then worked on the script for the APIs including researching the 10 most traded currencies, as we thought the currency converter should pull a select number instead of users having to look through hundreds of currencies. We decided the top 10 would be a sufficient selection list for users.

Fer finalised the index and css files along with the additional script files required to make certain features work, such as bookmarking. She tested the functionality in the navigation and search bars as well as ensuring the bookmarking feature was dynamic for users.

Fatima managed the repository and any commits that needed to be made by group members, as well as leading all research requirements and helping with any problems that arose.

Suzie worked on the ReadMe file and the Presentation for the final class.

We did testing together and worked to allocate our Presentation sections once we were confident that the site was operating as intended.

## Mockups
Mobile
(image)

Desktop 
(image)

## Built with
- [UI Kit](https://getbootstrap.com/)
- [JQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [Adobe XD](https://www.adobe.com/au/products/xd.html) (prototyping)
- [Travel Briefing](https://travelbriefing.org/api) API 1 to pull country information
- [Exchange Rate](https://ratesapi.io/) API 2 to convert currenices

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


## Fucntionality
(insert gif)

### [See deployed application](update link)

## Credits
The search icon, bookmark icon and trash icon are from https://fontawesome.com/
The images are from https://blush.design/