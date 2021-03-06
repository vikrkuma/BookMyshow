import rootReducer from "./reducers";
import { createStore } from "redux";

const SEAT_CONFIG = [
  {
    category: "CLUB",
    price: 250,
    seats: [
      {
        rowName: "A",
        rowStarIndex: 1,
        rowEndIndex: 15
      },
      {
        rowName: "B",
        rowStarIndex: 3,
        rowEndIndex: 15
      }
    ]
  },
  {
    category: "EXECUTIVE",
    price: 150,
    seats: [
      {
        rowName: "C",
        rowStarIndex: 7,
        rowEndIndex: 15
      },
      {
        rowName: "D",
        rowStarIndex: 7,
        rowEndIndex: 15
      }
    ]
  }
];

const store = createStore(rootReducer);
export default store;
