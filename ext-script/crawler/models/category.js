'use strict';

var Database = require('./database');
let db = new Database();
let apiUrl = '/users'
let Category = function () {
	
}

//Get API URL
Category.prototype.apiUrl = function () {
	return apiUrl;
}


//Connect Firebase
Category.prototype.existRecord = function (field, value) {
	return new Promise(function (resolve, reject) {
		let connection = db.connect();
		let apiUrl = Category.prototype.apiUrl();
	    connection.ref(apiUrl)
	    	.orderByChild(field).equalTo(value)
	    	.once("value")
	      	.then(function (snap) {
	      		if(snap.val()){
					//exist
					let response = {status: true, data: snap.val()};
					return resolve(response);
				}else{
					//not exist
					let response = {status: false};
					return resolve(response);
				}
				

        		//Reject if can not connect
	        	return reject();
	      	})
	  	});
}

//Export Module
module.exports = Category;

