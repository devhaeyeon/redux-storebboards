import ADD_PLAYER from "./actionType";
const playerInitialState = {
  title: "Redux Scoreboard",
  players: [
    { name: "LDK", score: 0, id: 1 },
    { name: "HONG", score: 0, id: 2 },
    { name: "KIM", score: 0, id: 3 },
    { name: "PARK", score: 0, id: 4 }
  ]
};

let maxId = 4;

export const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      // 로직을 쓴다
      // {} deep copy
      // 기존 state를 가지고 와서 펼치고.
      // 액션 디스패치 > 동작 > players에 변형자가 동작이 됨.
      return {
        ...state,
        players: [...state.players, { name: action.name, score: 0, id: maxId }]
      };
    default:
      return state;
  }
  return state;
};
