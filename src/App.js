import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import elements from "./data/elements";
import ElementModal from "./ElementModal";
import { Tooltip } from "react-tooltip";
import "./App.css";

function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [temperature, setTemperature] = useState(25); // Default to 25°C (room temp)

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const closeModal = () => {
    setSelectedElement(null);
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const getElementState = (element) => {
    if (temperature < element.meltingPoint.C) {
      return "Solid";
    } else if (temperature > element.boilingPoint.C) {
      return "Gas";
    } else {
      return "Liquid";
    }
  };

  const filteredElements = elements
    .filter(
      (el) =>
        selectedGroup === "All" ||
        el.group.toLowerCase() === selectedGroup.toLowerCase()
    )
    .filter(
      (el) =>
        el.element.toLowerCase().includes(searchTerm.toLowerCase()) ||
        el.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="App">
      <Header />

      {/* Temperature Slider */}
      <div
        style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
        <label htmlFor="temperature-slider">Temperature (°C): </label>
        <input
          type="range"
          id="temperature-slider"
          min="-273" // Absolute zero in Celsius
          max="6000" // Arbitrary high limit
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <span> {temperature}°C</span>
      </div>

      {/* Filter dropdown and search input */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
          padding: "10px",
        }}>
        <label htmlFor="group-filter">Filter by Group: </label>
        <select
          id="group-filter"
          value={selectedGroup}
          onChange={handleGroupChange}>
          <option value="All">All</option>
          <option value="Nonmetal">Nonmetals</option>
          <option value="Metal">Metals</option>
          <option value="Noble Gas">Noble Gases</option>
          <option value="Transition Metal">Transition Metal</option>
          <option value="Post-transition Metal">Post-ransition Metal</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or symbol"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            padding: "10px",
            width: "200px",
          }}
        />
      </div>

      <main className="elements-grid">
        {filteredElements.map((el) => (
          <div
            key={el.atomicNumber}
            className={`element ${getElementState(el).toLowerCase()}`}
            onClick={() => handleElementClick(el)}
            style={{ backgroundColor: el.color || "#ccc" }}
            data-tooltip-id="element-tooltip"
            data-tooltip-content={`${el.element} (Atomic #${el.atomicNumber})`}>
            <strong>{el.symbol}</strong>
            <p>{el.atomicNumber}</p>
            <p>{getElementState(el)}</p>
          </div>
        ))}
      </main>

      <Footer />
      <ElementModal element={selectedElement} onClose={closeModal} />

      {/* Tooltip Component */}
      <Tooltip id="element-tooltip" effect="solid" />
    </div>
  );
}

export default App;
