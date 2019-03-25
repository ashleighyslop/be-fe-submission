const express = require('express');
const app = require('express')();
const path = require('path');

app.get('/',function(req,res) {
    res.sendFile(path.resolve(__dirname, './index.html'));
  });
app.use(express.static('public'));
  
app.listen(3000);
console.log('app is listening at port 3000');