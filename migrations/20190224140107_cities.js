
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cities', function (t) {
        t.bigIncrements('id').primary()
        t.string('city_name')
        t.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cities')
};
