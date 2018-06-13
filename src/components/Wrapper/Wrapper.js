import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
	<div className="wrapper">
		<div className="game">
			{props.children}
		</div>
	</div>
);

export default Wrapper;
