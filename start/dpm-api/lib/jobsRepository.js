'use strict';

var jobs = require('./jobs.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(jobs, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return jobs;
    }
};
