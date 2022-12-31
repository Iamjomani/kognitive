

const express= require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req,res){
   res.render('index');
})

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/courses', function(req,res){
    res.render('courses');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.listen(3000, function(req, res){
    console.log('server is running on port 3000')
})