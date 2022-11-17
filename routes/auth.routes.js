

module.exports = (app) =>{

    const auth = require('../controllers/auth.controller');

    
    app.post('/api/login',auth.login);

    app.post('/api/signup',auth.signup);

    
}