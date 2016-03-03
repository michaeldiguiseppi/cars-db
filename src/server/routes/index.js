var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Cars () {
  return knex('cars');
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
