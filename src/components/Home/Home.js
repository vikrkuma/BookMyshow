import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Toast from "../Toast";
import URLS from "../../urls";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  Home.setCount = setCount;
  Home.count = count;
  Home.setErrorMessage = setErrorMessage;
  Home.history = useHistory();

  return (
    <div className="Home">
      <header className="Home-header">
        <p>Kindly enter how many seats are required.</p>
        <input
          className="Home-no-seats-input"
          type="number"
          onChange={Home.onSeatSelect}
        />
        <button className="Home-Submit" onClick={Home.onSubmit}>
          Proceed
        </button>
      </header>
      <Toast message={errorMessage} />
    </div>
  );
}

Home.onSeatSelect = event => {
  Home.setCount(event.target.value);
};

Home.onSubmit = () => {
  if (Home.count > 10 || Home.count < 1) {
    Home.setErrorMessage("Kindly enter a number between 1 to 10");
  } else {
    Home.setErrorMessage("");
    Home.history.push(URLS.BOOK_SEATS);
  }
};

export default Home;
