/**
 * Gibbon CMS
 * V1.0
 * This file covers all necessay functions for editing and updating Gibbon DB
 *
 */


console.log("Gibbon CMS V1.0");
var sha="";
var getdb=new XMLHttpRequest();
getdb.onreadystatechange=function(){
  if(this.readyState==4&&this.status==200){
    db=JSON.parse(this.responseText);
    //For Debugging
    //console.log(db);
    loadpage();
  }
};
var savedb=new XMLHttpRequest();
savedb.onreadystatechange=function(){
  if(this.readyState==4&&this.status==200){

  }
};
var getsha=new XMLHttpRequest();
  getsha.onreadystatechange=function() {
  if(this.readyState==4&&this.status==200){
			sha=JSON.parse(this.responseText)["sha"];
   }
};

var page=window.location.search.slice(1);
if(page==""){
  page="index";
}
var db={};
getdb.open("GET","db.json",true);
getdb.send();
function loadpage(){
	 document.title=db.title;
  if(page=="admin"){
 			var url="https://api.github.com/repos/"+db.user+"/"+db.repo+"/contents/db.json";

	 		getsha.open("GET",url, true);
  		getsha.send();


    var c=document.getElementsByClassName("site-title");
    for(var i=0;i<c.length;i++){
      c[i].innerHTML=db.title;
    }
    c=document.getElementsByClassName("title");
    for(var i=0;i<c.length;i++){
      c[i].innerHTML="Site Editor";
    }
    var menu="";
    for(var key in db.pages){
      menu+="<a href='https://"+db.user+".github.io/"+db.repo+"/?"+key+"'>"+db.pages[key].title+"</a>";
    }
    c=document.getElementsByClassName("menu");
    for(var i=0;i<c.length;i++){
      c[i].innerHTML=menu;
    }
    c=document.getElementsByClassName("date");
    for(var i=0;i<c.length;i++){
      c[i].innerHTML="";
    }
    c=document.getElementsByClassName("content");
    for(var i=0;i<c.length;i++){
            c[i].innerHTML="<div id='gibboneditor' style='width:80%;margin-left:10%;text-align:center;background-color:#3e3f42;padding:20px;box-sizing:border-box;border-radius:15px;'><select id='selectPage' onclick='selectPage(this.value);'></select><input id='gibbontitle' type='text' placeholder='Title' style='width:35%;border-radius:15px;padding:1vmin;'><input id='gibbonpat' type='text'placeholder='Personal Access Token' style='width:35%;border-radius:15px;padding:1vmin;'><select id='gibbontype'><option value='page'>Page</option><option value='blog'>Blog</option><option value='hidden'>Hidden</option></select><div style='padding-left:10px;padding-right:10px;margin-top:10px;margin-bottom:10px;text-align:left;display:inline-block;vertical-align:middle;background-color:#acadaf;border-radius:10vmin;'><img src='icons/bold.png' onclick='insert(&quot;<b></b>&quot;);' title='Bold'><img src='icons/italic.png' onclick='insert(&quot;<i></i>&quot;);' title='Italic'><img src='icons/underline.png' onclick='insert(&quot;<u></u>&quot;);' title='Underline'><img src='icons/title.png' onclick='insert(&quot;\n<h1></h1>&quot;);' title='Insert Header'><img src='icons/ul.png' onclick='insert(&quot;\n<ul>\n<li></li>\n</ul>&quot;);' title='Bulleted List'><img src='icons/ol.png' onclick='insert(&quot;\n<ol>\n<li></li>\n</ol>&quot;);' title='Numbered List'><img src='icons/addphoto.png' onclick='insert(&quot;\n<img>&quot;);' title='Insert Image'><img src='icons/attatchment.png' onclick='insert(&quot;\n<a></a>&quot;);' class='menu' title='Insert Link'></div><div style='padding-left:10px;padding-right:10px;margin-top:10px;margin-bottom:10px;text-align:left;display:inline-block;vertical-align:middle;background-color:#acadaf;border-radius:10vmin;'><img src='icons/uploadmedia.png' onclick='uploadmedia();' class='menu' title='Upload Media'><img src='icons/save.png' onclick='savepage();' class='menu' title='Save Changes'></div><textarea id='gibboncontent' rows='15' style='width:100%;padding:1vmin;border-radius:15px;'></textarea><br></div>";
    }
    var select = document.getElementById("selectPage");

    for(var key in db.pages){
      var opt=key;
      var el=document.createElement("option");
      el.textContent=opt;
      el.value=opt;
      select.appendChild(el);
    }
  }else{

    if(page=="success"){
      var c=document.getElementsByClassName("site-title");
      for(var i=0;i<c.length;i++){
        c[i].innerHTML=db.title;
      }
      c=document.getElementsByClassName("title");
      for(var i=0;i<c.length;i++){
        c[i].innerHTML="Successful Update";
      }
      var menu="";
      for(var key in db.pages){
        menu+="<a href='https://"+db.user+".github.io/"+db.repo+"/?"+key+"'>"+db.pages[key].title+"</a>";
      }
      c=document.getElementsByClassName("menu");
      for(var i=0;i<c.length;i++){
        c[i].innerHTML=menu;
      }
      c=document.getElementsByClassName("date");
      for(var i=0;i<c.length;i++){
        c[i].innerHTML="";
      }
      c=document.getElementsByClassName("content");
      for(var i=0;i<c.length;i++){
        c[i].innerHTML="You have successfully updated your content";
      }
    }else{
      if(page in db.pages){
          var c=document.getElementsByClassName("site-title");
          for(var i=0;i<c.length;i++){
            c[i].innerHTML=db.title;
          }
          c=document.getElementsByClassName("title");
          for(var i=0;i<c.length;i++){
            c[i].innerHTML=db.pages[page].title;
          }
          var menu="";
          for(var key in db.pages){
            menu+="<a href='https://"+db.user+".github.io/"+db.repo+"/?"+key+"'>"+db.pages[key].title+"</a>";
          }
          c=document.getElementsByClassName("menu");
          for(var i=0;i<c.length;i++){
            c[i].innerHTML=menu;
          }
          c=document.getElementsByClassName("date");
          for(var i=0;i<c.length;i++){
            c[i].innerHTML=db.pages[page].date;
          }
          c=document.getElementsByClassName("content");
          for(var i=0;i<c.length;i++){
            c[i].innerHTML=db.pages[page].content;
          }
        }else{
        var c=document.getElementsByClassName("site-title");
        for(var i=0;i<c.length;i++){
          c[i].innerHTML=db.title;
        }
        c=document.getElementsByClassName("title");
        for(var i=0;i<c.length;i++){
          c[i].innerHTML="404 Error";
        }
        var menu="";
        for(var key in db.pages){
          menu+="<a href='https://"+db.user+".github.io/"+db.repo+"/?"+key+"'>"+db.pages[key].title+"</a>";
        }
        c=document.getElementsByClassName("menu");
        for(var i=0;i<c.length;i++){
          c[i].innerHTML=menu;
        }
        c=document.getElementsByClassName("date");
        for(var i=0;i<c.length;i++){
          c[i].innerHTML="";
        }
        c=document.getElementsByClassName("content");
        for(var i=0;i<c.length;i++){
          c[i].innerHTML="You have reached this page in error.";
        }
      }
    }

  }
}

function selectPage(key){
  document.getElementById("gibbontitle").value=db.pages[key].title;
}


function savepage(){
  var title=document.getElementById("gibbontitle").value;
  var id=title.replace(/\s+/g,'-').toLowerCase();
  var today = new Date();
  var dd=today.getDate();
  var mm=today.getMonth()+1;
  var yyyy=today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
    mm='0'+mm;
    if(mm<10){
  }
  today = mm + '/' + dd + '/' + yyyy;
  var page=document.getElementById("gibbontitle").value;
  var content=document.getElementById("gibboncontent").value;
  var type=document.getElementById("gibbontype").value;
  var include="true";
  var pat=document.getElementById("gibbonpat").value;

  db.pages[id]={};
  db.pages[id].title=page;
  db.pages[id].content=content;
  db.pages[id].date=today;
  db.pages[id].type=type;
  db.pages[id].include=include;

  var args={"path":"db.json","message":"Updated from Gibbon CMS","content":btoa(JSON.stringify(db)),"sha":sha};
  var url="https://api.github.com/repos/"+db.user+"/"+db.repo+"/contents/db.json?access_token="+pat;

  savedb.open("PUT",url,true);
  savedb.send(JSON.stringify(args));
  window.open("/"+db.repo+"/?success");
}

function uploadmedia(){
  window.open("https://github.com/"+db.user+"/"+db.repo+"/upload/master","_blank");
}

function insert(text){
  insertAtCursor(document.getElementById("gibboncontent"),text);
}

function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
}
