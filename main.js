function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return unescape(pair[1]);
		}
	}
}

setInterval(function() {
uniqueID = getQueryVariable("macid");
console.log(uniqueID);
var nocache = Math.random();
var script = document.createElement('script')
script.src = uniqueID + "/main.js?" + nocache;
document.body.appendChild(script)
}, 2000);