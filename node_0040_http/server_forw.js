var http = require("http");

http.createServer(function(req, resp) {

	// 添加Head信息，定义返回信息是纯文本
	resp.writeHead(301, {
		'Location': 'http://www.baidu.com'
	});
	
	resp.end();


}).listen(5000, "127.1.1.1");

console.log('Server running at http://127.1.1.1:5000/~')
