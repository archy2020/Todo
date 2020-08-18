const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const todo = require('./models/todo');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/search',function(req,res){
    
    todo.find({}, function(err,todo){
      if(err){
          console.log('error in fetching data from db');
          return;
      }
    
      return res.render('home',{
        title : " To Do Tracker",
        todo_list : todo
     
      });
  });
});

app.get('/week',function(req,res){
    todo.find({}, function(err,todo){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
      
    return res.render('week', {
        title: "Week Plan",
        todo_list : todo });
});
});

app.get('/delete_todo', function(req,res){
    let id = req.query.id;
      todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting todo');
            return;
        }
        return res.redirect('back');
    });
   
 });

app.post('/create_todo', function(req,res){

    todo.create({
        name: req.body.name,
        completed: req.body.completed,
        duration: req.body.duration,
        date: req.body.date
    }, function(err, newTodo){

        if(err){
            console.log('error in creating new todo'); 
            return;
        }
   return res.redirect('back');
    });
});

app.listen(port, function(err){
    if(err){
        console.log('error is coming on the port :',err);
    }
});


