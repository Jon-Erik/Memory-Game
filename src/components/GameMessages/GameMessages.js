import React from "react";
import "./GameMessages.css";

const GameMessages = props => (
	<p className="messages"> Your Score: {props.currentScore} | {props.message} | Top Score: {props.topScore} </p>
);

export default GameMessages;