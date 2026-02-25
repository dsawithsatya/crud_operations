var x=require('mysql2')
var y1=require('express')
var y2=y1()
y2.listen("5000",()=>{
    console.log("Server started successfully")
})
var y=x.createConnection(
    {
        user:"root",
        host:"localhost",
        database:"crud",
        password:"903266"
    }
)

y.connect((err)=>{
    if(err)
        throw err
    console.log("Completed")
    y.query("select * from operations",(err,result)=>{
        console.log(result)
    })
})
