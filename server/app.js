const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const router = require('./routes');
const cors = require('cors')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

app.use(router)


app.listen(port,()=>{
  console.log(`Listenging to port ${port}`)
})