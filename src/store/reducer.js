const initState = {
  identity: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DUMMY_CASE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
