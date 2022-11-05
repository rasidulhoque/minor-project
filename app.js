var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', authRouter);
//app.use('/register',authRouter);


app.listen(3000, ()=>{
  console.log('Connected')
})