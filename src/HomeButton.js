import React from "react";

const HomeButton = ({ onClick }) => {
  return (
    <button
      style={styles.button}
      onClick={onClick} // Calls onClick prop passed from App.js to reset state
    >
      Home
    </button>
  );
};

const styles = {
  button: {
    position: "fixed",
    top: "4.2rem",
    left: "20px",
    backgroundColor: "rgb(0 0 0 / 83%)", // Violet color
    color: "#fff",
    border: "1px solid rgb(255 255 255 / 50%)",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    zIndex: 1000,
  },
};

export default HomeButton;
