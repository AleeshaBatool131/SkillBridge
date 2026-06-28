import seller1 from "/images/seller1.jpg";
import seller2 from "/images/seller2.jpg";

const sellers = [
  {
    id: 1,
    name: "Ali Hassan",
    title: "Full Stack Developer",
    experience: "5 Years Experience",

    image: seller1,

    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript"
    ],

    portfolio: [
      "/images/portfolio1.jpg",
      "/images/portfolio2.jpg",
      "/images/portfolio3.jpg"
    ]
  },

  {
    id: 2,
    name: "Sara Khan",
    title: "UI/UX Designer",
    experience: "4 Years Experience",

    image: seller2,

    skills: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator"
    ],

    portfolio: [
      "/images/design1.jpg",
      "/images/design2.jpg",
      "/images/design3.jpg"
    ]
  }
];

export default sellers;