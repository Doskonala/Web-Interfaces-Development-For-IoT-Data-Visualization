import localforage from "localforage";

const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", password: "password123", role: "admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", password: "secure456", role: "admin" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", password: "energy789", role: "user" },
    { id: 4, name: "David White", email: "david@example.com", password: "household321", role: "user" },
    { id: 5, name: "Eva Green", email: "eva@example.com", password: "password987", role: "user" },
    { id: 6, name: "Frank Miller", email: "frank@example.com", password: "mypass999", role: "user" },
  ];

  const houses = [
    { id: 1, ownerId: 1, address: "123 Main St", city: "Springfield", terrain: "plain" },
    { id: 2, ownerId: 1, address: "456 River Rd", city: "Greenwood", terrain: "mountain" },
    { id: 3, ownerId: 2, address: "789 Oak St", city: "Lakeside", terrain: "plain" },
    { id: 4, ownerId: 2, address: "101 Pine Ave", city: "Hilltop", terrain: "mountain" },
    { id: 5, ownerId: 3, address: "202 Maple Ln", city: "Brookville", terrain: "plain" },
    { id: 6, ownerId: 3, address: "303 Cedar Ct", city: "Meadowtown", terrain: "plain" },
    { id: 7, ownerId: 3, address: "404 Birch Blvd", city: "Rockridge", terrain: "mountain" },
    { id: 8, ownerId: 4, address: "505 Spruce St", city: "Summit", terrain: "mountain" },
    { id: 9, ownerId: 4, address: "606 Walnut Dr", city: "Riverbend", terrain: "plain" },
    { id: 10, ownerId: 5, address: "707 Elm Rd", city: "Forestville", terrain: "mountain" },
    { id: 11, ownerId: 5, address: "808 Aspen Ct", city: "Lakeview", terrain: "plain" },
    { id: 12, ownerId: 5, address: "909 Redwood Ln", city: "Highland", terrain: "mountain" },
    { id: 13, ownerId: 6, address: "1010 Chestnut Blvd", city: "Meadowfield", terrain: "plain" },
    { id: 14, ownerId: 6, address: "1111 Magnolia Dr", city: "Valleytown", terrain: "plain" },
    { id: 15, ownerId: 6, address: "1212 Palm Ave", city: "Stonehill", terrain: "mountain" },
    { id: 16, ownerId: 6, address: "1313 Cypress St", city: "Riverside", terrain: "plain" },
    { id: 17, ownerId: 6, address: "1414 Willow Ct", city: "Crestwood", terrain: "mountain" },
    { id: 18, ownerId: 6, address: "1515 Oakwood Dr", city: "Seaview", terrain: "plain" },
  ];

const consumptionTypes = [
  { id: 1, houseId: 1, type: "Home", usage: { Jan: 120, Feb: 110, Mar: 130, Apr: 140, May: 135, Jun: 145, Jul: 150, Aug: 148, Sep: 140, Oct: 130, Nov: 125, Dec: 120 } },
  { id: 2, houseId: 1, type: "Garage", usage: { Jan: 50, Feb: 45, Mar: 55, Apr: 60, May: 58, Jun: 65, Jul: 70, Aug: 68, Sep: 63, Oct: 55, Nov: 50, Dec: 48 } },
  { id: 3, houseId: 2, type: "Farm", usage: { Jan: 300, Feb: 280, Mar: 320, Apr: 350, May: 340, Jun: 360, Jul: 370, Aug: 365, Sep: 355, Oct: 320, Nov: 310, Dec: 300 } },
  { id: 4, houseId: 3, type: "Workshop", usage: { Jan: 200, Feb: 190, Mar: 210, Apr: 220, May: 215, Jun: 225, Jul: 230, Aug: 228, Sep: 220, Oct: 210, Nov: 205, Dec: 200 } },
  { id: 5, houseId: 4, type: "Storage", usage: { Jan: 80, Feb: 75, Mar: 85, Apr: 90, May: 88, Jun: 95, Jul: 100, Aug: 98, Sep: 93, Oct: 85, Nov: 80, Dec: 78 } },
  { id: 6, houseId: 5, type: "Greenhouse", usage: { Jan: 250, Feb: 230, Mar: 260, Apr: 280, May: 270, Jun: 290, Jul: 300, Aug: 295, Sep: 285, Oct: 260, Nov: 250, Dec: 240 } },
  { id: 7, houseId: 6, type: "Workshop", usage: { Jan: 150, Feb: 140, Mar: 160, Apr: 170, May: 165, Jun: 175, Jul: 180, Aug: 178, Sep: 170, Oct: 160, Nov: 155, Dec: 150 } },
  { id: 8, houseId: 7, type: "Garage", usage: { Jan: 90, Feb: 85, Mar: 95, Apr: 100, May: 98, Jun: 105, Jul: 110, Aug: 108, Sep: 103, Oct: 95, Nov: 90, Dec: 88 } },
  { id: 9, houseId: 8, type: "Farm", usage: { Jan: 320, Feb: 300, Mar: 340, Apr: 360, May: 350, Jun: 370, Jul: 380, Aug: 375, Sep: 365, Oct: 340, Nov: 330, Dec: 320 } },
  { id: 10, houseId: 9, type: "Home", usage: { Jan: 130, Feb: 120, Mar: 140, Apr: 150, May: 145, Jun: 155, Jul: 160, Aug: 158, Sep: 150, Oct: 140, Nov: 135, Dec: 130 } },
];

export const initializeData = async () => {
  await localforage.setItem("users", users);
  await localforage.setItem("houses", houses);
  await localforage.setItem("consumptionTypes", consumptionTypes);
};
