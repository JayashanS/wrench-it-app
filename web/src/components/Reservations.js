import React from "react";

const Reservations = () => {
  const pageStyle = {
    backgroundColor: "#0c091f",
    minHeight: "100vh",
    marginLeft: "200px",
    color: "#fff",
  };

  return (
    <div style={pageStyle}>
      #Reservations
      <p style={{ fontSize: "12px", fontFamily: "Roboto, sans-serif" }}>
        Font Size 12px
      </p>
      <p style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}>
        Font Size 16px
      </p>
      <p style={{ fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>
        Font Size 20px
      </p>
      <p style={{ fontSize: "24px", fontFamily: "Roboto, sans-serif" }}>
        Font Size 24px
      </p>
      <p style={{ fontSize: "32px", fontFamily: "Roboto, sans-serif" }}>
        Font Size 32px
      </p>
    </div>
  );
};

export default Reservations;
