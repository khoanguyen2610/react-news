var axios = require('axios'),
	zing = require('./services/zing');


zing.getListArticle();

// console.log(pElement);
// for(x on pElement){
// 	console.log(pElement[x].text());
// }


/*var treeAdapter = parse5.treeAdapters.default;
treeAdapter.getTagName = function(element){
	 if(element.tagName.toLowerCase() == 'p'){
	 	const stre = parse5.serialize(element);
		console.log(stre);

		// console.log(str);
	 }
	 return element.tagName;
}

const document = parse5.parse(str,  {
    treeAdapter: treeAdapter
});

const html = parse5.serialize(document);

// Serializes the <html> element content.
const stre = parse5.serialize(document);
console.log(stre);*/




// let url = 'https://www.thongtincongnghe.com/views/ajax?js=1&page=1&view_name=v3_taxonomy_term&view_display_id=default&view_args=&view_path=article&view_base_path=&view_dom_id=3edc9f27f89e65f2e79026825164ec4a&pager_element=0';
// axios.get(url)
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
