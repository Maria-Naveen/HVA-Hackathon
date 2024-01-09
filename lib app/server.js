const express = require('express'); //used to create a web app rapidly
const dotenv = require('dotenv'); //used to separate the confidential data such as keys from the source code
const morgan = require('morgan'); //used to log msgs
const bodyparser = require('body-parser');
const path = require('path'); //built-in module to create virtual path

const app = express();

dotenv.config({path:'config.env'})
const PORT =  process.env.PORT ||8080;

//log requests
app.use(morgan('tiny'))

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css"))) //a logical path for the css folder is created
app.use('/img',express.static(path.resolve(__dirname,"assets/img"))) //a logical path for the css folder is created
app.use('/js',express.static(path.resolve(__dirname,"assets/js"))) //a logical path for the css folder is created

//root route
app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});