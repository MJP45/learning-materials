export interface IPerson {
    children?: IPerson[];
    name: string;
    partners?: string[];
  }

export let liz: IPerson = {
    children: [
      {
        children: [
          {
            children: [
              {
                name: "George",
              },
              {
                name: "Charlotte",
              },
              {
                name: "Louis",
              },
            ],
            name: "William",
            partners: ["Catherine"],
          },
          {
            name: "Harry",
            partners: ["Meghan"],
          },
        ],
        name: "Charles",
        partners: ["Camilla", "Diana"],
      },
      {
        children: [
          {
            children: [
              {
                name: "Savannah",
              },
              {
                name: "Isla",
              },
            ],
            name: "Peter",
            partners: ["Autumn"],
          },
          {

            children: [
              {
                name: "Mia",
              },
              {
                name: "Lena",
              },
            ],
            name: "Zara",
            partners: ["Mike"],
          },
        ],
        name: "Anne",
        partners: ["Mark", "Timothy"],
      },
      {
        children: [
          {
            name: "Beatrice",
          },
          {
            name: "Eugenie",
            partners: ["Jack"],
          },
        ],
        name: "Andrew",
        partners: ["Sarah"],
      },
      {
        children: [
          {
            name: "Louise",
          },
          {
            name: "James",
          },
        ],
        name: "Edward",
        partners: ["Sophie"],
      },
    ],
    name: "Elizabeth",
    partners: ["Phillip"],
  };
