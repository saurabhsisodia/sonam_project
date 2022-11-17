const mongoose = require('mongoose')



const Visitor = mongoose.Schema(
    {
        id : Number,
        visitor_name : String,
        prisoner_name : String,
        relation : String,
        address : String,
        phone_number : String,
        visiting_date : String,
    }
)

module.exports = mongoose.model('Visitor',Visitor);