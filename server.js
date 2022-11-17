const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();


// middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


// database connectivity
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to mongodb database");
}).catch(err =>{
    console.log("not able to connect to mongodb..",err);
    process.exit();
});



app.get('/',(req,res)=>{
    res.json({
        "message":"Hello World from node js app",
    })
})


require('./routes/prisoner.routes')(app)
require('./routes/visitor.routes')(app)
require('./routes/staff.routes')(app)
app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})