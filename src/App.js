import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import styled from 'styled-components';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import db from './firebase';
import { auth, provider } from './firebase';
import Loader from './components/Loader/Loader';
import Root from './components/RootChat/RootChat';

function App() {
  const DEFAULT_CHANNEL_URL = 'Q9bFG5LmObqQMFAzTEPa';
  const [isLoading, setIsLoading] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [groupCount, setGroupCount] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user');
    });
  };

  useEffect(() => {
    getChannels();
    setGroupCount(Math.floor(Math.random() * 900 + 50));

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={isDarkMode ? 'App dark-mode' : 'App'}>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Container>
              <Header
                user={user}
                signOut={signOut}
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
              />
              <Main>
                <Sidebar rooms={rooms} isDarkMode={isDarkMode} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat
                      groupCount={groupCount}
                      rooms={rooms}
                      user={user}
                      isDarkMode={isDarkMode}
                    />
                  </Route>
                  <Route path="/">
                    <Root isDarkMode={isDarkMode} />
                  </Route>
                </Switch>
              </Main>
            </Container>
          )}
        </Router>
      )}
    </div>
  );
}

export default App;

const Container = styled.div({
  color: 'rgb(188,171,188);',
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '38px auto',
});

const Main = styled.div({
  display: 'grid',
  gridTemplateColumns: '260px auto',
});
