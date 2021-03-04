import React from 'react';
import './Loader.css';
import styled from 'styled-components';
import loadingImg from '../../assets/images/logo-animation.gif';

function Loader() {
  return (
    <Container>
      <div className="loaderContainer">
        <img className="loadImg" src={loadingImg} alt="" />
      </div>
    </Container>
  );
}

export default Loader;

const Container = styled.div``;
