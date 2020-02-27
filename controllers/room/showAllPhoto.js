module.exports = async  function(req, res) {
    let fs = require('fs');

    fs.readFile('./public/room', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();

        }
        else {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(content, 'utf-8');
        }
    });

};
