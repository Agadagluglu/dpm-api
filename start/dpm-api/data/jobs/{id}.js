'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /jobs/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json
     * responses: 200
     * operationId: jobs_getById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/jobs/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
