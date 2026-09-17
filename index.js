let express=require('express');
let app=express();
//localhost:3000/addstudent
app.post("/addstudent",(req,res)=>{
    res.send("add student called");
});
//localhost:3000/getstudents   
app.get("/getstudents",(req,res)=>{

})
//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");

});

