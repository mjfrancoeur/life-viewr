
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('kingdom', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('phylum', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('classes', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('order', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('family', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('genus', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('species', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
    })
    .createTable('organisms', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.string('image_url');
      t.integer('kingdom_id')
        .references('id')
        .inTable('kingdom')
        .onDelete('CASCADE');
      t.integer('phylum_id')
        .references('id')
        .inTable('phylum')
        .onDelete('CASCADE');
      t.integer('classes_id')
        .references('id')
        .inTable('classes')
        .onDelete('CASCADE');
      t.integer('order_id')
        .references('id')
        .inTable('order')
        .onDelete('CASCADE');
      t.integer('family_id')
        .references('id')
        .inTable('family')
        .onDelete('CASCADE');
      t.integer('genus_id')
        .references('id')
        .inTable('genus')
        .onDelete('CASCADE');
      t.integer('species_id')
        .references('id')
        .inTable('species')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('organisms')
    .dropTableIfExists('kingdom')
    .dropTableIfExists('phylum')
    .dropTableIfExists('classes')
    .dropTableIfExists('order')
    .dropTableIfExists('family')
    .dropTableIfExists('genus')
    .dropTableIfExists('species');
};
