import React from 'react';
import styled from 'styled-components';
import './Header.css';
// import ToolTip from '../ToolTip/ToolTip';

function Header() {
  return (
    <div className="header">
      <div className="header__sidebar">
        <button className="header__btn header__btn--history">
          <span className="icon icon-clock"></span>
        </button>
      </div>
      <div className="header__search-container">
        <input
          type="text"
          placeholder="Search Clever Programmer"
          className="header__search"
        />
      </div>
      <div className="header__btn-container">
        <button className="header__btn header__btn--help">
          <span className="icon icon-ques"></span>
        </button>
      </div>
      <div className="header__right">
        <button className="header__btn--user">
          <div className="userImage">
            {/* <img src={require('./my-img.jpg')} alt="" /> */}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;

// const Container = styled.div({});

// const Main = styled.div({});

// const UserContainer = styled.div({});
