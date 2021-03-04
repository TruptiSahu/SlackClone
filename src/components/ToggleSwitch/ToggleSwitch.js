import React from 'react';
import styled from 'styled-components';
import './Toggle.css';

function ToggleSwitch({ isDarkMode, setIsDarkMode }) {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className="slider round"></span>
      </label>
    </Container>
  );
}

export default ToggleSwitch;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
