
import './App.css';
import{BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import Profile from './components/profile'
import store from './store'





const  App=()=> {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
      
     
      <Switch>
      <Route exact path='/' component={Profile}/>
      
    </Switch>
     
     
      
      
    </Router>
     
      

      
    </div>
    </Provider>
  );
}

export default App;
