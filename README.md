# HUNGEE! App

## Description

The HUNGEE! App was designed to tackle a home cook's greatest challenge: what can I make with the stuff I have in my fridge?

Ultimately, we chose this approach in our project because we wanted to choose something realistic that wouldn't cause too much stress as we launch our first app, and it was a worthy gamble.  Obviously the app could use a little bit of extra help with refinement, but as it stands, it is perfectuly functional, looks good, and does 95% of what we wanted it to at the initial outset.

One of the easiest parts of our project was also one of the most important - the implementation of the Edamam Recipe Search API.  We initially thought we'd run into function and if/else-statement hell, but it turns out most of the hard work has already been done for us, and the rest was parsing out the JSON we received.  Originally, we wanted to work with Mapbox's Temporary Geocoding and Directions API's so that, upon clicking the "missing ingredients" link, it would fetch the user's current location, populate the "current location" bar in Mapbox, and then populate the "destination" bar with "grocery store" so that it would automatically show a route to the nearest grocery store.  Since we weren't able to make that work, however, we opted for a second option that presents Mapbox and allows the user to simply search grocery stores by brand-name in their local area.  Functionally, it might have also been for our benefit - most people don't need the live-updated maps function like they do on their phones, so this may have been a superior option for the UI anyways.

Although it wasn't quite as prevalent as we'd expected, we did run into nesting-hell a few times, specifically as it relates to the implementation of Bulma.  We understand the purpose of forcing us to work with a CSS framework, but we basically used Bulma in lieu of something like CSS Grid (which, now that we have a solid understanding of it, would have actually made much more sense).  In sum, we oftentimes got lost trying to figure out whether things weren't working because of Bulma or because of some really specific change to a great-great-great grandparent or something along those lines.

Another big challenge was trying to figure out how to implement the use of "local storage", since it really wasn't NECESSARY for the final product.  In the end, we opted to put a collapsable sidebar in the app that stored a few of the user's most recent searches.

Oddly enough, most of what we learned had to do with styling.  While the parsing of the JSON we received was somewhat-new, we had done a previous project doing basically the same thing, but instead of fetching information for 5 cards, we're doing it for 10 now.  The other similarity was between creating "hidden" and "non-hidden" classes and manipulating whether a card is displayed or not - we've never worked with it on this scale before, however it was very similar to what we did in our JS quizes previously.  As a result of our newest learning, all of us have dramatically increased our CSS knowledge, while also buttressing and reinforcing our current working knowledge of JavaScript and HTML.

## Screenshots
<img width="1416" alt="Hungee Opening Page" src="https://user-images.githubusercontent.com/118499830/215648468-ab767bb0-4784-4c54-832c-b2ed45c67c0e.png">
<img width="1416" alt="Hungee Search Page" src="https://user-images.githubusercontent.com/118499830/215648485-3576f018-dea7-4165-8278-a9d14185c243.png">
<img width="1416" alt="Hungee Map Page" src="https://user-images.githubusercontent.com/118499830/215648492-013c5542-d110-4b92-bab7-9b3c026caaf1.png">


## How to install:

Just click the link 👉 https://mcquo011.github.io/project-1-app/


## How to use:

Upon launch, the user will be greeted with a search bar which prompts the user to "search ingredients".  Beneath the search bar is also a small card giving a brief description telling the user what to do.  Upon searching for ingredients, the body of the document will be populated with at least 10 different recipes from the Internet and will list the caloric content and diets it will fit-around.  Additionally, a dropdown menu will also appear with each recipe detailing every ingredient necessary for preparation.  If the user clicks the picture, they will automatically be redirected to that recipe in a new tab.  If they click the "Missing ingredients?" link, however, they will be redirected to the map page, where will be prompted to enter the name of their local grocer, and it will show them all locations available in the area.  Lastly, if the user is on the main page, they will also have the option to see their previous searches in the collapsable sidebar.

## Credits:
- Maggie McQuown: primary JavaScript engineer, secondary CSS engineer, Bulma engineer, editor, collaborator
- Ashton Balder: primary CSS engineer, secondary JavaScript engineer, (begrudging) Bulma engineer, editor, collaborator
- Carisse Barr: primary draft engineer, map-page fullstack engineer, secondary CSS engineer, secondary JavaScript engineer, secondary Bulma engineer, editor, collaborator
- Hamza Ali: secondary JavaScript engineer, secondary CSS engineer, editor, collaborator

## Permissions:
Copyright 2023 Hungee! LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files ("Hungee!"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

