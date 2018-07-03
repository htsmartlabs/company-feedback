//system library import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//User library import
const feedback = require('../server/routes/feedback.controller');

//Creating the server
const app = express();

//Handling the middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

//Routing to feedback
app.use('/feedback',feedback);

//Error handling
app.use((error,req,res,next) => {
    res.json({status:false, message:" error "+error});
});


//listening on the port
app.listen(3000,() =>{
    console.log('Server started on port 3000');
});
