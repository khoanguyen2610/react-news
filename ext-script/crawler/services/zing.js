var axios = require('axios');
var cheerio = require('cheerio');

//Define Site Crawl URL
let siteUrl = 'http://news.zing.vn';

//Define List Category To Get Data
let arrCategory = ['/kinh-doanh-tai-chinh.html',
					'/the-gioi.html',
					'/thoi-su.html',
					'/phap-luat.html',
					'/the-thao.html',
					];

let ZingService = function () {
	
}

//Get Site Url
ZingService.prototype.getSiteUrl = function () {
	return siteUrl;
}

//Get List Category
ZingService.prototype.getListCategory = function () {
	return arrCategory;
}

//getListArticle
ZingService.prototype.getListArticle = function () {
	let siteUrl = ZingService.prototype.getSiteUrl();
	let arrCategory = ZingService.prototype.getListCategory();
	if(arrCategory.length){
		arrCategory.forEach((value) => {
			let urlCategory = siteUrl + value;
			ZingService.prototype.getBasicArticle(urlCategory);
		})
	}
}

//Get Basic Information Of Article Based On List
ZingService.prototype.getBasicArticle = function (url) {
	//HTTP request to get HTML
	if(url){
		axios.get(url)
		  	.then((response) => {
		  		//Get information basic article
		  		if(response.status == 200){
					let $ = cheerio.load(response.data);

					//Find element contain article
					$('section.cate_content article').each((index, element) =>{
						//Get URL Detail
						let urlArticle = $(element).find('p.title a').attr('href');
						//Get Detail Article Based On URL
						ZingService.prototype.getDetailArticle(urlArticle);
					});
		  		}
		  	})
		  	.catch((error) => {
		    	console.log(error);
		  	});
	}
	
}


//Get Basic Information Of Article Based On Url
ZingService.prototype.getDetailArticle = function (url) {
	if(url){
		let siteUrl = ZingService.prototype.getSiteUrl();
		let urlDetail = siteUrl + url;
		console.log(urlDetail);
		//HTTP request to get HTML
		axios.get(urlDetail)
		  	.then(function (response) {
		  		//Get information basic article
		  		if(response.status == 200){
					//process data
					// console.log('get success');
					// console.log(response.data);
		  		}
		  	})
		  	.catch(function (error) {
		    	console.log(error);
		  	});
	}
}

//Export Module
module.exports = ZingService;