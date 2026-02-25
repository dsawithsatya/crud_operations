var x=require('mysql2')
var y=x.createConnection(
    {
        user:"root",
        host:"localhost",
        database:"crud",
        password:"903266"
    }
)

y.connect("select * from operations",(err,res)=>{
    if(err)
    console.log(err)
    return res
})