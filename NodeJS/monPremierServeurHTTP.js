const http = require('http');

const hostname='127.0.0.1';
const port = 3000;

//que doit faire le serveur lorsqu'une requête lui parvient ?
const server = http.createServer((req,res) => {
    res.statusCode = 200 //Code retour porté par la réponse HTTP
    res.setHeader('Content-Type','text/plain'); //type MIME de la réponse
    res.end('Hello Work\n'); // Corps de la réponse et envoi dans une même
})

//Lancement du serveur
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
})