var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({Title: 'Vera 20', Page: 'Patient'});
});

module.exports = router;