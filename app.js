const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");//sending the html file when get request"/" is made.. 


//     // console.log(req);
//     const query = "London";
//     const apiKey = "0393c7e441dad6701a78ddb255a6c7d5";
//     const unit = "metric";
//     const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit
//     https.get(url , function(response){
//         console.log(response.statusCode);
        
//         response.on("data",function(data){
//           const whetherdata=  JSON.parse(data);
//         const temp = whetherdata.main.temp;
//         const feels = whetherdata.main.feels_like;
//         const whetherDescript = whetherdata.weather[0].description;
//         const icon = whetherdata.weather[0].icon;
//         //const imageurl= copy here image url
//         //then in res.write("<img src="+imageurl+">") ------> to show image
//         const imageurl ="http://openweathermap.org/img/wn/10d@2x.png"


//         console.log(feels);
//         console.log(temp );
//         console.log(whetherDescript);

        
//         res.write("<h1>The temperature in London is "+temp + "celcius</h1>");
//         res.write("<h1> The whether is currently "+whetherDescript+"</h1>");
//         res.write("<img src="+imageurl+">");
//         res.send()  ;
//        // res.send()
//     });
//    // res.send("server is up and running");
//    // we cant have 2 res.send() in one app.get method.
// })
})

app.post("/",function(req,res){ // this request is made my html page
 // console.log(req.body.cityName)

  
    const query = req.body.cityName;
    const apiKey = "0393c7e441dad6701a78ddb255a6c7d5";
    const unit = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit
    https.get(url , function(response){
        console.log(response.statusCode);
        
        response.on("data",function(data){
          const whetherdata=  JSON.parse(data);
        const temp = whetherdata.main.temp;
        const feels = whetherdata.main.feels_like; 
        const whetherDescript = whetherdata.weather[0].description;
        const icon = whetherdata.weather[0].icon;
        
        const imageurl ="http://openweathermap.org/img/wn/10d@2x.png"


        console.log(feels);
        console.log(temp);
        console.log(whetherDescript);

        
        res.write("<h1>The temperature in "+req.body.cityName+ " is "+temp + "celcius</h1>");
        res.write("<h1> The whether is currently "+whetherDescript+"</h1>");
        res.write("<img src="+imageurl+">");
        res.send()  ;
       
    });
   // res.send("server is up and running");
   // we cant have 2 res.send() in one app.get method.
})


 // console.log("Post recieved..")
})





app.listen(3000,function(){
    console.log("server is running on port 3000.");
}); 