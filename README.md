# Team Generator 🍄
use this app to generate random teams with ease!

#### Link to Live Site
http://zanemeroff.github.io/team_gen

#### Introduction
Welcome to Team Generator, a mobile friendly single page web application created to make assigning random teams quick and easy! Use it for board game night, volleyball in the park, or virtually any situation where you need to decide teams without human bias.

#### Why Did I Build This?
This is the most recent project I’ve created to showcase the evolution of my programming skills. The app features clean, reusable code and components built with methods leveraging the single responsibility principle. A simple global Vuex store is integrated with Vue Router for view mapping. Jest is used in conjunction with Vue Test Utils to create a robust and thorough testing suite.

#### Screenshot
- screenshot will go here once UI is finished...
![screenshot]()

#### Jest Testing Suite
The project currently contains **83 unit tests** across all 8 components so far, however, the testing suite is still a work in progress. I have written unit tests covering all elements of each Vue component with happy/sad paths as necessary for: data, methods, props, watch, computed, lifecycle hooks, events/user interactions, and snapshot renders. To run the testing suite, see instructions in "How to run the Jest testing suite with NPM" below.

#### Directions for Use
- First, you must select the number of desired teams as well as the number of desired players. The number selection boxes cannot be less than two players or two teams and the number of teams cannot be greater than the number of players. After you have made your selection, press the right arrow button near the top of the screen.
- Now you must enter a name for each player. When you are finished, press the right arrow near the top of the screen again to see the results. An error message is displayed if you try to advance screens without entering a name into each text input.
- The last screen displays a randomized output of each team and list of players.
- If you wish to shuffle the randomized output, press the back arrow button to return to the enter name screen, then press the forward button again.
- At any time you may press the left arrow button to return to the previous screen.
- If you have any feedback, I would love to hear from you! Feel free to email me or leave comments in the issues section of GitHub.

#### Technologies Used
- Vue.js
- Vuex
- Vue Router
- Vue Test Utils
- Jest
- JavaScript
- HTML
- CSS

#### How to run app on a local machine with NPM
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. `cd` into the newly cloned repo directory
4. run `npm install`
5. run `npm run serve`
6. you should now be able to run the app in your browser-the default url is likely: `http://localhost:8080`

#### How to run the Jest testing suite with NPM
1. after the project has been cloned down and `npm install` has been ran, `cd` into the root directory
2. run `npm test` to view test results

#### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff
