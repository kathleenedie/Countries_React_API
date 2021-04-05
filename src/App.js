import './App.css';
import ChartContainer from './containers/ChartContainer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/chart" component={ChartContainer}/>
      </Switch>
    </div>
  );
}

export default App;
