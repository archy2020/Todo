const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Habbit = require('./models/habbit');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/search',function(req,res){
    
    Habbit.find({}, function(err,habits){
      if(err){
          console.log('error in fetching data from db');
          return;
      }
    
      return res.render('home',{
        title : "Habbit Tracker",
        habbit_list : habits
     
      });
  });
});

app.get('/week',function(req,res){
    Habbit.find({}, function(err,habits){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
      
    return res.render('week', {
        title: "Week Plan",
        habbit_list : habits });
});
});

app.get('/delete_habbit', function(req,res){
    let id = req.query.id;
    Habbit.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting habbit');
            return;
        }
        return res.redirect('back');
    });
   
 });

app.post('/create_habbit', function(req,res){

    Habbit.create({
        name: req.body.name,
        completed: req.body.completed,
        duration: req.body.duration,
        date: req.body.date
    }, function(err, newHabit){

        if(err){
            console.log('error in creating new habit'); 
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


