function sortByCategory(objectToBeSorted) {
  return objectToBeSorted.sort((a, b) => {
    const categoryA = a.category.toUpperCase();
    const categoryB = b.category.toUpperCase();
    if (categoryA < categoryB) {
      return -1;
    }
    if (categoryA > categoryB) {
      return 1;
    }

    return 0;
  });
}

function sortByName(objectToBeSorted) {
  return objectToBeSorted.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
}

module.exports = {
  sortByCategory,
  sortByName,
};
