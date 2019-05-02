import React from 'react';
import Instagram from '../../assets/image/instagram.png';
import Instagram2 from '../../assets/image/instagram2.png';
import Nav from '../../assets/image/nav.png';
import Heart from '../../assets/image/heart.png';
import User from '../../assets/image/user.png';
import styled from 'styled-components';
import './SearchBar.css';

const SearchContainer = styled.div`
    width: 800px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    background: white;
    border-bottom: 1px solid black;
    align-items: center;
    margin: auto;
`;

const InstagramContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
`;

const InstagramLogo = styled.img`
    width: 30px;
    margin-left: 20px;
`;

const InstagramImg = styled.img`
    width: 100px;
    margin: 10px;
`;

const SearchInput = styled.input`
    height: 30px;
`;

const IconContainer = styled.div`
    display: flex;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
`;


const SearchBar = props => {
    return (
        <SearchContainer className="search-container">
            <InstagramContainer className="instagram-container">
                <InstagramLogo className="instagram-logo" src={Instagram} alt="instagram" />
                <InstagramImg className="instagram" src={Instagram2} alt="instagram" /> 
            </InstagramContainer>
            <div>
                <SearchInput className="search-input" type="text" placeholder="Search" value={props.searchTerm} onChange={props.searchPosts} />
            </div>
            <IconContainer className="icon-container">
                <Icon className="icon">
                    <img src={Nav} alt="navigation" />
                </Icon>
                <Icon className="icon">
                    <img src={Heart} alt='heart' />
                </Icon>
                <Icon className="icon">
                    <div onClick={props.logOut}>
                        <img src={User} alt="user" />
                    </div>
                </Icon>

            </IconContainer>
        </SearchContainer>
    )
}

export default SearchBar;