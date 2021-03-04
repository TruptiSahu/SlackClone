import React from 'react';
import styled from 'styled-components';
import './RootChat.css';
import welcomeImg from '../../assets/images/welcome.svg';
import welcomeDarkImg from '../../assets/images/welcome-dark.svg';
import Modal from '../Modal/Modal';

function Root({ isDarkMode }) {
  const addChannelHandler = () => {
    const modal = document.querySelector('.modal-container');
    modal.classList.remove('display-none');
  };

  return (
    <Container>
      <div className="rootChat">
        <img
          src={isDarkMode ? welcomeDarkImg : welcomeImg}
          alt=""
          className="rootChat__img"
        />
        <h1 className="rootChat__title">
          Select <span>OR</span> Create a Channel
        </h1>

        <button className="rootChat__addChannel" onClick={addChannelHandler}>
          Add Channel
        </button>
      </div>
    </Container>
  );
}

export default Root;

const Container = styled.div``;
