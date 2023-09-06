const initialState = {
  gbLang: true,
  uaLang: false,
};

const CHANGE_LANG = "CHANGE_LANG";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        gbLang: !state.gbLang,
        uaLang: !state.uaLang,
      };

    default:
      return state;
  }
};
