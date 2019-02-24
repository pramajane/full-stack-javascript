var express = require('express');
//var Cities = require('../models/cities');
var knex = require('../../knexfile');
var router = express.Router();

router.get('/', function(req, res) {
    knex.select()
        .from('cities')
        .then(function(cities) {
            res.send(cities)
        })
});

router.post('/post', function(req, res) {
    knex.from('cities').insert({
        city_name: req.body.city_name
    })
    .then(function() {
        knex.select()
            .from('cities')
            .then(function(cities) {
                res.send(cities);
            })
    })
});

module.exports = router;