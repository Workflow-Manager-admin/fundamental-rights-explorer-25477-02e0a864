import React from "react";
import fundamentalRights from "../fundamentalRightsData";

// PUBLIC_INTERFACE
/**
 * FundamentalRightsList
 * Displays a vertical, clickable list of all Fundamental Rights using titles from data.
 * Props:
 *   onSelectRight: function(index) - called when a right is selected (for navigation)
 */
function FundamentalRightsList({ onSelectRight }) {
  return (
    <div
      className="fr-list-container"
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "48px auto 0 auto",
        padding: "32px 0",
        background: "var(--secondary)",
        borderRadius: 16,
        boxShadow: "var(--btn-shadow)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1.2px solid var(--border-color)"
      }}
    >
      <h2
        style={{
          color: "var(--primary)",
          marginBottom: 32,
          textAlign: "center",
          fontWeight: 800,
          fontSize: "2.15rem",
          letterSpacing: "-1.1px"
        }}
      >
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
              background: "var(--primary)",
              color: "var(--primary-contrast)",
              fontSize: "1.18rem",
              fontWeight: 600,
              marginBottom: 16,
              borderRadius: 8,
              padding: "18px 24px",
              boxShadow: "0 2px 7px rgba(25,118,210,0.08)",
              transition: "background 0.16s, color 0.16s",
              cursor: "pointer",
              outline: "none",
              border: "none"
            }}
            onClick={onSelectRight ? () => onSelectRight(idx) : undefined}
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
