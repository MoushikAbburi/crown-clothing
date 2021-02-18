import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../Cart-icon/cart-icon.components";
import CartDropdown from "../Cart-dropdown/cart-dropdown.components";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
