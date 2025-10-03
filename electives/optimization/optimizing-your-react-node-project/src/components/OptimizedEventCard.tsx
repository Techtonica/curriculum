"use client";

import React from "react";

interface Event {
  id: string;
  title: string;
  description: string;
  venue_name: string;
  start_time: string;
  city_name: string;
  region_abbr: string;
}

interface EventCardProps {
  event: Event;
  onDelete?: (id: string) => void;
  onEdit?: (event: Event) => void;
}

// Optimized version using React.memo for performance comparison
const OptimizedEventCard: React.FC<EventCardProps> = React.memo(
  ({ event, onDelete, onEdit }) => {
    console.log(`Rendering OptimizedEventCard for: ${event.title}`); // For debugging re-renders

    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "10px",
          backgroundColor: "white",
          position: "relative"
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>{event.title}</h4>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          {event.description}
        </p>
        <div style={{ fontSize: "14px", color: "#888" }}>
          <div>
            <strong>Venue:</strong> {event.venue_name}
          </div>
          <div>
            <strong>Location:</strong> {event.city_name}, {event.region_abbr}
          </div>
          <div>
            <strong>Date:</strong>{" "}
            {new Date(event.start_time).toLocaleDateString()}
          </div>
        </div>

        {(onDelete || onEdit) && (
          <div style={{ marginTop: "10px" }}>
            {onEdit && (
              <button
                onClick={() => onEdit(event)}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "8px",
                  fontSize: "12px"
                }}
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(event.id)}
                style={{
                  padding: "4px 8px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

OptimizedEventCard.displayName = "OptimizedEventCard";

export default OptimizedEventCard;
