const express = require('express'); //y asi por cada pagina
const mainController = require('./controllers/mainController.js');
const app = express();
const mainRouter = require('./routers/main.js')

app.listen(3000, (req,res) => {
    console.log('Servidor Funcionando');
})
app.use(express.static(__dirname + '/public/'));
app.use('/', mainRouter); //y asi por cada pagina
