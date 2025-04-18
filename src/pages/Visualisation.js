import React, { useEffect, useState } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import localforage from "localforage";

const Visualisation = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [generationYears, setGenerationYears] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedYear, setSelectedTYear] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    localforage.getItem("currentUser").then(setUser);
    localforage.getItem("users").then(setUsers);
    localforage.getItem("addresses").then(setAddresses);
    localforage.getItem("generationYears").then(setGenerationYears);
  }, []);

  useEffect(() => {
    if (!selectedAddress) {
      setFilteredData([]);
      return;
    }

    let filtered = generationYears.filter((c) => c.addressId.toString() === selectedAddress);

    if (selectedYear) {
      filtered = filtered.filter((c) => c.type === selectedYear);
    }

    if (selectedEntity) {
      const validAddressIds = addresses
        .filter((h) => h.entity === selectedEntity)
        .map((h) => h.id);
      filtered = filtered.filter((c) => validAddressIds.includes(c.addressId));
    }

    const aggregatedGeneration = Object.keys(filtered[0]?.generation || {}).map((month) => ({
      month,
      generation: filtered.reduce((sum, item) => sum + item.generation[month], 0),
    }));

    setFilteredData(aggregatedGeneration);
  }, [selectedAddress, selectedYear, selectedEntity, generationYears, addresses]);

  if (!user) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">You need to log in to access the data.</Alert>
      </Container>
    );
  }

  const userAddresses = addresses.filter((address) => address.ownerId === user.id);
  const uniqueEntities = [...new Set(addresses.map((address) => address.entity))];
  const uniqueTypes = [...new Set(generationYears.map((c) => c.type))];

  return (
    <Container className="mt-4">
      <h2>Energy Generation by Solar Panels</h2>

      {/* Address selection */}
      <Form.Group className="mb-3">
        <Form.Label>Select Address</Form.Label>
        <Form.Select value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)}>
          <option value="">-- Select an Address --</option>
          {userAddresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.address} ({address.city})
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Entity selection (only for admins) */}
      {user.role === "admin" && (
        <Form.Group className="mb-3">
          <Form.Label>Select Entity Type</Form.Label>
          <Form.Select value={selectedEntity} onChange={(e) => setSelectedEntity(e.target.value)}>
            <option value="">-- All Entity Types --</option>
            {uniqueEntities.map((entity) => (
              <option key={entity} value={entity}>
                {entity.charAt(0).toUpperCase() + entity.slice(1)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      {/* Generation year selection */}
      <Form.Group className="mb-3">
        <Form.Label>Select Generation Year</Form.Label>
        <Form.Select value={selectedYear} onChange={(e) => setSelectedTYear(e.target.value)}>
          <option value="">-- All Years --</option>
          {uniqueTypes.map((year) => (
            <option key={year} value={year}>
              {year}
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
            <Bar dataKey="generation" fill="#4e8238" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <Alert variant="info">No data available. Select different filters.</Alert>
      )}
    </Container>
  );
};

export default Visualisation;