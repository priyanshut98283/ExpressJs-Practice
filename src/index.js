const express = require('express');
const app = express();
const path=require('path');
const hbs=require("hbs"); // -> For partials

// console.log(path.join(__dirname,'../public'));
// Before join->  D:\FullStackDevelopment\NodeJs-Projects\Express-demo\src
// After join ->  D:\FullStackDevelopment\NodeJs-Projects\Express-demo\public

const staticpath=path.join(__dirname,'../public');  // Getting path of static file
const templatepath=path.join(__dirname,'../templates');
const partialspath=path.join(__dirname,'../templates/partials');

app.set("view engine", "hbs");      // used for serving dynamic files...
app.set('views', path.join(__dirname , '../views')); 

hbs.registerPartials(partialspath); //-> partial folder registered 

// Routing->
/* 
app.get(route,callback); -> get data using get() method using route and callback

API->
get- read data
post- create data
put- update data
delete- delete data
*/
const port=8000;

app.get("", (req, res)=> { 
  res.render("index",{
    name:"P.T.",
  }); //index or index.hbs is same -> render is for dynamic file showing by hbs
})

//Builtin Middleware              
app.use(express.static(staticpath)); // used for serving static files...

//No output will show for below code as express.static or hbs is used for / home page.
app.get('/', function (req, res) { 
    res.send('Hello from backend express!!'); // By default status code has 200!
    // This is short form of -> Below line will send status code as 200!
    // res.status(200).send('Hello from backend express!!');
})

app.get('/about', function (req, res) {
    res.send('<h1>Hello from About Page!!</h1>'); // Sending html tags!
})

app.get('/contact', function (req, res) {
  res.write('<h1>Hello from Contact Page!!</h1>'); // First writing,then sending!
  res.write('Ayodhya,U.P.,India')
  res.send();
})

app.get('/services', function (req, res) {
  res.send({   // Sending JSON Object!
    id:19,
    name:"P.T.",
  }); 
})

app.get('/products', function (req, res) {
  res.send([{      // Sending Array of JSON Object!
    id:19,        // Another method for sending json data is res.json() 
    name:"P.T.", //-> This converts non-objects such as null and undefined to json also...
  },
  {   
    id:20,
    name:"P.T.1",
  },
  {   
    id:21,
    name:"P.T.2",
  }]); 
})

app.get('*',(req,res)=>{ // getting error page (* means all routes other than defined in this file)
  res.render("404",{
    errorComment:"No such page exists!"
  });     // So we are getting that route and showing 404 file
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}!`);
});