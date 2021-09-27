const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js')
const express = require("express");
const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.get('/', function(req, res){

  let day = date.getDate();

  res.render('list', {
    listTitle: day,
    newItem: items
  })

})

app.get('/work', function(req, res){
  res.render('list', {listTitle: 'Work List', newItem: workItems});
})


app.post('/', function(req, res){
  item = req.body.listItem
  items.push(item);

  res.redirect('/');

})

app.post('/work', function(res, req){
  let items = req.body.listItem;
  workItems.push(items);
  res.redirect('/work')
})



port = process.env.PORT || 8000

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
})
