const viewReducer = (state = true, action) => {
    switch (action.type) {
      case "GRID":
        return true;
      case "LIST":
        return false;
      default:
        return state;
    }
  };
  
  export default viewReducer;
  