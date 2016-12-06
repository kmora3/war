> ##### The supreme art of war is to subdue the enemy without fighting...
#####  -Sun Tzu

# War

## **Game Description**

War is a game based on a 52 card deck that pits 2 players against each other. A hand is comprised of a randomly dealsingle card randomly dealt to each player. The player with the higher card value wins the hand and receives one point. 

## **Game Rules**

* Card values are based on a "2 low/Ace high" system. 
* Suits are not considered
* Hands where both players are dealt the same card value (eg Player 1 = 7 Hearts, Players 2 = 7 Spades) will result in a push. Neither player will receive a point
* First player to 10 points wins the game


## **User Stories**

* As a user I need to see a game board (see spec) that allows me to start a game with 2 players
* As a user, I want to play with a shuffled deck
* As a user, I want to click on a 'Start Now' button which will initiate the random card shuffler and start distributing cards from the deck array
* As a user, starting the game should invoke 2 cards selected from the shuffled deck
* As a user, I should see 3 possible outcomes after each hand:
	* Player 1 Wins
	* Player 2 Wins
	* Push - No Winner
* As a user, I should be able to see my score during the game. The scoreboard increments when a user wins a hand
* As a user, I should see a dialog box stating which player reached 10 points first and subsequently wins the game. The game should end at this point
* As a user, I should be able to restart the game with a new deck using a 'Restart Game' button



## **Wireframes**

#####Logic Whiteboard
![Game Board](https://raw.githubusercontent.com/kmora3/war/master/img/whiteboard_logic.JPG)

#####Game Board
![Game Board](https://raw.githubusercontent.com/kmora3/war/master/img/Game_Board.png)

#####Player 1 Wins Hand
![Player1Wins](https://raw.githubusercontent.com/kmora3/war/master/img/Player_1_Wins.png)

#####Player 2 Wins Hand
![Player2Wins](https://raw.githubusercontent.com/kmora3/war/master/img/Player_2_Wins.png)

#####Player 1 Wins GAme
![Player1WinsGame](https://raw.githubusercontent.com/kmora3/war/master/img/Player1_Wins_Game.png)



## **Technologies Used**
* HTML
* CSS
* Javascript
* jQuery
* iMovie(mp4 editing)


## **Credit/References**
* **Looping Video**: [http://codepen.io/mattgrosswork/pen/jrdwK/]()
* **Shuffling Algorithm**: [https://bost.ocks.org/mike/shuffle/]()
* **Card Images:** Byron Knoll - [http://code.google.com/p/vector-playing-cards/]()
* **Rear Card Images**: [http://www.freestockphotos.biz/]()
* **Battlefield Video Loop:AK87Berlin(Youtube Handle)** [https://www.youtube.com/channel/UCdYL8e7sO68TvXt4RbGYuHg]()


## **Feature Backlog**
* Responsive Design
* Mixpanel/Kissmetrics implementation
* Betting Functionality
* User Input on number of hands to win game
* Animate card fly-in from deck to card position

## **Known Bugs**
* Scoreboard are fixed position because that's the only way i can get them to align the right way :/. Make it such that the scoreboards scroll up and down relative to the page
* Move all javascript to scritps.js file...currently not working if JS is out of index.html
* Compress Video...card images load slown when on the internet