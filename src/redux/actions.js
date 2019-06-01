import ADD_PLAYER from "./reducers/actionType";

export const addPlayer = name => ({
  type: ADD_PLAYER,
  name
});
