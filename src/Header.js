import React from "react";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="input-bar">
        <input className="input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="options">
        <div className="option">
          <span className="option-one">Hello,Sign in</span>
          <span className="option-two">Account</span>
        </div>
        <div className="option">
          <span className="option-one">Returns</span>
          <span className="option-two">& Order</span>
        </div>
        <div className="option">
          <span className="option-one">Try</span>
          <span className="option-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="basket">
            <ShoppingBasketIcon />
            <span className="basket-number header-basketcount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
