import React from 'react';
import Instagram from '../../assets/image/instagram.png';
import Instagram2 from '../../assets/image/instagram2.png';
import Nav from '../../assets/image/nav.png';
import Heart from '../../assets/image/heart.png';
import User from '../../assets/image/user.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-container">
            <div className="instagram-container">
                <img className="instagram-logo" src={Instagram} alt="instagram" />
                <img className="instagram" src={Instagram2} alt="instagram" /> 
            </div>
            <div>
                <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.searchPosts} />
            </div>
            <div className="icon-container">
                <div className="icon">
                    <img src={Nav} alt="navigation" />
                </div>
                <div className="icon">
                    <img src={Heart} alt='heart' />
                </div>
                <div className="icon">
                    <div onClick={props.logOut}>
                        <img src={User} alt="user" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchBar;