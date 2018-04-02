module.exports = {
	oem : [], // used to deploy works to OEM products, maybe many. If none, let it empty. 


	src : "./src/assets/sprite-img/",
	lessDest : "./src",
	imgDest : "./static",
	demoDest : "./static/_sprite",
	picmap : [{
		// margin:8, // margin for each images in spirit file, default is 8
		classPrefix : "pic", // defualt is pic
		path : "pic" // default is "pic"
	}]
};
