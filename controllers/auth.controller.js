const Admin = require('../models/admin.model');

// create the admin account
exports.signup = (req,res) =>{

    // req validation
    // TODO

    // check if username is already present or not

    Admin.findOne({username: req.body.username }, function (err, admin) {
        if (err){
            return res.status(404).send({
                message:"admin not found with username "+req.body.username
            })
        }
        if (admin){
            res.status(200).send({
                err:"username already exist"
            })
            return
        }
    });

    // create a admin model object

    const admin = new Admin({
        username : req.body.username,
        password : req.body.password,
    });


    // save admin details in database

    admin.save()
    .then(data=>{
        res.status(200).send({
            homeURL:"index.html"
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "INTERNAL SERVER ERROR"
        })
    })
};

exports.login = (req,res) =>{

    Admin.findOne({username:req.body.username,password:req.body.password}, function (err, admin) {
        if (err){
            return res.status(404).send({
                message:"admin not found with username "+req.body.username
            })
        }
        if (!admin){
            res.status(200).send({
                err:"Invalid credentails"
            })
        }else{
            res.status(200).send({
                homeURL:"index.html"
            });
        }
    });
};