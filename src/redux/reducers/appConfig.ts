import * as Types from "../../config/actions";

const initState: AppConfig = {
  showSpinner: false,
  toastMsg: "",
  showToast: false
};

const appConfig = (state = initState, action: any) => {
  switch (action.type) {
    case Types.UPDATE_SPINNER_STATUS: {
      return {
        ...state,
        showSpinner: action.flag
      };
    }
    case Types.UPDATE_TOAST: {
      return {
        ...state,
        toastMsg: action.toastMsg,
        showToast: action.showToast
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default appConfig;
