var http = require('http');

function myexpress() {
    var frame = function(req, res) {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.write("404 Not found");
        res.end();
    };

    frame.listen = function(port, done){
        var server = http.createServer(frame);
        server.listen(port, done);
        return server;
    };

    return frame;
}

module.exports = myexpress;