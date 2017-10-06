'use strict';

var jobs = require('./jobs.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        return jp.query(jobs, '$..[?(@.JobId=='+id+')]');
    },
    all: function () {
        return jobs;
    }
};
