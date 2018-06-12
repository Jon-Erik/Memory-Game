import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
	<div className="wrapper ">
		<div>
			{props.children}
		</div>
	</div>
);

export default Wrapper;
