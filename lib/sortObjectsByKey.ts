export type SortableByCategory = { category: string };
export type SortableByName = { name: string };

export function sortByCategory<T extends SortableByCategory>(
  objectsToBeSorted: T[],
): T[] {
  return objectsToBeSorted.sort((a, b) => {
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

export function sortByName<T extends SortableByName>(
  objectsToBeSorted: T[],
): T[] {
  return objectsToBeSorted.sort((a, b) => {
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
