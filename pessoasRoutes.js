//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Pessoas Controller
var pessoasController = require('./pessoasController');

// Pessoas routes
router.route('/pessoas')
    .get(pessoasController.index)
    .post(pessoasController.add);

router.route('/pessoas/:pessoas_id')
    .get(pessoasController.view)
    .patch(pessoasController.update)
    .put(pessoasController.update)
    .delete(pessoasController.delete);

//Export API routes
module.exports = router;