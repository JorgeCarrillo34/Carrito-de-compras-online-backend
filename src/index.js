const express = require('express');
const app = express();
const session = require('express-session');
const morgan = require('morgan');
const bp = require('body-parser');




app.set('port', 19991);

//middlewares
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(morgan('dev'));

//routes
app.use(require('./routes/routes'));



 
//empezando server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})
