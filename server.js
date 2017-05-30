const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/set', (req,res,next) => {
res.cookie('foo','bar');
res.send();
});

app.get('/read', (req,res,next) => {
res.send(req.cookies);
});

app.get('/clear', (req,res,next) => {
res.clearCookie('deleteMe');
res.send();
});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
