

module.exports = (app) =>{

    const visitor = require('../controllers/visitor.controller');

    // create a new prisoner
    app.post('/api/visitor',visitor.create);

    // get all the prisoners
    app.get('/api/visitors',visitor.findAll);

    // get prisoner by id
    app.get('/api/visitor/:id',visitor.findOne);

    // update a prisoner details
    app.put('/api/visitor/:id',visitor.update);

    //delete a prisoner
    app.delete('/api/visitor/:id',visitor.delete);
}