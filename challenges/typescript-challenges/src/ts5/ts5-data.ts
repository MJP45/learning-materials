export interface IPerson {
    id: number;
    isActive: boolean;
    eyeColor?: "brown" | "blue" | "green";
    name: string;
    company: string;
    email?: string;
    mobileNumber?: string;
    address: string;
  }
export let people: IPerson[] = [
    {
      address: "690 Charles Place, Santel, Northern Mariana Islands, 3791",
      company: "JASPER",
      email: "ingridtownsendatjasper.com",
      eyeColor: "brown",
      id: 293,
      isActive: false,
      name: "Ingrid Townsend",
    },
    {
      address: "317 Seeley Street, Cade, Maryland, 3976",
      company: "FIBRODYNE",
      email: "estradanolan@fibrodyne.com",
      id: 581,
      isActive: true,
      name: "Estrada Nolan",
    },
    {
      address: "760 Provost Street, Valle, Alaska, 4628",
      company: "INTRAWEAR",
      email: "laverneandrewsatintrawear.com",
      eyeColor: "brown",
      id: 29,
      isActive: true,
      name: "Laverne Andrews",
    },
    {
      address: "452 Union Avenue, Hachita, Palau, 9166",
      company: "SENMAO",
      email: "hullwoodward@senmao.com",
      eyeColor: "green",
      id: 856,
      isActive: false,
      name: "Hull Woodward",
    },
    {
      address: "350 Remsen Avenue, Abrams, Ohio, 6355",
      company: "EYERIS",
      email: "mariastanley@eyeris.com",
      eyeColor: "green",
      id: 2321,
      isActive: false,
      name: "Maria Stanley",
    },
    {
      address: "350 Remsen Avenue, Abrams, Ohio, 6355",
      company: "EYERIS",
      eyeColor: "blue",
      id: 4138,
      isActive: true,
      name: "Maria Stanley",
    },
  ];
