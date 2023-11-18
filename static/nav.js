document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
};

subpanel = document.getElementById("sidenav");
function hide_sidenav(){
  if (subpanel.hidden == false){
      subpanel.hidden = true;
  }else{
      subpanel.hidden = false;
  }
};

icons = document.getElementById("icbuttons");
barswtch = document.getElementById("barswitch");
iconswtch = document.getElementById("iconswitch");

function sidebar() {
  icons.style.display="grid";
  icons.style.position="fixed";
  icons.style.alignItems="center";
  icons.style.justifyItems="center";
  icons.style.right="0";
  icons.style.left="";
  localStorage.setItem("bar", "side");
  localStorage.setItem("icon", "off");
};

function topbar() {
  icons.style.display="flex";
  icons.style.alignItems="left";
  icons.style.justifyItems="left";
  icons.style.right="";
  icons.style.left="0";
  localStorage.setItem("bar", "top");
  localStorage.setItem("icon", "on");
  
};

function bartoggle() {
  if (localStorage.getItem("bar") == 'side'){
    topbar();
  }else{
    sidebar();
  }
};

function setuserbar() {
  if (localStorage.getItem("bar") == 'side'){
    sidebar();
  }else{
    topbar();
  }
};

function setbartoggleicon() {
  if (localStorage.getItem("icon") == 'off'){
    barswtch.classList.add("fa-toggle-off");
    barswtch.classList.remove("fa-toggle-on");
  }else{
    barswtch.classList.add("fa-toggle-on");
    barswtch.classList.remove("fa-toggle-off");
  }
};

function closesettings() {
    subpanel.hidden = true;
};

function cloakon() {
    changeFavicon('./images/favicon/drive.png');
    document.title = "My Drive - Google Drive";
     localStorage.setItem("cloak", "on");
};

function cloakoff() {
     changeFavicon('../favicon.ico');
     document.title = "Andromeda";
     localStorage.setItem("cloak", "off");
};

function cloaktoggle() {
  if (localStorage.getItem("cloak") == 'off'){
    cloakon();
  }else{
    cloakoff();
  }
};

function setusercloak() {
  if (localStorage.getItem("cloak") == 'on'){
    cloakon();
  }else{
    cloakoff();
  }
};
    
function setcloaktoggleicon() {
  if (localStorage.getItem("cloak") == 'off'){
    iconswtch.classList.add("fa-toggle-off");
    iconswtch.classList.remove("fa-toggle-on");
  }else{
    iconswtch.classList.add("fa-toggle-on");
    iconswtch.classList.remove("fa-toggle-off");
  }
};

var proxyStored = localStorage.getItem("theme")
var proxySel = document.getElementById("themeSwitcher")

function switchProxy() {
  var selecter = document.getElementById("themeSwitcher");
  var selectedOption = selecter.value;

  localStorage.setItem("theme", selectedOption);
  var storedChoice = localStorage.getItem("theme");
};

function setdefaults() {
 if (localStorage.theme == undefined) {
  localStorage.setItem("theme", "default")
 };
};

function reloadpage() {
  location.reload();
}

themefile = document.getElementById("themecss");
function setthemes() {
 if (localStorage.theme == "default") {
  themefile.href = "/static/index.css";
 } else if (localStorage.theme == "noir") {
  themefile.href = "/static/css/themes/noir.css";
 } else if (localStorage.theme == "void") {
  themefile.href = "/static/css/themes/void.css";
 } else if (localStorage.theme == "ip") {
  themefile.href ="/static/css/themes/ironprime.css";
 } else if (localStorage.theme == "xg") {
  themefile.href ="/static/css/themes/xgames.css";
 } else if (localStorage.theme == "stealth") {
  themefile.href ="/static/css/themes/stealth.css";
 } else if (localStorage.theme == "fg") {
  themefile.href ="/static/css/themes/froggermeans.css";
 } else if (localStorage.theme == "ghost") {
  themefile.href ="/static/css/themes/ghost.css";
 } else if (localStorage.theme == "midnight") {
  themefile.href ="/static/css/themes/midnight.css";
 } else {
  themefile.href = "/static/index.css";

 }
};
  
    
setuserbar();
setusercloak();
setbartoggleicon();
setcloaktoggleicon();
setdefaults();
setthemes();
proxySel.value = proxyStored;

