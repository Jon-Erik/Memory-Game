import React from "react";
import "./Tiles.css";
import GameMessages from "../GameMessages"

//local images are imported
import bachPhoto from "../../images/bach.jpg";
import bartokPhoto from "../../images/bartok.jpg";
import beethovenPhoto from "../../images/beethoven.jpg";
import berliozPhoto from "../../images/berlioz.jpg";
import dvorakPhoto from "../../images/dvorak.jpg";
import franckPhoto from "../../images/franck.jpg";
import mendelssohnPhoto from "../../images/mendelssohn.jpg";
import prokofievPhoto from "../../images/prokofiev.jpg";
import schubertPhoto from "../../images/schubert.jpg";
import shostakovichPhoto from "../../images/shostakovich.jpg";
import straussPhoto from "../../images/strauss.jpg";
import vivaldiPhoto from "../../images/vivaldi.jpg";

//local images are put into an array of objects with name and key
var composers = [
	{
		"key": 1,
		"name": "Bach",
		"src": bachPhoto
	},
	{
		"key": 2,
		"name": "Bartok",
		"src": bartokPhoto
	},
	{
		"key": 3,
		"name": "Beethoven",
		"src": beethovenPhoto
	},
	{
		"key": 4,
		"name": "Berlioz",
		"src": berliozPhoto
	},
	{
		"key": 5,
		"name": "Dvorak",
		"src": dvorakPhoto
	},
	{
		"key": 6,
		"name": "Franck",
		"src": franckPhoto
	},
	{
		"key": 7,
		"name": "Mendelssohn",
		"src": mendelssohnPhoto
	},
	{
		"key": 8,
		"name": "Prokofiev",
		"src": prokofievPhoto
	},
	{
		"key": 9,
		"name": "Schubert",
		"src": schubertPhoto
	},
	{
		"key": 10,
		"name": "Shostakovich",
		"src": shostakovichPhoto
	},
	{
		"key": 11,
		"name": "Strauss",
		"src": straussPhoto
	},
	{
		"key": 12,
		"name": "Vivaldi",
		"src": vivaldiPhoto
	}
]

class Tiles extends React.Component {

	state = {
		guessedTiles : [],
		topScore: 0,
		currentScore: 0,
		gameMessage: "Click a composer to begin!"
	};

	//array for shuffling the order of the array to shuffle card display on each click
	shuffleTiles = (array) => {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	//on a correct click, the user earns a point and the function checks whether he has won by
	//checking if the user has clicked all 12 tiles
	goodClick = (composer) => {
		if (this.state.currentScore === 11) {
			this.setState({
				topScore: 12,
				currentScore: 0,
				guessedTiles: [],
				gameMessage: "You win! You just clicked on " + composer + " and have clicked on all 12 composers. The game has been reset."
			});
			// console.log(this.state);
		} else {
			var newScore = this.state.currentScore + 1;
			this.setState({
				gameMessage: "Correct! You clicked on " + composer + ".",
				currentScore: newScore,
			});
		}
	}

	//on an incorrect click, the function checks if there is a new high score and resets the game
	badClick = (composer) => {
		if (this.state.currentScore > this.state.topScore) {
			this.setState({
				topScore: this.state.currentScore
			})
		}

		this.setState({
			guessedTiles: [],
			currentScore: 0,
			gameMessage: "Incorrect! You already clicked on " + composer + ". The game has been reset."
		});
	}

	//each time a tile is clicked, the name and id of the event target are extracted,
	//and the function checks whether the id has been clicked or not by checking against an array
	handleTileClick = event => {
		event.preventDefault()

		let key = event.target.id;
		let composer = event.target.name;
		//console.log(event.target);
		if (this.state.guessedTiles.includes(key)) {
			this.badClick(composer);
		} else {
			var newArray = this.state.guessedTiles.concat(key);
			this.setState({
				guessedTiles: newArray
			});
			this.goodClick(composer);
		}
	}

	render() {
		return (
			<div>
				<GameMessages 
					message={this.state.gameMessage}
					currentScore={this.state.currentScore}
					topScore={this.state.topScore}/>
				<div className="row justify-content-center">
					{this.shuffleTiles(composers).map(composer => (
						<div className="card col-lg-3" key={composer.key} >
						  <a href="">
						  	<img 
							  className="card-img" 
							  src={composer.src} 
							  id={composer.key} 
							  onClick={this.handleTileClick}
							  name={composer.name} 
							  alt="Card"/>
							</a>  
						</div>
					))}
				</div>
			</div>
		);
	};
};

export default Tiles;
