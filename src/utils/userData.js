import localforage from "localforage";

const users = [
    { id: 1, name: "Nataliia Kashuba", email: "nataliia.kashuba-item241@nung.edu.ua", password: "password123", role: "admin" },
    { id: 2, name: "Natalie Kashuba", email: "natalie.kashuba-item241@nung.edu.ua", password: "secure456", role: "admin" },
    { id: 3, name: "Nataly Kashuba", email: "nataly.kashuba-item241@nung.edu.ua", password: "energy789", role: "user" },
    { id: 4, name: "Natty Kashuba", email: "natty.kashuba-item241@nung.edu.ua", password: "household321", role: "user" },
    { id: 5, name: "Nattie Kashuba", email: "nattie.kashuba-item241@nung.edu.ua", password: "password987", role: "user" },
    { id: 6, name: "Nat Kashuba", email: "nat.kashuba-item241@nung.edu.ua", password: "mypass999", role: "user" },
  ];

  const addresses = [
    { id: 1, ownerId: 1, address: "15 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 2, ownerId: 1, address: "14 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 3, ownerId: 2, address: "16 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 4, ownerId: 2, address: "13 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 5, ownerId: 3, address: "17 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 6, ownerId: 3, address: "12 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 7, ownerId: 3, address: "18 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 8, ownerId: 4, address: "11 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 9, ownerId: 4, address: "19 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 10, ownerId: 5, address: "10 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 11, ownerId: 5, address: "20 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 12, ownerId: 5, address: "9 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 13, ownerId: 6, address: "21 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 14, ownerId: 6, address: "8 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 15, ownerId: 6, address: "22 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 16, ownerId: 6, address: "7 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
    { id: 17, ownerId: 6, address: "23 Karpatska", city: "Ivano-Frankivsk", entity: "Legal Entity" },
    { id: 18, ownerId: 6, address: "6 Karpatska", city: "Ivano-Frankivsk", entity: "Individual" },
  ];

const generationYears = [
  { id: 1, addressId: 1, type: "2024", generation: { Jan: 120, Feb: 110, Mar: 130, Apr: 140, May: 135, Jun: 145, Jul: 150, Aug: 148, Sep: 140, Oct: 130, Nov: 125, Dec: 120 } },
  { id: 2, addressId: 1, type: "2023", generation: { Jan: 50, Feb: 45, Mar: 55, Apr: 60, May: 58, Jun: 65, Jul: 70, Aug: 68, Sep: 63, Oct: 55, Nov: 50, Dec: 48 } },
  { id: 3, addressId: 2, type: "2022", generation: { Jan: 300, Feb: 280, Mar: 320, Apr: 350, May: 340, Jun: 360, Jul: 370, Aug: 365, Sep: 355, Oct: 320, Nov: 310, Dec: 300 } },
  { id: 4, addressId: 3, type: "2021", generation: { Jan: 200, Feb: 190, Mar: 210, Apr: 220, May: 215, Jun: 225, Jul: 230, Aug: 228, Sep: 220, Oct: 210, Nov: 205, Dec: 200 } },
  { id: 5, addressId: 4, type: "2020", generation: { Jan: 80, Feb: 75, Mar: 85, Apr: 90, May: 88, Jun: 95, Jul: 100, Aug: 98, Sep: 93, Oct: 85, Nov: 80, Dec: 78 } },
  { id: 6, addressId: 5, type: "2019", generation: { Jan: 250, Feb: 230, Mar: 260, Apr: 280, May: 270, Jun: 290, Jul: 300, Aug: 295, Sep: 285, Oct: 260, Nov: 250, Dec: 240 } },
  { id: 7, addressId: 6, type: "2021", gneration: { Jan: 150, Feb: 140, Mar: 160, Apr: 170, May: 165, Jun: 175, Jul: 180, Aug: 178, Sep: 170, Oct: 160, Nov: 155, Dec: 150 } },
  { id: 8, addressId: 7, type: "2023", generation: { Jan: 90, Feb: 85, Mar: 95, Apr: 100, May: 98, Jun: 105, Jul: 110, Aug: 108, Sep: 103, Oct: 95, Nov: 90, Dec: 88 } },
  { id: 9, addressId: 8, type: "2022", generation: { Jan: 320, Feb: 300, Mar: 340, Apr: 360, May: 350, Jun: 370, Jul: 380, Aug: 375, Sep: 365, Oct: 340, Nov: 330, Dec: 320 } },
  { id: 10, addressId: 9, type: "2024", generation: { Jan: 130, Feb: 120, Mar: 140, Apr: 150, May: 145, Jun: 155, Jul: 160, Aug: 158, Sep: 150, Oct: 140, Nov: 135, Dec: 130 } },
];

export const initializeData = async () => {
  await localforage.setItem("users", users);
  await localforage.setItem("addresses", addresses);
  await localforage.setItem("generationYears", generationYears);
};
