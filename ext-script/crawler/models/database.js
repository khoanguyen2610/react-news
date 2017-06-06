//CURL get list category
'use strict';
let firebase = require('firebase');

let Database = function () {
	this.app = firebase.initializeApp({
            apiKey: 'AIzaSyDu79SFQzwbQNBJjmJOKpgf_QPzPvhVV90',
            authDomain: 'react-news-b1841.firebaseapp.com',
            databaseURL: 'https://react-news-b1841.firebaseio.com',
            storageBucket: 'react-news-b1841.appspot.com',
            messagingSenderId: '25837712475'
        });
}

//Connect Firebase - return connection
Database.prototype.connect = function () {
	return firebase.database();
	
}

//Retrieve Data  Firebase - return data
Database.prototype.get = function (connection, apiUrl) {

	return new Promise(function (resolve, reject) {
	    connection.ref(apiUrl)
	    	.once("value")
	      	.then(function (snap) {
	      		//Return data
        		if(snap.val()) return resolve(snap.val());

        		//Reject if can not connect
	        	return reject();
	      	})
	  	});
}

//Connect Firebase
Database.prototype.disconect = function () {
	this.app.delete();
}

//Export Module
module.exports = Database;

