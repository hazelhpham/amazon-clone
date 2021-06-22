import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
const Header = () => {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frdwgroup.com%2Fwp-content%2Fuploads%2F2013%2F08%2FAmazon-800x450-1.jpg&f=1&nofb=1"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <span className="header__optionLineTwo">Sign in</span>
            </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
        
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Header;
