import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nav from "./Nav";
import Card from "./Card";
import Featured from "./Featured";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Nav />
			<Featured />
			<Card />
			<Footer />

		</div>
	);
};

export default Home;