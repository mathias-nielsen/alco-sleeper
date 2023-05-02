const drinksDefinitions = [
  {
    id: 1,
    title: "Red wine",
    description: "150ml, 16%",
  },
  {
    id: 2,
    title: "Special Beer",
    description: "450ml, 7%",
  },
  {
    id: 3,
    title: "White wine",
    description: "150ml, 9%",
  },
  {
    id: 4,
    title: "Beer",
    description: "330ml, 4.6%",
  },
  {
    id: 5,
    title: "Snaps",
    description: "40ml, 40%",
  },
];

const manuelEntries = [
  {
    date: "2023-03-10",
    total: 2,
    drinkReferences: [
      {
        id: 1,
        amount: 2,
      },
    ],
  },
  {
    date: "2023-03-11",
    total: 1,
    drinkReferences: [
      {
        id: 1,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-14",
    total: 1,
    drinkReferences: [
      {
        id: 2,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-15",
    total: 1,
    drinkReferences: [
      {
        id: 2,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-17",
    total: 3,
    drinkReferences: [
      {
        id: 1,
        amount: 3,
      },
    ],
  },
  {
    date: "2023-03-19",
    total: 2,
    drinkReferences: [
      {
        id: 2,
        amount: 2,
      },
    ],
  },
  {
    date: "2023-03-24",
    total: 1,
    drinkReferences: [
      {
        id: 2,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-25",
    total: 9,
    drinkReferences: [
      {
        id: 1,
        amount: 5,
      },
      {
        id: 2,
        amount: 4,
      },
    ],
  },
  {
    date: "2023-03-26",
    total: 2,
    drinkReferences: [
      {
        id: 1,
        amount: 1,
      },
      {
        id: 2,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-30",
    total: 1,
    drinkReferences: [
      {
        id: 3,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-03-31",
    total: 1,
    drinkReferences: [
      {
        id: 2,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-04-01",
    total: 7,
    drinkReferences: [
      {
        id: 1,
        amount: 7,
      },
    ],
  },
  {
    date: "2023-04-04",
    total: 1,
    drinkReferences: [
      {
        id: 1,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-04-07",
    total: 7,
    drinkReferences: [
      {
        id: 4,
        amount: 7,
      },
    ],
  },
  {
    date: "2023-04-08",
    total: 11,
    drinkReferences: [
      {
        id: 4,
        amount: 6,
      },
      {
        id: 5,
        amount: 5,
      },
    ],
  },
  {
    date: "2023-04-09",
    total: 1,
    drinkReferences: [
      {
        id: 4,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-04-18",
    total: 5,
    drinkReferences: [
      {
        id: 1,
        amount: 5,
      },
    ],
  },
  {
    date: "2023-04-22",
    total: 1,
    drinkReferences: [
      {
        id: 1,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-04-23",
    total: 3,
    drinkReferences: [
      {
        id: 1,
        amount: 2,
      },
      {
        id: 4,
        amount: 1,
      },
    ],
  },
  {
    date: "2023-04-25",
    total: 1,
    drinkReferences: [
      {
        id: 1,
        amount: 1,
      },
    ],
  },
  // One AlcoEntry
  {
    date: "2023-04-27",
    total: 2,
    drinkReferences: [
      {
        id: 3,
        amount: 2,
      },
    ],
  },
];

export { manuelEntries, drinksDefinitions };
