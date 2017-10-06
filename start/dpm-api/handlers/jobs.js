'use strict';

var repository = require('../lib/jobsRepository');

module.exports = {
    get: function jobs_get(req, res) {
        res.json(repository.all())
    }
};