import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homePage.component'
import './App.css';

const Hats = (props) => {
  console.log(props);
  return <h2>Hello Hats</h2>;
}
function App() {
  return <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={Hats} />
    </Switch>
  </div>;
}

export default App;
