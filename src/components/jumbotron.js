import React from "react";
import "../css/style.css";

const Jumbotron = () => (
	<div className="jumbotron">
	  <h1 className="display-4">Memory Game</h1>
	  <p className="lead">Composer Edition</p>
	  <hr className="my-4"/>
	  <p className="instructions">Click on a composer to earn points, but don't click on any more than once!</p>
	</div>
);

export default Jumbotron;