import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './Modal.css';

function Modal({ addNewChannel }) {
  const getChannelName = (e) => {
    e.preventDefault();
    const modalInput = document.querySelector('.modal-form__input');
    addNewChannel(modalInput.value);
    closeModal(e);
  };

  const closeModal = (e) => {
    e.preventDefault();
    const modalInput = document.querySelector('.modal-form__input');
    modalInput.value = '';
    e.target.closest('.modal-container').classList.add('display-none');
  };

  return (
    <Container className="modal-container display-none">
      <div className="modal-background">
        <div className="modal">
          <div className="modal-top">
            <h2 className="modal__title">Add Channel</h2>
            <button className="modal__close" onClick={closeModal}>
              <span className="icon icon-close"></span>
            </button>
          </div>
          <div className="modal-bottom">
            <p className="modal__desc">
              Create your own channel#️⃣ , give it an awesome name, share with
              your friends👫 and get the party🥳 started.We have already few
              awesome groups😉 available, you can check out them as well.
            </p>
            <form className="modal-form">
              <input
                type="text"
                className="modal-form__input"
                placeholder="#channel-name"
              />
              <button
                type="submit"
                className="modal-form__btn"
                onClick={getChannelName}
              >
                Add Channel
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  width: 0;
  height: 0;
  z-index: 5;
`;
