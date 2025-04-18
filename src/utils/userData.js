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
  { id: 1, addressId: 1, type: "2024", generation: { Jan: 280, Feb: 310, Mar: 450, Apr: 520, May: 580, Jun: 650, Jul: 680, Aug: 640, Sep: 520, Oct: 380, Nov: 290, Dec: 250 } },
  { id: 2, addressId: 1, type: "2023", generation: { Jan: 420, Feb: 460, Mar: 590, Apr: 680, May: 750, Jun: 820, Jul: 850, Aug: 810, Sep: 690, Oct: 520, Nov: 430, Dec: 390 } },
  { id: 3, addressId: 2, type: "2022", generation: { Jan: 180, Feb: 210, Mar: 320, Apr: 380, May: 440, Jun: 490, Jul: 510, Aug: 480, Sep: 390, Oct: 280, Nov: 200, Dec: 170 } },
  { id: 4, addressId: 3, type: "2021", generation: { Jan: 340, Feb: 380, Mar: 480, Apr: 560, May: 620, Jun: 690, Jul: 710, Aug: 680, Sep: 570, Oct: 430, Nov: 350, Dec: 320 } },
  { id: 5, addressId: 4, type: "2020", generation: { Jan: 150, Feb: 180, Mar: 270, Apr: 320, May: 380, Jun: 420, Jul: 440, Aug: 410, Sep: 340, Oct: 240, Nov: 170, Dec: 140 } },
  { id: 6, addressId: 5, type: "2019", generation: { Jan: 390, Feb: 430, Mar: 540, Apr: 620, May: 690, Jun: 760, Jul: 790, Aug: 750, Sep: 630, Oct: 480, Nov: 400, Dec: 360 } },
  { id: 7, addressId: 6, type: "2021", gneration: { Jan: 230, Feb: 260, Mar: 380, Apr: 440, May: 500, Jun: 560, Jul: 580, Aug: 550, Sep: 450, Oct: 320, Nov: 240, Dec: 210 } },
  { id: 8, addressId: 7, type: "2023", generation: { Jan: 310, Feb: 350, Mar: 460, Apr: 530, May: 590, Jun: 660, Jul: 680, Aug: 650, Sep: 540, Oct: 400, Nov: 320, Dec: 290 } },
  { id: 9, addressId: 8, type: "2022", generation: { Jan: 260, Feb: 290, Mar: 410, Apr: 470, May: 530, Jun: 590, Jul: 610, Aug: 580, Sep: 480, Oct: 350, Nov: 270, Dec: 240 } },
  { id: 10, addressId: 9, type: "2024", generation: { Jan: 360, Feb: 400, Mar: 510, Apr: 580, May: 650, Jun: 720, Jul: 740, Aug: 710, Sep: 590, Oct: 450, Nov: 370, Dec: 340 } },
];

export const initializeData = async () => {
  await localforage.setItem("users", users);
  await localforage.setItem("addresses", addresses);
  await localforage.setItem("generationYears", generationYears);
};
