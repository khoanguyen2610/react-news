//CURL get list category
var axios = require('axios');
getCategory = (url) => {
	axios.get('https://www.thongtincongnghe.com/views/ajax?js=1&view_name=v3_taxonomy_term&view_display_id=default&view_path=article&view_dom_id=3edc9f27f89e65f2e79026825164ec4a&pager_element=0&view_args&view_base_path')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}


// //getListArticle
// //url: https://www.thongtincongnghe.com/article
getListArticle = (url, page) => {
	
}


// //export Module
module.exports = {
	getCategory: getCategory,
	getListArticle: getListArticle,
}

