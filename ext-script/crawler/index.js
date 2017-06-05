var axios = require('axios'),
	zing = require('./services/zing');


	let temp = zing.getListArticle();


	//CURL get list category
// let url = 'https://www.thongtincongnghe.com/views/ajax?js=1&page=1&view_name=v3_taxonomy_term&view_display_id=default&view_args=&view_path=article&view_base_path=&view_dom_id=3edc9f27f89e65f2e79026825164ec4a&pager_element=0';
// axios.get(url)
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
