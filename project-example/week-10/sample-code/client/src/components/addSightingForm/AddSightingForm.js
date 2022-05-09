import { useEffect, useState } from "react";

import "./AddSightingForm.css";

const AddSightingForm = ({ addNewSighting }) => {
  // STATE
  const [species, setSpecies] = useState([]);
  const [individuals, setIndividuals] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedIndividual, setSelectedIndividual] = useState("");
  const [healthy, setHealthy] = useState(false);
  const [location, setLocation] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getAllSpecies = async () => {
      const request = await fetch("/api/species");
      const result = await request.json();
      setSpecies(result);
    };
    getAllSpecies();
  }, []);

  useEffect(() => {
    const getIndividualsOfSpecies = async () => {
      const request = await fetch(`/api/individual/${selectedSpecies}`);
      const result = await request.json();
      setIndividuals(result);
    };
    if (selectedSpecies) getIndividualsOfSpecies();
  }, [selectedSpecies]);

  console.log(individuals);
  return (
    <>
      <div className="FormPage">
        <h1 className="h1">Add Sighting Information</h1>
        <form
          className="Form"
          onSubmit={(ev) => {
            ev.preventDefault();

            addNewSighting({
              healthy,
              lastSeen,
              location,
              email,
              individual_id: selectedIndividual,
            });
          }}
        >
          <fieldset>
            <legend>Please enter the individual information</legend>

            <label>Select common Name</label>
            <select
              name="species_id"
              onChange={(e) => setSelectedSpecies(e.target.value)}
            >
              <option>Select one</option>
              {species.map((animal) => (
                <option key={animal.id} value={animal.id}>
                  {animal.common_name}
                </option>
              ))}
            </select>

            <label>Nick Name</label>
            <select
              name="individual_id"
              value={selectedIndividual}
              onChange={(ev) => setSelectedIndividual(ev.target.value)}
            >
              <option>Select one</option>
              {individuals.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.nick_name}
                </option>
              ))}
            </select>

            <label> Health Status</label>
            <select
              value={healthy}
              onChange={(e) => setHealthy(e.target.value)}
              placeholder="Select Health Status"
              required
            >
              <option>Select</option>
              <option value="yes">Healthy</option>
              <option value="no">UnHealthy</option>
            </select>

            <label>Date and time of last seen</label>
            <input
              type="datetime-local"
              max={new Date().toISOString().slice(0, -5)}
              value={lastSeen}
              onChange={(e) => {
                setLastSeen(e.target.value);
              }}
              required
            />

            <label>Location</label>
            <textarea
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              required
            />
          </fieldset>

          <br />
          {/* SIGHTER INFORMATION */}
          <fieldset>
            <legend>Please give observer information</legend>

            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </fieldset>

          <button className="FormSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddSightingForm;
