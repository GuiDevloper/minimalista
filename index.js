export function getById(a,b){return(b||document).getElementById(a)}export function getByClass(a,b){return(b||document).getElementsByClassName(a)}export function getByTag(a,b){return(b||document).getElementsByTagName(a)}export function setStyle(a,b){for(var c of Array.from(a))c.style.cssText+=";"+b}export function getLength(a){var b=0;for(var c of Array.from(a).values())b+="path"==c.tagName?c.getTotalLength():2*Math.PI*c.getAttribute("r");return b}Ajax={send:function(a,b){var c=new XMLHttpRequest;return c.open(b,a,!0),c.send(null),c},isReady:function(a){return 4==a.readyState&&200==a.status}};export var Ajax;export function widthBody(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}
