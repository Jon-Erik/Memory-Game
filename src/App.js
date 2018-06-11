import React from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";
import composers from "./composers.json";

const App = () => (
	<div>
	<Jumbotron />
	<Wrapper>
		<Tiles />	
	</Wrapper>
	<Footer />
	</div>
);

export default App;