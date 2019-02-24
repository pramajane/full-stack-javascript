'use strict';

const Model = require('objection').Model;

class Cities extends Model {
    static get tableName() {
        return 'cities';
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['city_name'],

            properties: {
                id: {type: 'bigIncrements'},
                city_name: {type: 'string'}
            }
        }
    }
}



//const knex = require('knex')(options);

//class Cities {
//    static retrieveAll (callback) {
//        knex.from('cities', function (err, res) {
//            if (err.error)
//                return callback(err);
//            callback(res);
//        });
//    }

//    static insert (city, callback) {
//        db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], (err, res) => {
//            if (err.error)
//                return callback(err);
//            callback(res);
//        });
//    }
//}

module.exports = Cities;