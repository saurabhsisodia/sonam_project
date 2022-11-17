const { query } = require('express');
const Staff = require('../models/staff.model');

// create the staff
exports.create = (req,res) =>{

    // req validation
    // TODO

    const staff = new Staff({
        id : req.body.id,
        name : req.body.name,
        address : req.body.address,
        phone_number : req.body.phone_number,
        position : req.body.position
    });


    // save staff details in database

    staff.save()
    .then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
};

// get all staff
exports.findAll = (req,res) =>{

    Staff.find()
    .then((staffs)=>{
        res.send(staffs);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVERz            "
        })
    })
};

// get staff by id
exports.findOne = (req,res) =>{

    Staff.findOne({id: req.params.id }, function (err, staff) {
        if (err){
            return res.status(404).send({
                message:"staff not found with id "+req.params.id
            })
        }
        else{
            res.send(prisoner)
        }
    });
};

// update a staff
exports.update = (req,res)=>{

        // Validate Request

        var query = {'id':req.params.id};
        var newData = {
            id : req.body.id,
            name : req.body.name,
            address : req.body.address,
            phone_number : req.body.phone_number,
            position : req.body.position
        }
        Staff.findOneAndUpdate(query,newData,{upsert: true},
            function(err, staff){

                if (err){
                    return res.send(500,{message:err})
                }

                return res.status(200).send({message:"successfully updated..."})
            },{new: true})
};

// delete a staff
exports.delete = (req,res) =>{

    var query = {"id":req.params.id}
    
    Staff.deleteOne(query,function(err,staff){
        if (err){
            return res.status(404).send({
                message:"staff not found with id "+req.params.id
            })
        }else{
            return res.status(200).send({
                message:"Deleted successfully..."
            })
        }
    })
}