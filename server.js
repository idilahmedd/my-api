const express = require('express');
const db = require('./models');

const app = express();


app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send("everything is good");
});
//make your model, name fields and datatypes
//Run the migrations
//Creat one record route, Read one record route, read All route, update one record, delele one record route
// only sending json so use res.json
//3-5 records with 3-5 fields
//slack it

//GET ALL
app.get('/fitnesses', function(req,res) {
    db.fitness.findAll().then(function(fitnesses) {
        res.json(fitnesses);
    });
    
});
//GET ONE
app.get('/fitnesses/:id', function(req,res) {
    db.fitness.findOne({
        where: {id: parseInt(req.params.id)}
    }). then(function(fitness) {
        res.json(fitness);
    })
})
//CREATE make new
app.post('/fitnesses', function(req,res) {
    db.fitness.create({
        firstName: req.body.firstName,
        weight: parseInt(req.body.weight),
        floors: parseInt(req.body.floors), 
        email: req.body.email
    }).then(function(data) {
        console.log(data);
        res.json(data);

    })
});

//UPDATE/EDIT
app.put('/fitnesses/:id', function(req, res) {
    db.fitness.update({
        firstName: req.body.firstName, 
        weight: parseInt(req.body.weight),
        floors: parseInt(req.body.floors), 
        email: req.body.email
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});

//DELETE
app.delete('/fitnesses/:id', function(req, res){
    db.fitness.destroy({
        where: {id: parseInt(req.params.id)}
    }).then (function(data){
        res.json(data);
    });
})


app.listen(3000, function() {
    console.log('On and Poppin')
});