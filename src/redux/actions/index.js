export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const grid = () => {
  return {
    type: "GRID",
  };
};

export const list = () => {
  return {
    type: "LIST",
  };
};

export const addcart = (data) => {
  return {
    type: "ADDCART",
    payload: data,
  };
};
