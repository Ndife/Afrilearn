const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
var expressValidator = require('express-validator');
const URI = require('./config/keys');

const index = require('./routes/index');
const user = require('./routes/user');

const app = express();

//BodyParser Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
      var namespace = param.split('.')
      ,root = namespace.shift()
      ,formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

mongoose.Promise = global.Promise;

mongoose.connect( process.env.mongoURI || URI ,{ useNewUrlParser: true})
// mongoose.connect(`mongodb://localhost:27017/Afrilearn` ,{ useNewUrlParser: true})
.then(() => console.log('Mongodb Connected'))
.catch((err)=> console.log(err));

// Use Routes
app.use('/index', index);
app.use('/user', user);



// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))