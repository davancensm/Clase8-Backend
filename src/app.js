const express = require('express');
const productosRouter = require('./routes/productos');
const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

server.on("error", error => console.log(`Error en servidor ${error}`));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('files'));
app.use(express.static('public'));

app.use('/api/productos',productosRouter);


