import React from "react";
import fundamentalRights from "../fundamentalRightsData";

// PUBLIC_INTERFACE
/**
 * FundamentalRightsList
 * Displays a vertical, clickable list of all Fundamental Rights using titles from data.
 * No navigation is implemented at this stage.
 */
function FundamentalRightsList() {
  return (
    <div className="fr-list-container" style={{
      width: "100%",
      maxWidth: 600,
      margin: "48px auto 0 auto",
      padding: "32px 0",
      background: "var(--secondary, #fff)",
      borderRadius: 16,
      boxShadow: "0 2px 16px rgba(25, 118, 210, 0.07)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h2 style={{
        color: "var(--primary, #1976D2)",
        marginBottom: 32,
        textAlign: "center",
        fontWeight: 700,
        fontSize: "2.2rem",
        letterSpacing: "-1.1px"
      }}>
        Explore Fundamental Rights
      </h2>
      <div style={{ width: "100%" }}>
        {fundamentalRights.map((right, idx) => (
          <button
            key={right.title}
            type="button"
            className="btn fr-list-btn"
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              background: "var(--primary, #1976D2)",
              color: "#fff",
              fontSize: "1.25rem",
              fontWeight: 500,
              marginBottom: 16,
              borderRadius: 8,
              padding: "18px 24px",
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.09)",
              transition: "background 0.18s",
              cursor: "pointer",
              border: "none",
              outline: "none"
            }}
            // No click handler for navigation yet
            tabIndex={0}
            aria-label={`View details for ${right.title}`}
          >
            {right.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FundamentalRightsList;
