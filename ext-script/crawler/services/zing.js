//CURL get list category
var axios = require('axios');
var cheerio = require('cheerio');
var firebase = require('firebase');

var app = firebase.initializeApp({ 
	apiKey: 'AIzaSyDu79SFQzwbQNBJjmJOKpgf_QPzPvhVV90',
    authDomain: 'react-news-b1841.firebaseapp.com',
    databaseURL: 'https://react-news-b1841.firebaseio.com',
    storageBucket: 'react-news-b1841.appspot.com',
    messagingSenderId: '25837712475'
});


let siteUrl = 'http://news.zing.vn';

let arrCategory = ['/kinh-doanh-tai-chinh.html',
					'/the-gioi.html',
					'/thoi-su.html',
					'/phap-luat.html',
					'/the-thao.html',
					];

var userRef = firebase.database().ref('/users/0');
  userRef.once('value').then(function(snapshot) {
    var data = snapshot.val();
   	console.log(data);
   	app.delete(); // Release resources
  }).catch(function(error) {
    console.log('Failed to send notification to user:', error);
  });


// var defaultStorage = app.storage();
// var defaultDatabase = app.database();
// database = firebase.database();
// // var starCountRef = database.ref('users/ewqdsadwqewqewq');
// var leadsRef = database.ref('users');
// leadsRef.on('value', function(snapshot) {
//     console.log(snapshot);
// });

// //getListArticle
getListArticle = () => {
	arrCategory.forEach(function(value) {
		let url = siteUrl + value;
		// axios.get(url)
		// 	  .then(function (response) {
		// 			getBasicArticle(response.data);
		// 	  })
		// 	  .catch(function (error) {
		// 	    	console.log(error);
		// 	  });
	})
}

//Get Basic Information Of Article Based On List
getBasicArticle = (html) => {
	let $ = cheerio.load(html);

	$('section.cate_content article').each(function(index, element){
		// console.log($(this).html());
	});
}


// //export Module
module.exports = {
	getListArticle: getListArticle,
}

