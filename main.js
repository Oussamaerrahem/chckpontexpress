const express = require('express');
const app = express();
const path = require('path')
const port = 4000;
const t=new Date().getHours()
const d= new Date().getDay()
if (t>= 9 && t<=20 && (d>=1 && d<=5) )  {
app.get('/homepage', function (req, res) {
    res.sendFile(path.join(__dirname+'/homepage.html'));
});
}
app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});
console.log(d)
console.log(t)