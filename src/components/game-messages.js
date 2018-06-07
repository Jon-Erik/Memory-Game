import React from "react";
import "../css/style.css";

var gameMessage = "Game messages here";
var score = "score here";
var topScore = "topScore here";

const GameMessages = () => (
	<div className="container">
		<h5 className="game-message">{gameMessage}</h5>
		<h5 className="scores">Your Score: {score} | Top Score: {topScore}</h5>
	</div>
);

export default GameMessages;