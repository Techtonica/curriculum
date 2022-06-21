const db = require("../db/db-connection").init();

const getSightings = async () => {
  const { rows: sighting } = await db.query(`SELECT\ 
    sightings.id, sightings.date_time as last_seen, sightings.healthy, sightings.location, individuals.nick_name as name, species.common_name, species.scientific_name\ 
  FROM\ 
    sightings\
  LEFT JOIN individuals\
     ON individuals.id = sightings.individual_id\
  LEFT JOIN species\
    ON species.id = individuals.species_id`);
  return sighting;
};

const addNewSighting = async (newSighting) => {
  const result = await db.query(
    "INSERT INTO sightings(date_time, location, healthy,individual_id, created_on, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      newSighting.dateTime,
      newSighting.location,
      newSighting.healthy,
      newSighting.individualId,
      newSighting.createdOn,
      newSighting.email,
    ]
  );
  return result;
};

const deleteSighting = async (id) => {
  const result = await db.query(`DELETE FROM sightings WHERE id = $1`, [id]);
  return result;
};

const getSightingDetails = async (id) => {
  try {
    const result = await db.query(
      `SELECT\
    sightings.date_time as last_seen, sightings.healthy, sightings.location, sightings.id, sightings.email, individuals.nick_name as name, species.common_name, species.scientific_name, species.population, species.conservation_status\ 
  FROM\
    sightings\
  RIGHT JOIN individuals\
    ON individuals.id = sightings.individual_id\
  LEFT JOIN species\
    ON species.id = individuals.species_id\
  WHERE sightings.id = $1`,
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getSightings,

  addNewSighting,

  deleteSighting,
  getSightingDetails,
};
