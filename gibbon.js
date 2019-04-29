/**
 * Gibbon CMS
 * V1.0.5
 *
 */


console.log("Gibbon CMS V2.0.2");

var getpage=new XMLHttpRequest();
  getpage.onreadystatechange=function() {
  var md;
  if(this.readyState==4&&this.status==200){
			md=this.responseText;
   }else{
   	md="# 404 Error";
   }
   var converter = new showdown.Converter();
		var html = converter.makeHtml(md);
		document.getElementById("main").innerHTML+=html;
 
};

var page=window.location.search.slice(1);
if(page==""){
  page="index";
}
var db={};
getpage.open("GET",page+".md",true);
getpage.send();
