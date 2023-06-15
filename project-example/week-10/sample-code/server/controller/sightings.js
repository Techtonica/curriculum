const model = require("../models/sightings");

//  Get all sighting
const getAllSighting = async (req, res) => {
  try {
    const result = await model.getSightings();
    console.log(result);
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

//create the POST request
const addNewSighting = async (req, res) => {
  const newSighting = {
    dateTime: req.body.lastSeen,
    location: req.body.location,
    healthy: req.body.healthy,
    email: req.body.email,
    individualId: req.body.individual_id,
    createdOn: req.body.created_on || new Date().toISOString(),
    sighterId: req.body.sighter_id
  };
  console.log([newSighting.healthy, newSighting.location]);
  const result = await model.addNewSighting(newSighting);
  console.log(result.rows[0]);
  res.json(result.rows[0]);
};

//create the DELETE request
const deleteSighting = async (req, res) => {
  const id = req.params.id;

  // console.log("Delete request is receiving", id);

  try {
    await model.deleteSighting(id);

    res.status(200).send(`sighting deleted with ID: ${id}`);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
};

//create the GET request
const getSightingDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await model.getSightingDetails(id);
    console.log(result);
    if (result) return res.status(200).send(JSON.stringify(result));
  } catch (error) {
    res.status(404).send("Sighting not found");
  }
};

module.exports = {
  getAllSighting,
  addNewSighting,
  deleteSighting,
  getSightingDetails
};
