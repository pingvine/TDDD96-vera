var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ TestTitle: 'Vera 20 Testdata' });
});

module.exports = router;