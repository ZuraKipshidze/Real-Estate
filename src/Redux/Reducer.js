const initialState = {
  active: false,
};

const stateModified = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: action.payload,
      };

    default:
      return state;
  }
};

export default stateModified;
