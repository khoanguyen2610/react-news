var axios = require('axios'),
	ZingService = require('./services/zing'),
	CategoryModel = require('./models/category');
	


	let zing = new ZingService();
	zing.getListArticle();


	// let categoryModel = new CategoryModel();
	// categoryModel.existRecord('email', 'scodeweb2016@gmail.com')
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch(() => {
	// 				console.log('TEMP');
	// 			});


	// Db.get(connection, '/usersewqewq')
	// 	.then((res) => { 
	// 		console.log('yes'); 
	// 		console.log(res); 
	// 	})
	// 	.catch(() => { 
	// 		console.log('No'); 
	// 	})


