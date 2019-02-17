const express = require('express')

const app = express();

app.get('/api', function(req,res){
  console.log('Get Requesr')
   res.send({name : "Eric"});
})

app.delete('/api', function(req,res){
  console.log('Get Requesr')
   res.send({name : "Eric"});
})

app.listen(process.env.port||4000, function(){
  console.log('Now listening for requests')
});
