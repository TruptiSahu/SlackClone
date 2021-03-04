import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import loadingImg from './../assets/images/logo-animation.gif';

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem('user', JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Container>
        <Content>
          <div className="imageContaienr">
            <img src={loadingImg} />
          </div>
          <h1>Welcome to Slack</h1>
          <SignInButton onClick={() => signIn()}>
            Sign In With Google
          </SignInButton>
        </Content>
      </Container>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

  height: 435px;
  padding-top: 80px;
  padding-bottom: 50px;
  width: 350px;

  > h1 {
    font-family: 'Slack-Lato', sans-serif;
    font-weight: 900;
    font-size: 40;
  }

  > .imageContaienr {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}  }

  .imageContaienr > img {
    height: 200px;
  }
`;

const SlackImg = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
  margin-bottom: 50px;
`;

const SignInButton = styled.button`
  margin-top: 30px;
  background-color: #007a5a;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  padding: 10px 20px;
  font-family: 'Slack-Lato', sans-serif;
  box-shadow: 0px 3px 7px rgb(0 122 90 / 65%);
  transition: all 0.3s;
  outline: none;

  :hover {
    transform: translateY(2px);
    box-shadow: 0px 1px 2px rgb(0 122 90 / 30%);
  }

  :active {
    box-shadow: inset 0px 1px 9px rgb(0 0 0 / 30%);
  }
`;
