const initialState = {
  cardData: [],
};
const carts = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          cardData: action.info,
        },
      ];
    default:
      return state;
  }
};
const initialNumberState = {
  number: 0,
};
const cartNum = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        products: action.number,
        infoState: action.state,
      };
    default:
      return initialNumberState;
  }
};
const deleteCart = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_FROM_CART":
      return {
        data: [...state.data],
      };

    default:
      return state;
  }
};
export { carts, cartNum, deleteCart };
