const config = require('../knexfile.js')['development'];
const db = require('knex')(config);

// Takes a table name and an integer (id) as arguments
// Return array of any matching entries from given table with given id
const getResourceById = function getResourceById(tableName, id) {
  return db(tableName).where({
    id: id,
  });
}

// Takes a table name and a string (name) as arguments,
// returns array of any matching entries from table
const getResourceByName = function getResourceByName(tableName, name) {
  return db(tableName).where({
    name: name,
  });
}

// Returns an array of matching entries from organisms table
const getOrganismByKingdom = function getOrganismByKingdom(kingdomId) {
  return db('organisms').where({
    kingdom_id: kingdomId,
  });
}

//TODO: write the remaining queries

module.exports = {
  getResourceById: getResourceById,
  getResourceByName: getResourceByName,
  getOrganismByKingdom: getOrganismByKingdom,
};
