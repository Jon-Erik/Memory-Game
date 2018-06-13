import React from "react";
import "./GameMessages.css";

//Game messages component takes props from and is imported by Tiles component
const GameMessages = props => (
	<p className="messages"> Your Score: {props.currentScore} | Top Score: {props.topScore}<br/>{props.message}</p>
);

export default GameMessages;