import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="app-content">
        <Route exact path='/profile' render={() => <Profile state={props.state.profilePage}/>} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
