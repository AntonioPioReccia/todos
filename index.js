const express = require ("express");
const path = require ("path");
const app = express ();
app.listen (3000);
const todos=[
{ id: 1,text:"boh",done:false},
{ id: 6,text:"b5h",done:false},
{ id: 9,text:"b",done:true}
];

app.set ("views",path.join(__dirname, "views"));
app.set("view engine","ejs");
app.get("/",function (req, res) { 
  res.render("index", {autore: "dante", todos:todos});
} );
app.get("/er",function (req, res) { 
  res.send("vernazzaro mio zio");
} );
app.use(function (req, res) { 
  res.sendFile(path.join(__dirname, "public", "404.html"));
} );
