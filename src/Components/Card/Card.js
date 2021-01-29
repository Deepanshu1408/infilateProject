import React from "react";
import "./Card.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ id, name, val1, val2, val3, text, cardText }) => {
  return (
    <>
      <div className="MainConatiner">
        <div className="Container">
          <div className="dealType">
            <h3 className="deal">{cardText}</h3>
          </div>
          <div className="mainCont">
            <div className="heading">{name}</div>

            <div className="list">
              <ul>
                <li>{val1}</li>
                <li>{val2}</li>
                <li>{val3}</li>
              </ul>
            </div>
            <div>
              <p className="validTill">Valid Till 31 January 2021</p>
              <a href="#">
                <p className="link">Hot Mantis</p>
              </a>
              <p className="lastp"> Verified On January 17, 2021</p>
            </div>
          </div>
          <div className="FinalElem">
            <div>
              <img src="https://infilate.com/wp-content/uploads/2020/12/download_2_182x65.png" />
            </div>
            <div>
              <button className="btn btn-primary btn-lg" id="btnAct">
                <span id="brn">Activate Deal </span>
              </button>
              <a href="#">
                <p className="link2">India</p>
              </a>
            </div>
          </div>
        </div>
        <div class="search">
          <input type="text" className="input1" placeholder="Search" />
          {/* <input type="text" className="input1" placeholder="Any Stores" /> */}
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            Any Stores
          </button>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            Any Category
          </button>
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
          >
            Any Location
          </button>
          {/* <input type="text" className="input1" placeholder="" />
          <input type="text" className="input1" placeholder="Any Location" /> */}
          <button className="btn btn-primary btn-large" id="finbtn">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
