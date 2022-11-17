const mongoose = require('mongoose')



const Prisoner = mongoose.Schema(
    {
        id : Number,
        name : String,
        address : String,
        crimes : [String],
        cell_id : Number,
        entry_date : String,
        release_date : String,

    }
)

module.exports = mongoose.model('Prisoner',Prisoner);