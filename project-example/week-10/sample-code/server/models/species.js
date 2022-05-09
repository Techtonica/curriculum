const db = require("../db/db-connection");

const getAllSpecies = async () => {
  const { rows: species } = await db.init().query("SELECT * FROM species");
  return species;
};

module.exports = {
  getAllSpecies,
};
