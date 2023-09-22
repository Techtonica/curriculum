import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddSightingForm from "./addSightingForm/AddSightingForm";
import DetailPage from "./detail/DetailPage";
import IndividualList from "./sighting/SightingList";

const Controller = () => {
  const navigate = useNavigate();

  const [sighting, setSighting] = useState([]);

  const getAllSighting = async () => {
    const request = await fetch("/api/sighting");
    const result = await request.json();
    console.log(result);
    setSighting(result);
  };

  useEffect(() => {
    getAllSighting();
  }, []);

  // AddSightingForm

  const handleAddOnSubmit = async (newSighting) => {
    console.log(newSighting);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting)
    };
    const request = await fetch("/api/sighting", requestOptions);
    console.log(request);
    await request.json();
    navigate("/", { replace: true });
  };

  // Delete sighting from Sighting List
  const handleDeleteSighting = async (deleteId) => {
    let response = await fetch(`/api/sighting/${deleteId}`, {
      method: "DELETE"
    });

    const deleteSighting = sighting.filter(
      (sighting) => sighting.id !== deleteId
    );

    console.log(deleteSighting);
    setSighting(deleteSighting);
  };

  // Return

  return (
    <Routes>
      <Route
        path="/"
        element={
          <IndividualList
            sighting={sighting}
            deleteSighting={handleDeleteSighting}
          />
        }
      />
      <Route
        path="add"
        element={<AddSightingForm addNewSighting={handleAddOnSubmit} />}
      />
      <Route path="detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Controller;
