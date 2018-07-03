const express = require('express');
const Feedback = require('../model/feedback.model');
const objectId = require('mongoose').Types.ObjectId;

const router = express.Router();

router.get('/',(req,res,next)=>{
    Feedback.find()
    .exec()
    .then(data => {
        res.json(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
    const feedback = new Feedback({
        email:req.body.email,
        rate:req.body.rate,
        idea:req.body.idea,
        performence:req.body.performance    
    });
    feedback.save()
    .then(data => {
        res.json({status:true,message:"Feedback added successfully"});
    })
    .catch(next);
});

router.put('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid user id'});
    }else{
        const feedback = {
            email:req.body.email,
            rate:req.body.rate,
            idea:req.body.idea,
            performence:req.body.performence    
        }
        Feedback.findByIdAndUpdate(req.params.id,{$set:feedback},{new:true})
        .exec()
        .then(data =>{
            return res.json({status:true,message:'Feedback updated successfully'}); 
        })
        .catch(next);

    }
});

router.delete('/:id',(req,res,next)=>{
    if(!objectId.isValid(req.params.id)){
        return res.json({status:false,message:'Invalid user id'});
    }else{
        Feedback.findByIdAndRemove(req.params.id)
        .exec()
        .then(data =>{
            return res.json({status:true,message:'Feedback deleted successfully'}); 
        })
        .catch(next);
    }
});

module.exports = router;