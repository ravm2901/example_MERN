const express = require('express');
//const bodyParser = require('body-parser');
const cors   = require('cors');
const mysql  = require('mysql');
const lib    = require("./libraries/libraries");
const router = require('./router');


const app = express();



app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use('/api', router);






app.listen(lib.CONSTANTS.PORT, () => {
  console.log('API ready on port 4000');
})
