const express = require('express');
// This imports the logic we created in the controllers folder
const helplineController = require('../controllers/helplineController');

const router = express.Router();

// This tells the server: "When the app asks for this route, give them the helpline numbers."
router.route('/').get(helplineController.getHelplines);

module.exports = router;