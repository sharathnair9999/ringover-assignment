export const arrangeSFData = (arr, searchTerm) => {
  return [
    ...new Set(
      arr
        ?.filter((word) =>
          word.data.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .map((word) => word)
        .sort((a, b) => (a.data < b.data ? -1 : a.data > b.data ? 1 : 0))
    ),
  ].reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr.data[0])) {
      acc = {
        ...acc,
        [curr.data[0]]: [curr],
      };
    } else
      acc = {
        ...acc,
        [curr.data[0]]: [...acc[curr.data[0]], curr],
      };
    return acc;
  }, {});
};
