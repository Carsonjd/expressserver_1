const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.static('public'))

app.use('/api', function(req,res,next){
  res.send("Hello from the API!")
})

app.listen(port, function(){
  console.log('Hello from the server!');
});
