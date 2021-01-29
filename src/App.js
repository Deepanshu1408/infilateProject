import React from "react";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Cards from "./Components/Card/Card";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <h1 className="heading1">Latest Offers</h1>
        <Cards
          cardText="Super Deal"
          name="Get HostMantis Advanced SSD Hosting Plan$5.49/mo + Money Back Guarantee"
          val1="You will get 30 GB SSD."
          val2="Additional SSD storage available."
          val3="Full daily backup in this plan."
        />
      </div>
    </>
  );
}

export default App;
