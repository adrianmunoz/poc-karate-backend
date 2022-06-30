const express = require('express');
const cors = require('cors');
const http = require("http");

require('dotenv').config();

const app = express();

app.use( express.static('public'));

app.use( cors() );
app.use( express.json() );
app.use( '/api' , require('./routes/karate-route'));

const port  = process.env.PORT || 80;

http.createServer( app
                )
.listen(port, () => {

    console.log(`Servidor corriendo en puerto ${port}`);

})
