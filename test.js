var bachPhoto = require("./src/images/bach.jpg");
var bartokPhoto = require("./src/images/bartok.jpg");
var beethovenPhoto = require("./src/images/beethoven.jpg");
var berliozPhoto = require("./src/images/berlioz.jpg");
var dvorakPhoto = require("./src/images/dvorak.jpg");
var franckPhoto = require("./src/images/franck.jpg");
var mendelssohnPhoto = require("./src/images/mendelssohn.jpg");
var prokofievPhoto = require("./src/images/prokofiev.jpg");
var schubertPhoto = require("./src/images/schubert.jpg");
var shostakovichPhoto = require("./src/images/shostakovich.jpg");
var straussPhoto = require("./src/images/strauss.jpg");
var vivaldiPhoto = require("./src/images/vivaldi.jpg");

let photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08, photo09, photo10, photo11, photo12;

//declare photo variables array
let photoArray = [photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08, photo09, photo10, photo11, photo12];

//image src array
let imageSrcArray = [bachPhoto, bartokPhoto, beethovenPhoto, berliozPhoto, dvorakPhoto, franckPhoto, mendelssohnPhoto, prokofievPhoto, schubertPhoto, shostakovichPhoto, straussPhoto, vivaldiPhoto];

function assignPhotos() {
	for (let i = 0; i < 12; i++) {
		photoArray[i] = imageSrcArray[i];
	}
};

assignPhotos();