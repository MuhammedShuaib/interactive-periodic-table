import React from "react";

const ElementModal = ({ element, onClose }) => {
  if (!element) return null; // If no element is passed, don’t show the modal

  // This function closes the modal when clicking outside the modal area
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={styles.overlay} onClick={handleOutsideClick}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>
          {element.element} ({element.symbol})
        </h2>
        <p>
          <strong>Atomic Number:</strong> {element.atomicNumber}
        </p>
        <p>
          <strong>Group:</strong> {element.group}
        </p>
        <p>
          <strong>State at Room Temperature:</strong> {element.stateAtRoomTemp}
        </p>
        <p>
          <strong>Color:</strong> {element.color}
        </p>
        <p>
          <strong>Key Properties:</strong> {element.keyProperties}
        </p>
        <p>
          <strong>Electronic Configuration:</strong>{" "}
          {element.electronicConfiguration}
        </p>
        <p>
          <strong>Density:</strong> {element.density} g/cm³
        </p>
        <p>
          <strong>Melting Point:</strong> {element.meltingPoint.C}°C /{" "}
          {element.meltingPoint.K}K
        </p>
        <p>
          <strong>Boiling Point:</strong> {element.boilingPoint.C}°C /{" "}
          {element.boilingPoint.K}K
        </p>
        <p>
          <strong>Electronegativity:</strong>{" "}
          {element.electronegativity || "N/A"}
        </p>
        <p>
          <strong>Oxidation States:</strong>{" "}
          {element.oxidationStates.join(", ")}
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    position: "relative",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px",
    cursor: "pointer",
  },
};

export default ElementModal;
