
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('organisms').del()
    .then(function () {
      // Inserts seed entries
      return knex('organisms').insert([
        {name: 'Michael', kingdom_id: 1},
        {name: 'Joanne', kingdom_id: 1},
        {name: 'Monkey', kingdom_id: 2},
      ]);
    });
};
