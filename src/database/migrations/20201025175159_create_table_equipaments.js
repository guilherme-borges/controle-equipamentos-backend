exports.up = function(knex) {
    return knex.schema.createTable('equipaments', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('serial_number').unique().notNullable();
        table.string('location').notNullable();
        table.string('responsible').notNullable();
        table.boolean('status').default(true).notNullable();
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('equipaments');
};