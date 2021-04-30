const location = [
  {
    address: {
      street: "01",
      subdistrict: "Bekasi",
      district: "Bekasi",
      city: "Bekasi",
      state: "West Java",
      postalCode: "17158",
      country: "Indonesia",
      coordinates: [-6.2841796, 106.833289],
    },
  },
  {
    address: {
      street: "02",
      subdistrict: "Lahat",
      district: "Lahat",
      city: "Lahat",
      state: "South Sumatera",
      postalCode: "31414",
      country: "Indonesia",
      coordinates: [-3.8762831, 103.0633793],
    },
  },
  {
    address: {
      street: "02",
      subdistrict: "Lahat",
      district: "Lahat",
      city: "Lahat",
      state: "South Sumatera",
      postalCode: "31414",
      country: "Indonesia",
      coordinates: [-3.8762831, 103.0633793],
    },
  },
];

let result = [];

for (var i = 0; i < location.length; i++) {
  result.push({
    city: location[i].address.city,
    state: location[i].address.state,
  });
}

console.log(result);
