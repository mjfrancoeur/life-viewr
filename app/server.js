const express = require('express');

const app = express();

const DbQuery = require('./util/DbQuery');

const PORT = 8000;

// Returns an array of all organisms in the given kingdom
app.get('/organism/kingdom/:kingdomName', (req, res) => {
  DbQuery.getResourceByName('kingdom', req.params.kingdomName)
    .then(([data]) => {
      DbQuery.getOrganismByKingdom(data.id)
        .then((organisms) => {
          res.send(organisms);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    })
});

app.listen(PORT, () => {
  console.log('Elevator music playing on port', PORT);
});
