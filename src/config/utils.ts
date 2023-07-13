export const getSortedList = (objList: any[], key: string, type: string) => {
  if (type === "ASC") {
    objList.sort(function (a, b) {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  } else {
    objList.sort(function (a, b) {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }
      return 0;
    });
  }
  return objList;
};
