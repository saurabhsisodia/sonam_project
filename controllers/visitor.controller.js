const { query } = require('express');
const Visitor = require('../models/visitor.model');

// create the visitor
exports.create = async (req,res) =>{

    // req validation
    // TODO

    // create a visitor model object

    const visitor = new Visitor({
        id : req.body.id,
        visitor_name : req.body.visitor_name,
        prisoner_name: req.body.prisoner_name,
        relation : req.body.relation,
        address : req.body.address,
        phone_number:req.body.phone_number,
        visit_start_date:req.body.visit_start_date,
        visit_end_date:req.body.visit_end_date,

    });


    // check if id already exist or not in db
    const isExist = await Visitor.exists({id:req.body.id})

    if (isExist){
        res.status(400).send({
            error:`id ${req.body.id} already exist`
        })
        return
    }
    // save visitor details in database

    visitor.save()
    .then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
};

// get all visitor
exports.findAll = (req,res) =>{

    Visitor.find()
    .then((visitors)=>{
        res.send(visitors);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVERz            "
        })
    })
};

// get visitor by id
exports.findOne = (req,res) =>{

    Visitor.findOne({id: req.params.id }, function (err, visitor) {
        if (err){
            return res.status(404).send({
                message:"visitor not found with id "+req.params.id
            })
        }
        else{
            res.send(visitor)
        }
    });
};

// update a visitor
exports.update = (req,res)=>{

        // Validate Request

        var query = {'id':req.params.id};
        var newData = {
            id : req.body.id,
            visitor_name : req.body.visitor_name,
            prisoner_name: req.body.prisoner_name,
            relation : req.body.relation,
            address : req.body.address,
            phone_number:req.body.phone_number,
            visit_start_date:req.body.visit_start_date,
            visit_end_date:req.body.visit_end_date,
        }
        Visitor.findOneAndUpdate(query,newData,{upsert: true},
            function(err, visitor){

                if (err){
                    return res.send(500,{message:err})
                }

                return res.status(200).send({message:"successfully updated..."})
            },{new: true})
};

// delete a visitor
exports.delete = (req,res) =>{

    var query = {"id":req.params.id}
    Visitor.deleteOne(query,function(err,visitor){
        if (err){
            return res.status(404).send({
                message:"visitor not found with id "+req.params.id
            })
        }else{
            return res.status(200).send({
                message:"Deleted successfully..."
            })
        }
    })
}