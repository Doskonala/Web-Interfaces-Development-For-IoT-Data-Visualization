import React, { useEffect, useState } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import localforage from "localforage";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [houses, setHouses] = useState([]);
  const [consumptionTypes, setConsumptionTypes] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("");
  const [selectedTerrain, setSelectedTerrain] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    localforage.getItem("currentUser").then(setUser);
    localforage.getItem("users").then(setUsers);
    localforage.getItem("houses").then(setHouses);
    localforage.getItem("consumptionTypes").then(setConsumptionTypes);
  }, []);

  useEffect(() => {
    if (!selectedHouse) {
      setFilteredData([]);
      return;
    }

    let filtered = consumptionTypes.filter((c) => c.houseId.toString() === selectedHouse);

    if (selectedType) {
      filtered = filtered.filter((c) => c.type === selectedType);
    }

    if (selectedTerrain) {
      const validHouseIds = houses
        .filter((h) => h.terrain === selectedTerrain)
        .map((h) => h.id);
      filtered = filtered.filter((c) => validHouseIds.includes(c.houseId));
    }

    const aggregatedConsumption = Object.keys(filtered[0]?.usage || {}).map((month) => ({
      month,
      usage: filtered.reduce((sum, item) => sum + item.usage[month], 0),
    }));

    setFilteredData(aggregatedConsumption);
  }, [selectedHouse, selectedType, selectedTerrain, consumptionTypes, houses]);

  if (!user) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">You need to log in to access the dashboard.</Alert>
      </Container>
    );
  }

  const userHouses = houses.filter((house) => house.ownerId === user.id);
  const uniqueTerrains = [...new Set(houses.map((house) => house.terrain))];
  const uniqueTypes = [...new Set(consumptionTypes.map((c) => c.type))];

  return (
    <Container className="mt-4">
      <h2>Energy Consumption Dashboard</h2>

      {/* House selection */}
      <Form.Group className="mb-3">
        <Form.Label>Select House</Form.Label>
        <Form.Select value={selectedHouse} onChange={(e) => setSelectedHouse(e.target.value)}>
          <option value="">-- Select a House --</option>
          {userHouses.map((house) => (
            <option key={house.id} value={house.id}>
              {house.address} ({house.city})
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Terrain selection (only for admins) */}
      {user.role === "admin" && (
        <Form.Group className="mb-3">
          <Form.Label>Select Terrain</Form.Label>
          <Form.Select value={selectedTerrain} onChange={(e) => setSelectedTerrain(e.target.value)}>
            <option value="">-- All Terrain Types --</option>
            {uniqueTerrains.map((terrain) => (
              <option key={terrain} value={terrain}>
                {terrain.charAt(0).toUpperCase() + terrain.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      {/* Consumption type selection */}
      <Form.Group className="mb-3">
        <Form.Label>Select Consumption Type</Form.Label>
        <Form.Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">-- All Types --</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Bar chart visualization */}
      {filteredData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Alert variant="info">No data available. Select different filters.</Alert>
      )}
    </Container>
  );
};

export default Dashboard;
