const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

router.get('/ninjas',function(req,res){
    Ninja.find({},(data,err)=>{
        if(err){
            res.send(err);
        }
        res.send(data);
    })
});
// connected this api to the db so it can get by id
router.get('/ninjas/:id',function(req,res){
    Ninja.findById(req.params.id, (err, data) => {
     if (err) throw error;
     res.send(data);
    })
});

// Hone chelet ana l create element w staamalet save
router.post('/ninjas',function(req,res){
   var ninja = new Ninja({
        name: req.body.name,
        rank: req.body.rank,
        available: req.body.available
   });

   ninja.save(function (err,data) {
    if (err) res.send(err);
    res.send(data);
   });
});

// Homme ken lezem thotela chi fucntuio, hayde li katabbta ana hiyeh taba3 l update lal model
router.put('/ninjas/:id',function(req,res){
    Ninja.updateOne({_id:req.params.id}, {
        name:req.body.name,
        rank:req.body.content,
        available:req.body.available,
        date:req.body.date
      }).then((data)=>{
        res.send({
          success:true,
          status:"Update",
          data:data
        })
      }).catch((err)=>{
        res.send({
          success:false,
          status:"Update",
          data:err
        })
      })
});

// Same metel fo2, katabtellak l real delete function
router.delete('/ninjas/:id',function(req,res){
    Ninja.findByIdAndDelete(req.params.id, function (err,data) {
        if (err) res.send(err);
        res.json({
            success:true,
            actiom:'DELETE',
            data:data
        });
    });
});


module.exports = router;
