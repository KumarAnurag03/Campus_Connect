import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import { Chat } from './MyComponents/Chat/Chat.js'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/chat/:username' element ={<Chat />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
