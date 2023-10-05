// Create web server
// Run: node comments.js
// Access: http://localhost:8080

// Import modules
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
    // Get file name
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // Read file
    fs.readFile(filename, function (err, data) {
        // If error
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }

        // If no error
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);