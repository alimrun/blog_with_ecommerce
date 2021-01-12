let express = require('express');
let router = express.Router();
let registration_controller = require('../../../Controller/api/v1/auth/RegistrationController');

router.post('/auth/register', registration_controller.register);

module.exports = router;