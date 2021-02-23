const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log(req.url)

    //const body = req.url ==='/scc/style.css'
   let body = null
    if (req.url === '/css/style.css') {
        body = fs.readFileSync('./public/css/style.css', 'utf8')
    }
    
    else  {
        body = fs.readFileSync('./public/index.html', 'utf8')
    }

    /*try {
        body = fs.readFileSync('./public${req.url}')
    }
    catch (err) {
        body = fs.readFileSync('./public/index.html')
    }*/

   
    res.end(body)
});


const port = process.env.PORT || 3000;
server.listen(3000);

console.log('Server started on port ${port}!');
