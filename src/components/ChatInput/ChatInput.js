import React from 'react';
import styled from 'styled-components';
import './ChatInput.css';
import ReactDOM from 'react-dom';

function ChatInput() {
  const formatBTN = document.querySelector('.form__btn-format');
  const messageInput = document.getElementById('input-message');
  const submitBTN = document.querySelector('.form__btn-send');
  const inputWrapper = document.querySelector('.inputWrapper');

  const activeSubmitBTN = (e) => {
    e.preventDefault();
    if (messageInput.value.length > 0) {
      submitBTN.classList.remove('btn-disabled');
      submitBTN.classList.add('btn-active');
    } else {
      submitBTN.classList.add('btn-disabled');
      submitBTN.classList.remove('btn-active');
    }
  };

  const messageFormatHandler = (e) => {
    e.preventDefault();
    messageInput.focus();
    formatBTN.classList.toggle('btn-active');
    inputWrapper.classList.toggle('active');
  };

  const formatBtnHandler = (format, e) => {
    e.preventDefault();
    messageInput.focus();
    e.target.closest('.form__format-btn').classList.toggle('btn-active');
    messageInput.classList.toggle(`message-${format}`);
  };

  return (
    <Container>
      <div className="inputWrapper active">
        <div className="inputContainer">
          <input
            id="input-message"
            type="text"
            placeholder="Message #profit-with-javscript"
            spellCheck="false"
            autocomplete="off"
            onChange={activeSubmitBTN}
          />
        </div>
        <div className="buttonsContainer">
          <button
            className="form__btn form__btn-format"
            onClick={messageFormatHandler}
          >
            <span className="icon icon-format"></span>
          </button>
          <button className="form__btn form__btn-mention">
            <span className="icon icon-mention"></span>
          </button>
          <button className="form__btn form__btn-emoji">
            <span className="icon icon-emoji"></span>
          </button>
          <button className="form__btn form__btn-attach">
            <span className="icon icon-attach"></span>
          </button>
          <button className="form__btn form__btn-send btn-disabled">
            <span className="icon icon-send"></span>
          </button>
        </div>
        <div className="messageFormatBtns">
          <button
            className="form__format-btn form__format-bold"
            onClick={formatBtnHandler.bind(null, 'bold')}
          >
            <span className="icon icon-bold" data-icon={'\uE160'}></span>
          </button>
          <button
            className="form__format-btn form__format-italic"
            onClick={formatBtnHandler.bind(null, 'italic')}
          >
            <span className="icon icon-italic" data-icon={'\uE161'}></span>
          </button>
          <button
            className="form__format-btn form__format-underline"
            onClick={formatBtnHandler.bind(null, 'underline')}
          >
            <span className="icon icon-underline" data-icon={'\uE162'}></span>
          </button>
          <button
            className="form__format-btn form__format-uppercase"
            onClick={formatBtnHandler.bind(null, 'uppercase')}
          >
            <span className="icon icon-uppercase" data-icon={'A'}></span>
          </button>
          <button
            className="form__format-btn form__format-strick"
            onClick={formatBtnHandler.bind(null, 'strick')}
          >
            <span className="icon icon-strick" data-icon={'\uE163'}></span>
          </button>
          <button
            className="form__format-btn form__format-code"
            onClick={formatBtnHandler.bind(null, 'code')}
          >
            <span className="icon icon-code" data-icon={'\uE066'}></span>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 24px;
`;
