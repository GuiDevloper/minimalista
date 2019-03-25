getById = function(id, root) {
	root = root || document;
	return root.getElementById(id);
};
getByClass = function(clas, root) {
	root = root || document;
	return root.getElementsByClassName(clas);
};
getByTag = function(tag, root) {
	root = root || document;
	return root.getElementsByTagName(tag);
};
// Set ou update css de elementos
setStyle = function(els, value) {
	for (var el of [...els]){
		el.style.cssText += ";" + value;
	}
};

// Get length de svg
getLength = function(els) {
	var len = 0;
	for (var el of [...els].values()) {
		len += el.tagName == "path" ? el.getTotalLength() :
			(2 * Math.PI) * el.getAttribute('r');
	}
	return len;
};

//Ajax object construído
var Ajax = {
	'send': function(url, type) {
    var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
    xhr.send(null);
    return xhr;
	},
	'isReady': function($this) {
		return $this.readyState == 4 && $this.status == 200;
	}
};

// width of screen
var widthBody = function() {
  return window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
};
