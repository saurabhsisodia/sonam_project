const Prisoner = require('../models/prisoner.model');

// create the prisoner
exports.create = (req,res) =>{

    // req validation
    // TODO

    // create a prisoner model object
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.address);
    console.log(req.body.crimes);
    console.log(req.body.release_date);

    const prisoner = new Prisoner({
        id : req.body.id,
        name : req.body.name,
        address : req.body.address,
        crimes : req.body.crimes,
        cell_id:req.body.cell_id,
        entry_date : req.body.entry_date,
        release_date : req.body.release_date
    });


    // save prisoner details in database

    prisoner.save()
    .then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
};

// get all prisoner
exports.findAll = (req,res) =>{

    Prisoner.find()
    .then((prisoners)=>{
        res.send(prisoners);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
};

// get prisoner by id
exports.findOne = (req,res) =>{

    Prisoner.findOne({id: req.params.id }, function (err, prisoner) {
        if (err){
            return res.status(404).send({
                message:"Prisoner not found with id "+req.params.id
            })
        }
        else{
            res.send(prisoner)
        }
    });
};

// update a prisoner
exports.update = (req,res)=>{

        // Validate Request

        var query = {'id':req.params.id};
        var newData = {
            id: req.params.id,
            name: req.body.name,
            address:req.body.address,
            crimes:req.body.crimes,
            cell_id:req.body.cell_id,
            entry_date : req.body.entry_date,
            release_date : req.body.release_date
        }

        console.log("inside controllr",newData);
        Prisoner.findOneAndUpdate(query,newData,{upsert: true},
            function(err, prisoner){

                if (err){
                    return res.send(500,{message:err})
                }

                return res.status(200).send({message:"successfully updated..."})
            },{new: true})
};

// delete a prisoner
exports.delete = (req,res) =>{

    var query = {"id":req.params.id}

    Prisoner.deleteOne(query,function(err,prisoner){
        if (err){
            return res.status(404).send({
                message:"Prisoner not found with id "+req.params.id
            })
        }else{
            return res.status(200).send({
                message:"Deleted successfully..."
            })
        }
    })
}

exports.findByCellId = (req,res)=>{
    var query = {"cell_id":req.params.id}

    Prisoner.find(query)
    .then((prisoners)=>{
        res.send(prisoners);
    })
    .catch((err)=>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
}