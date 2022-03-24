# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Haron Gebremeskel**

Time spent: **8** hours spent in total

Link to project: https://spiced-cubic-appendix.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough (GIF)

<img src="http://g.recordit.co/LXPs4zZU2H.gif" width=1000 length = 1000><br> 

<img src="http://g.recordit.co/bKftinVq8j.gif" width=1000 length = 1000><br> 

<img src="http://g.recordit.co/L4o5v3UiqE.gif" width=1000 length = 1000><br> 


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    * w3schools.com
    * stackoverflow
    * youtube
    * Udemy.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I did not encounter any challnge since everything has a walkthrough and it was easy to follow, but since i dont have any background with javascript i had a little trouble understanding the syntax, but i was able to understand some of it by going over the developer documenations, watching some youtube videos and by referencing w3school.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    * How are technologies determined when designing a website?
    * Which database scheme is considered when creating sites that do data storage?
    * How is testing accomplished for websites? How different is the testing from web to Python or another language?
    * How are websites transformed as technology changes? Are they revamped completely or is existing code reused in some manner?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. 

I would like to add some additional features and rearrange the page layout to make it look nicer. I would also like to add difficulty levels and enable the users to choose. For example, in a simple game, a pattern consists of 6 elements. In a medium level 10 - 12 elements and in a difficult level , a pattern can have 14 - 16 elements. Or the users can decide on the number of elements in the pattern freely. To do this, I need to add an input field for the users, either a dropdown list or a text field, and enable generatePattern() function to take user inputs and generate patterns according to user demands. I also want to reorganize the code into different components using React to help better manage the code.


## Interview Recording URL Link

My 5-minute Interview Recording: https://youtu.be/8gzTZAO83_w


## License

    Copyright [Haron Gebremeskel]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
