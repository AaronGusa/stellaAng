//dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//calls
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

//import routing file
app 
    .use(express.json())
    .use(cors())
    .use('/', require('./backend/routes'))
    

// const start = async () => {
//     app.listen(port, () => {
//         if (app.listen) {
//             console.log(`Running on port ${port}`);
//         } else {
//             console.log(`error - not connected`);
//         }
//     })
// }
// start();