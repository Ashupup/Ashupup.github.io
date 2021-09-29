var name = "ashupup"; 
var repository = "ashupup.github.io"; 
if(document.domain != 'localhost'){
	for (var key in document.getElementByI("articleContent").getElementsByTagName('img')){ 
	if (isNaN(key)){ 
		break; } 
	document.getElementById("articleContent").getElementsByTagName('img')[key].src =document.getElementById("articleContent").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository) } 
}
