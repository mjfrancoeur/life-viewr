
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kingdom').del()
    .then(function () {
      // Inserts seed entries
      return knex('kingdom').insert([
        {name: 'animalia'},
        {name: 'plantae'},
        {name: 'fungi'},
        {name: 'protista'},
        {name: 'archaea'},
        {name: 'bacteria'},
      ]);
    });
};
