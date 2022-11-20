const mongoose = require('mongoose')



const Visitor = mongoose.Schema(
    {
        id : Number,
        visitor_name : String,
        prisoner_name : String,
        relation : String,
        address : String,
        phone_number : Number,
        visit_start_date : String,
        visit_end_date : String

    }
)

module.exports = mongoose.model('Visitor',Visitor);