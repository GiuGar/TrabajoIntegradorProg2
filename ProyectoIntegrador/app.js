var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
let productRouter = require('./routes/product')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Aca "usamos" session
app.use(session(
  { secret:'trabajointegradordb',
    resave: false,
    saveUninitialized: true }
));
// quiero que todos los datos de la sesion esten disponibles para todas las vistas:
app.use(function(req,res,next){
  console.log('en session middleware')
  if (req.session.user != undefined) { //si hay un usuario logueado, para poder acceder a la info en las vistas hacemos: 
    res.locals.user = req.session.user //cuando hagan el proceso de login vamos a guardar toda la info del usuario en una propiedad que creamos dentro del objeto de session que se llame "user"
    console.log('entre en locals')
    console.log('res.locals')
    return next()
  } //basicamente en este if estoy preguntando a nivel global de la app: si existe un usuario quiero esa infrmacion de usuario replicarla en locals(para usar esa info en las vistas)
  return next() //en caso de que no entre al if(si no hay usuario), tenemos que asegurarnos que siga con el codigo
})


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
