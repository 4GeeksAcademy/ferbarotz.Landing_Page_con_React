import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nav from "./Nav";
import Card from "./Card";
import Featured from "./Featured";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Nav />
			<Featured />
			<Card />
			
		</div>
	);
};

export default Home;