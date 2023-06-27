const { sortByCategory } = require("../lib/sortObjectsByKey");

const databases = "Databases";
const maths = "Mathematics";
const networking = "Computer Networking";
const reversing = "Reverse Engineering";

let BLOGS = [
  {
    category: databases,
    name: "PostgreSQL",
    url: "/blogs/postgresql",
    description: "Notes on postgresql",
  },
  {
    category: maths,
    name: "Complex Numbers and Quadratic Equations",
    url: "/blogs/cnAndQuadraticEq",
    description: "Summary on Complex Numbers and Quadratic Equations.",
  },
  {
    category: maths,
    name: "Trigonometry",
    url: "/blogs/trigonometry",
    description: "Trigonometric formulae [sin, cos, tan...]",
  },
  {
    category: networking,
    name: "OSI Model",
    url: "/blogs/osiModel",
    description: "OSI model and understanding each layer.",
  },
  {
    category: reversing,
    name: "GDB",
    url: "/blogs/gdbIntro",
    description: "Introduction to GDB.",
  },
  {
    category: reversing,
    name: "x86-64bit Registers",
    url: "/blogs/intelRegisters64",
    description:
      "Quick reference for x86-64 bit Intel General Purpose Registers.",
  },
];

BLOGS = sortByCategory(BLOGS);

module.exports = BLOGS;
