import type { Student } from '../types';

export const students: Student[] = [
  {
    name: "William Cagas",
    website: "https://wcagas.com",
    pfp: "assets/pfps/william-cagas.JPG",
  },
  {
    name: "Ricky Tang",
    website: "https://www.rickytang.dev",
    pfp: "assets/pfps/ricky-tang.jpg",
  },
  {
    name: "Hamza Ammar",
    website: "https://hamzaammar.ca",
    pfp: "assets/pfps/hamza-ammar.png"
  },
  {
    name: "Qinkai Li",
    website: "https://batteryspecial.vercel.app",
    pfp: "assets/pfps/qinkai-li.jpg" // Do not include 'public/' in the path!
  },
  // Add your name right above this comment!
  // Example:
  // {
  //   name: "John Doe",
  //   website: "https://johndoe.com",
  //   pfp: "assets/pfps/john-doe.jpg", // Do not include 'public/' in the path!
  // },
];
