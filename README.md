# The Cymraeg Challenge 
## About
The Cymraeg Challenge is an interactive game where users click on cards to reveal a Welsh or an English word. Users then have to try and match the word to its translation. When users match the cards correctly, the cards will disappear, and a point will be added to the score at the bottom of the page. When a user has incorrectly chosen a word pair, the card will ‘flip back over’, hiding the words on them and the game continues.  On finding all the word pairs, a notification congratulating the user on completing the game and asking if they want to play again will appear. 
In the header, there will be a ‘how to play’ link under the title. When clicked on, a notification telling users how to play the game will appear. 
## User Experience (UX)
### User Stories
Reasons a user might visit the website:
* Users who are learning Welsh and want to consolidate their skills
* Users who want a fun game to kill some time
Reasons for the website:
* Teach basic Welsh vocabulary
* Provide a resource for Welsh learners to revise their skills
* Entertain users
## Scope
A user may expect:
* Easy to navigate website design
* Visually appealing and well presented on all screen sizes
* Well-functioning links and features
* Information on how to play the game
A user may want:
* A congratulation message to notify you when you have won the game
* A running score during the game
As a developer/business I expect: 
* An engaging interactive game which makes users want to play again 
* A responsive website that attracts users
## Structure
This website will consist of:
* A page consisting of a header (containing a title and how to play link), 12 equally sized cards and a footer with a score
* A how to play notification which explains how to play the game 
* A congratulations notification that appears at the end of the game
## Design 
### Surface
#### Colour
The main colour scheme is an off-white colour (chosen to reduce eyestrain compared to pure white), a dark red, a mid toned red, a dark green and a mid-toned green.
The colour scheme was directly lifted from the colours of the Welsh flag, and then adjusted to improve contrast ratings. The colours do not impact on the ability to play the game, making it accessible for those who are red/green colour blind.

#### Typography
Karla was imported from google fonts for use in this project. Karla was chosen for its simple appearance and readability. As a sans-serif font, it avoids some of the issues associated with letters blending together for dyslexic readers.

#### Call to Action
The main call the action (the play button) is placed in a central location on the screen. It has a green border to draw attention to it and the font size has been considerably increased. Upon hovering, the cursor changes to a pointer to indicate that it can be clicked on.
The same is true of the How to Play button. As it is only intended to be viewed once (the game is pretty simple!), it is smaller but is underlined on hover. 

#### Imagery
As this game is the Cymraeg Challenge and intended for users who wish the learn welsh vocabulary, it made sense to use imagery associated with Wales. On load, the cards have a daffodil background (the national flower of Wales). On click, this dissapears so the text contained within the cards is easy to read. 

### Skeleton

#### Layout
This website consists of just one page. Within this page, users can issue forth a text box that is hidden on load with instructions of how to play the game.

### Features

#### Logo and Navbar
The header consists of two elements, the logo and the how to play text. The how to play text allows players to view a brief run down of how to play the game. The
how to text is available to view at any time, including during the game. When hovered over, the how to play text is underlined and the cursor changes to a pointer, to indicate that it is clickable. The text on the navbar is bright red and contrasts well against the background.

#### Responsiveness
The game is designed to work on 320px screens upwards. This has been achieved using media queries and Bootstraps’ responsive columns. A max width has been set in the root directory. At the max-width, the main body of the game, the nav bar and footer will stop expanding, remaining in the center of the screen. 

#### Accessibility
A high degree of colour contrast has been used in this website's design to improve readability. 
The words chosen are suitable for absolute beginners at the Welsh language. 
Colours have not been used in such a manner that differentiating between colours would be essential for playing the game. 
All font sizes are supplied in rem so they resize appropriately when someone has their own settings for font size.

#### Footer
The footer consists of a Score element which is updated everytime a user scores (10 points per pair of cards matched). The score element is centered so it is easy to see while playing the game. 

#### Meta data
Descriptions, author’s name, and keywords were included in the head element to increase traffic to the website. 

#### Future Features
In the future this game could be expanded to add more Welsh words. It could also be expanded to include different levels of difficulty, either by creating a new 'harder' bank of Welsh/English words or introducing a time limit.

### Technologies Used
* HTML5
* CCS3
* Javascript
* Gitpod.io
* GitHub
* GIT

#### Design
* Google fonts
* Balsamiq wireframe
* Tiny PNG

#### Testing
* HTML Validator
* CSS Validator
* DEV Tools – Lighthouse
* Wave
* Lambdatest

### Validator Results


### Usability Testing
This website has been tested on screen sizes ranging from 320px to 5000px using developer tools. 

| Test Label      | Test Action        | Expected Outcome | Test Outcome |
| --------------- |:------------------:| ----------------:|--------------|
|Smaller Sizes    |Reduce screensize on devtools|Cards are reduced in size to fit screen| PASS
|                 |                             |Text resizes and continues to fit within cards| PASS
|Larger Sizes     |Expand screensize on devtools|Cards expand to suit screen size to a cut off point| PASS
|                 |                             |Game/navbar elements/score remains central beyond max-width| PASS
|How-To text      |Click while cards are visible| Text appears ontop of card elements| PASS
|Animations       |Hover over cards    | Cards should grow on hover BEFORE being clicked| PASS
|                 |                    | Cards should not grow on hover AFTER being clicked| PASS
|Cards            |Click the same card more than once| Does not allow multiple clicks/submission of data-index value| PASS

To ensure that the words remain appropriately sized within cards, a media query was used to target very small screen sizes to make the font smaller. 
On screens bigger than 1500px, the max-width of the main page elemets, the website is still functional and no elements stretch or warp. Text remains clear on very small to very large sizes.

### Browser Compatibility

### OS Compatibiility


### Performance Testing

### User Stories
* Users who are learning Welsh and want to consolidate their skills
Incidental Welsh words used in the how-to text are provided in italics as expected for translations into a language, while the English version is in bold above. The game provides visual cues as to whether your guess is correct or incorrect. If it is incorrect, the card will return to its pre-click state. If it is correct, the card will dissapear and the score will increase. If all the cards have dissapeared, the game will end and a congratulations message will appear. 

* Users who want a fun game to kill some time
The play button is located in a central eye-catching position on the page to start the game immediately. A 'how to play' button is located on the top right of the page and is available at any time. When clicked it provides information as to how to play the game, which is clear and concise. The game has reactive elements, such as the cards expanding on hover and the background of the cards changing when clicked on to provide visual interest. There is a score at the bottom to reward the user with correct guesses.

### Deployment

### Credits
