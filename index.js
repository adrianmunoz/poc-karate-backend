const express = require('express');
const cors = require('cors');
const fs = require('fs');
const https = require("https");

require('dotenv').config();

const app = express();

app.use( express.static('public'));

app.use( cors() );
app.use( express.json() );
app.use( '/api' , require('./routes/karate-route'));


https.createServer( {
                    key: fs.readFileSync("certificates/key.pem"),
                    cert: fs.readFileSync("certificates/cert.pem"),
                  },
                  app
                )
.listen(process.env.PORT, () => {

    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);

})
