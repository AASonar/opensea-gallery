const CardViewReducer = (state: any, action: any) => {
  switch (action.type) {
    case "detailed":
      return [...state, action.payload];
    case "art":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

export default CardViewReducer;
