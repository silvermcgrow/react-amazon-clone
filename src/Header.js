import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const handelAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* Logo on the left ->img */}
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            {/* Search Box */}
            <div className="header_search">
                <input type="" name="" className="header_searchInput" value="" />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* 3 Links */}
            <div className="header_nav">
                {/* 1st Link */}
                <Link to={!user && "/login" } className="header_link">
                    <div onClick={handelAuthentication} className="header_option">
                        <span className="header_optionOne">Hello { user ? user.email : 'Guest' }</span>
                        <span className="header_optionTwo">{ user ? 'Sign Out' : 'Sign In' }</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/orders" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Returns</span>
                        <span className="header_optionTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Your</span>
                        <span className="header_optionTwo">Prime</span>
                    </div>
                </Link>
                {/* 4th Link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* Shopping Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* No. of items in the basket */}
                        <span className="header_optionTwo header_basketCount">{ basket?.length }</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
