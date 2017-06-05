//CURL get list category
var axios = require('axios');
var parse5 = require('parse5');
getCategory = (url) => {
	
}


// //getListArticle
// //url: https://www.thongtincongnghe.com/article
getListArticle = () => {
	axios.get('http://news.zing.vn/kinh-doanh-tai-chinh.html')
		  .then(function (response) {
				getArticle(response.data);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
}

getArticle = (html) => {
	let documents = parse5.parse(html);
	console.log(documents);
}


// //export Module
module.exports = {
	getCategory: getCategory,
	getListArticle: getListArticle,
}

