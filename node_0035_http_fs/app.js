var http = require("http"),
	fs = require("fs");

http.get({host: "baidu.com"}, function (resp) {
	//console.dir(resp);
	console.log("Got a response from baidu");
}).on("error", function (e) {
	console.log("There was an error from baidu");
});

fs.readFile("file1.md", "utf-8", function (err, data) {
	if (err) throw err;
	console.log(data);
});

http.get({host: "www.lipsum.com"}, function (resp) {
	//console.dir(resp);
	console.log("Got a response from lipsum");
}).on("error", function (e) {
	console.log("There was an error from lipsum");
});

fs.readFile("file2.md","utf-8", function (err, data) {
	if (err) throw err;
	console.log(data);
});

http.get({host: "www.sina.com"}, function (resp) {
	//console.dir(resp);
	console.log("Got a response from sina");
}).on("error", function (e) {
	console.log("There was an error from sina");
});

