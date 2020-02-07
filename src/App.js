import React, { Component,Suspense,lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lander from './Pages/lander/lander';
import Register from './Pages/register/register';


const Home = lazy(() => import('./Pages/home/home'));

class App extends Component {

  constructor(){
    super()

    this.state = {
      isLoaded:false
    }
  }

  componentDidMount(){
    this.setState({
      isLoaded:true
    })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Suspense fallback={<div> Hold On We're Calculating Data !! </div>}>
            
          <Switch>
            <Route path='/' exact component={Lander} />
            <Route path='/register' exact component={Register} />
            <Route path='/home' exact component={Home} />
            <Route path='/home/:roomname' exact component={Home} />
          </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
