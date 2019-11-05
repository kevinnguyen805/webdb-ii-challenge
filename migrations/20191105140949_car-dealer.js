
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
     table.increments();
     table.string('VIN').notNullable();
     table.string('make').notNullable();
     table.string('model').notNullable();
     table.string('mileage').notNullable();
     table.string('transmission type', 255);
     table.string('status', 64);
  } )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
