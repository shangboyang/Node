var http = require("http"),
	url = require("url");

// base knowledge
http.createServer(function (req, resp) {

	var pathname = url.parse(req.url).pathname || "";

	/**
	 * 通过路由响应不同的请求
	 * pathname
	 */
	if (pathname === "/") {
		resp.writeHead(200, {
			"Content-type": "text/plain"
		});
		resp.end("index");
	} else if (pathname.match(/baidu/)) {
		resp.writeHead(301, {
			"Location": "http://www.baidu.com"
		});
		resp.end("about What");
	
	} else if (pathname === "/about") {
		resp.writeHead(200, {
			"Content-type": "text/plain"
		});
		resp.end("about what?");
	} else {
		resp.writeHead(404, {
			"Content-type": "text/plain"
		});
		resp.end("You are lost~");
	}


// args : port, hostname
}).listen(3001, "127.1.1.1");