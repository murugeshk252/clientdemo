var express= require("express");
var bodyParser= require("body-parser");
var cors= require("cors")
var app= express();
app.use(cors());
var api= require("./routes/api")

app.use(bodyParser.json());
app.use("/api",api);


app.get("/",function(req,res){
    res.send("heloo from server");

})
const port = process.env.port || 4000;
app.listen(port,function(){
    console.log("server is listening at 4000")
})