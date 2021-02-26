import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import styled from 'styled-components';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import db from './firebase';

function App() {
  const [rooms, setRooms] = useState([]);
  const [groupCount, setGroupCount] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  useEffect(() => {
    getChannels();
    setGroupCount(Math.floor(Math.random() * 900 + 50));
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />

          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room">
                <Chat groupCount={groupCount} rooms={rooms} />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
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
