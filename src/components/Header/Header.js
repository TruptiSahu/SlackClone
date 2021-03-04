import React from 'react';
import styled from 'styled-components';
import './Header.css';
import ToolTip from '../ToolTip/ToolTip';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

function Header({ user, signOut, setIsDarkMode, isDarkMode }) {
  const formattedName = user.name.split(' ').join('+');
  const avatarURL = `https://ui-avatars.com/api/?background=007a5a&color=fff&name=${formattedName}`;

  return (
    <div className="header">
      <div className="header__sidebar">
        <button className="header__btn header__btn--history">
          <span className="icon icon-clock"></span>
          <ToolTip toolInfo="History" />
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
          <ToolTip toolInfo="Help" />
        </button>
      </div>
      <div className="header__right">
        <ToggleSwitch setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <button className="header__btn--user" onClick={signOut}>
          <div
            className="userImage"
            style={{
              background: `url(${
                user.photo ? user.photo : avatarURL
              }) no-repeat center center / cover`,
            }}
          >
            <span className="icon-live"></span>
            <ToolTip toolInfo={user.name} />
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
