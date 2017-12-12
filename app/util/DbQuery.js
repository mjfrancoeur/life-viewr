const config = require(../'knexfile.js')['development'];
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

// WIP
const getOrganismByAttributeId = function getOrganismByAttributeId(attributeName, attributeId) {
  let key = `${attributeName}_id`;
  return db('organisms').where({
    key: attributeId,
  });
}

module.exports = {
  getResourceById: getResourceById,
  getResourceByName: getResourceByName,
  getOrganismByKingdom: getOrganismByKingdom,
};
