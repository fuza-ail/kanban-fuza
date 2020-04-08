const express = require('express');
const PORT = 3000;
const app = express();
const router = require('./routes');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(router)


app.listen(PORT,()=>{
  console.log(`Listenging to port ${PORT}`)
})