const { sortByCategory } = require("../lib/sortObjectsByKey");

const databases = "Databases";

let BLOGS = [
  {
    category: databases,
    name: "PostgreSQL",
    url: "/blogs/postgresql",
    description: "Notes on postgresql",
  },
];

BLOGS = sortByCategory(BLOGS);

module.exports = BLOGS;
