import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./DetailPage.css";

function DetailPage() {
  let { id } = useParams();

  const [sightingDetail, setSightingDetail] = useState(null);

  // Access your API from  React app
  const getSightingDetail = async () => {
    const request = await fetch(`/api/sighting/${id}`);
    const result = await request.json();
    console.log(result);
    setSightingDetail(result);
  };

  useEffect(() => {
    getSightingDetail();
  }, []);

  return sightingDetail ? (
    <div className="detailPage">
      <h1>Individual Sighting Detail</h1>
      <h2>{sightingDetail.name}</h2>
      <div className="detailList">
        <p>Nick Name: {sightingDetail.name}</p>
        <p>Scientific Name: {sightingDetail.scientific_name}</p>
        <p>Common Name: {sightingDetail.common_name}</p>
        <p>Conservation Status: {sightingDetail.conservation_status}</p>
        <p>Population: {sightingDetail.population}</p>
        <p>Location:{sightingDetail.location}</p>
        <p>Last Seen: {sightingDetail.last_seen}</p>
        <p>Sighter Email: {sightingDetail.email}</p>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default DetailPage;
