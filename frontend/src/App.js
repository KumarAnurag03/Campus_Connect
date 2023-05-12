import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import { Chat } from './MyComponents/Chat/Chat.js'
import { Profile } from './MyComponents/Profiles/Profile.js';
import { Option} from './MyComponents/Options/Option.jsx';
import { Offer } from './MyComponents/Offer/Offer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Offer/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/options' element={<Option/>}/>
          <Route exact path='/chat/:username' element ={<Chat />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
