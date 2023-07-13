import * as Types from "../../config/actions";

const initState: Dashboard = {
  dogList: [],
  isBucketFull: false,
  paginationIndex: 0,
  sortBy: "nameAsc",
  allDataList: []
};

const dashboard = (state = initState, action: any) => {
  switch (action.type) {
    case Types.GET_DOGS: {
      return {
        ...state,
        dogList: [...state.dogList, ...action.data],
        isBucketFull: action.flag,
        paginationIndex: action.stateIndex
      };
    }
    case Types.UPDATE_DOGS: {
      return {
        ...state,
        dogList: action.data,
        isBucketFull: action.isBucketFull,
        paginationIndex: action.stateIndex,
        allDataList: action.allDataList
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default dashboard;
