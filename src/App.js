import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News";
import Aside from "./components/Aside/Aside";
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => (

  <BrowserRouter>
    <div className="app-container">
      <Header />
      <Aside state={props.state.aside} />
      <div className="app-content">
        <Route exact path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
