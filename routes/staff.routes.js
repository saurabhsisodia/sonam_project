

module.exports = (app) =>{

    const staff = require('../controllers/staff.controller');

    // create a new staff
    app.post('/api/staff',staff.create);

    // get all the staffs
    app.get('/api/staffs',staff.findAll);

    // get staff by id
    app.get('/api/staff/:id',staff.findOne);

    // update a staff details
    app.put('/api/staff/:id',staff.update);

    //delete a staff
    app.delete('/api/staff/:id',staff.delete);
}