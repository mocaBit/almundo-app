// Definitions
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const api = require('./routes/api.route');
const dbData = require('./data/databaseData');
const router = express.Router();
const app = express(); 

// Sets
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('x-powered-by');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use('/api', api);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
// Conexión y creación de la base de datos
mongoose.Promise = bluebird;
mongoose.connect('mongodb://dbmongo/almundoapp')
  .then(()=> { console.log(`Coneccion exitosa a Mongodb. URL : mongodb://127.0.0.1:27017/almundoapp`)
    // Se elimina y se crea la colección con los datos de semilla
    mongoose.connection.db.dropCollection('hotels', ()=>dbData.insertData());  
  })
  .catch(()=> { console.log(`Error de coneccion a Mongodb. URL : mongodb://127.0.0.1:27017/almundoapp`)});

module.exports = app;
