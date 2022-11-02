import { INCREASE, DECREASE, RESET, REMOVE, GET_TOTAL } from "./action";

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        cart: (state.cart = []),
      };
    case DECREASE:
      let newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: action.payload.amount - 1 };
        }
        return cartItem;
      });

      return {
        ...state,
        cart: newCart,
      };
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCart,
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => {
          if (cartItem.id !== action.payload) {
            return cartItem;
          }
        }),
      };
    case GET_TOTAL: {
      let { total, amount } = state.cart.reduce(
        (total, current) => {
          const { price, amount } = current;
          const itemTotal = price * amount;
          total.amount += amount;
          total.total += itemTotal;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    }
    default:
      return state;
  }
};
