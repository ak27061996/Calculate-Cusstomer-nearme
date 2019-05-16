/*
Author: Anil Kumar
Date: Sunday 12 May 2019s
*/

const express = require('express'),
	 config = require('./config'),
	Calc = require('customer-coding');//custom Module to solve the given problem 

app=express();


app.listen(3000, function () {
	

	let algores=Calc(config.current_lat,config.current_lon,config.file,config.distance); 
	
	//sort by userId
	algores.sort(function(a, b){
    	if(a.user_id < b.user_id) return -1;
    	if(a.user_id > b.user_id) return 1;
    	return 0;
	});

	//print Result
	console.log("UserId \t Name \t dist_from_given_point");
	for(let i=0;i<algores.length;i++){
		console.log(algores[i].user_id+" \t "+algores[i].name+" \t "+algores[i].dist_from_given_point);
	}
});
