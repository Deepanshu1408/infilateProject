import React from "react";
import "../Header/NavBar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  return (
    <>
      <nav className="headermain">
        <img
          className="logo"
          src="https://infilate.com/wp-content/uploads/2020/02/cropped-twitter-backgroung.png"
        />
        <div className="headerOptions">
          <ul className="listItems">
            <li className="item">Infilate</li>
            <li className="item">Categories</li>
            <li className="item">Stores</li>
            <li className="item">Our Colloborators</li>
            <li className="item">Blog</li>
          </ul>
          <button className="btn btn-primary" id="btn">
            Login/Register
          </button>
        </div>
        <div className="header_search">
          <input
            type="text"
            className="header_searchInput"
            placeholder="Search"
          />
          <SearchIcon id="searchbtn" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
