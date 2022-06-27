import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SightingList.css";

const IndividualSightingList = ({ sighting, deleteSighting }) => {
  let [filterHealthy, setFilterHealthy] = useState(false);
  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };

  // Health filter
  const handleToggleHealthy = () => {
    setFilterHealthy(!filterHealthy);
  };

  return (
    <div className="Individual-List">
      <h1 className="List-Header">List of Sightings</h1>
      <div className="Table">
        <table>
          <tbody>
            {/* TABLE HEADER */}
            <tr>
              <th>Nick Name</th>
              <th>Common Name</th>

              <th>
                Health Status
                <button
                  onClick={() => {
                    handleToggleHealthy();
                  }}
                >
                  Toggle Health Status
                </button>
              </th>
              <th>Location</th>
              <th> Date and Time of Seen</th>
              <th>More Details</th>
              <th>Delete</th>
            </tr>
            {/* TABLE DATA */}

            {sighting
              .filter((s) => {
                if (filterHealthy) return s.healthy;
                return true;
              })
              .map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.common_name}</td>
                    <td>{val.healthy ? "Healthy" : "UnHealthy"}</td>
                    <td>{val.location}</td>
                    <td>{new Date(val.last_seen).toLocaleString()}</td>

                    <td>
                      <button onClick={() => routeChange(val.id)}>
                        Details
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteSighting(val.id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndividualSightingList;
