//nodemon nodeserver.js
const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];

//Set & Call EJS
app.set('view engine','ejs')

//Add Feature Bar Variables
var feature = [
    {img : "images/programming.jpg", 
    top : "Programming", 
    bottom : "Enjoy Coding and Playing HTML, CSS, JavaScript"},
 
    {img : "images/aiot.jpg",
    top : "AIoT and Robotics",
    bottom : "Enjoy Coding and Playing Python, ROS, Mechanics"}
]

//add body
var icons = [
    {img : "images/email.svg", info:"pongsapak.suwa@bumail.net"},
    {img : "images/facebook.svg", info:"pongsapak"},
    {img : "images/twitter.svg", info:"pongsapak"},
    {img : "images/youtube.svg", info:"pongsapak"}
]
//add topbar
var topbar_p= [
    {info :"About"},
    {info : "Docs"}
]

var topbar_logo ="images/logo.svg"

var topbar_buttom = "Login"

//Add Content Fonts
var contentfont1 = "Online Creative Community"
var contentfont2 = "by pongsapak suwandee"
var feature_more = "Learn More"

//Connect public folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status,
    obj_user_list : user_list})
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {
        obj_feature : feature, 
        contentfont1 : contentfont1,
        contentfont2 : contentfont2,
        obj_icons : icons,
        feature_more : feature_more,
        topbar_logo : topbar_logo,
        topbar_buttom : topbar_buttom,
        obj_topbar_p : topbar_p
    })
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2')
})