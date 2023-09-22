const db = require("../db/db-connection").init();

const getIndividual = async () => {
  const { rows: individual } = await db.query("SELECT * FROM individuals");
  return individual;
};

const getIndividualsOfSpecies = async (speciesId) => {
  const { rows: individual } = await db.query(
    "SELECT * FROM individuals where species_id=$1",
    [speciesId]
  );
  return individual;
};

module.exports = {
  getIndividual,

  getIndividualsOfSpecies
};
