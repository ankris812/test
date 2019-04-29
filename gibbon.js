/**
 * Gibbon CMS
 * V1.0.5
 *
 */


console.log("Gibbon CMS V2.0.2");

var getpage=new XMLHttpRequest();
  getpage.onreadystatechange=function() {
  if(this.readyState==4&&this.status==200){
			document.getElementById("main").innerHTML=this.responseText;
   }
};

var page=window.location.search.slice(1);
if(page==""){
  page="index";
}
var db={};
getpage.open("GET",page+".md",true);
getpage.send();
