const http = require('http')
const url = require('url')
const port = 8080
const ip = '192.168.0.11'

const responses = []
  responses['/'] = '<h1>Home</h1>'
  responses['/getUrl'] = 'get'
  responses['/inscreva-se'] = '<h1>Inscreva-se</h1>'
  responses['/local'] = '<h1>Local</h1>'
  responses['/contato'] = '<h1>Contato</h1>'
  responses['/naoExiste'] = '<h1>URL sem resposta definida!</h1>';

const server = http.createServer((req, res) => {
    var requisicao = url.parse(req.url).pathname;
    console.log("Nova requisição!");
    res.setHeader('Access-Control-Allow-Origin', 'true');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.end(responses[requisicao] || responses['/naoExiste']);
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
});