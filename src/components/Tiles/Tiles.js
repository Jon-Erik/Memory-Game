import React from "react";
import "./Tiles.css";

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

const Tiles = () => {

	return (
		<div className="row justify-content-center">
		{composers.map(composer => (
			<div className="card col-lg-3" key={composer.key}>
			  <img className="card-img"  src={composer.src} alt="Card"/>
			  <div>
			  </div>
			</div>
		))}
		</div>
	);
};

export default Tiles;
