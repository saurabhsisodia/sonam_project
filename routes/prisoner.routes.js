

module.exports = (app) =>{

    const prisoner = require('../controllers/prisoner.controller.js');

    // create a new prisoner
    app.post('/api/prisoner',prisoner.create);

    // get all the prisoners
    app.get('/api/prisoners',prisoner.findAll);

    // get prisoner by id
    app.get('/api/prisoner/:id',prisoner.findOne);

    // update a prisoner details
    app.put('/api/prisoner/:id',prisoner.update);

    //delete a prisoner
    app.delete('/api/prisoner/:id',prisoner.delete);

    // get all prisoners by cell_id
    app.get('/api/prisoners/cell/:id',prisoner.findByCellId);
}