import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import OutFits from './components/outfits';
import HeadMaster from './components/headmaster';
import Director from './components/director';
import Forms from './components/forms';
import Staff from './components/staff';
import Grades from './components/grade';
import Home from './components/home';
import ContactUs from './components/contacts';

//import {Router, Route, browserHistory} from 'react-router';
import RootLink from './components/rootlink';

class App extends Component {
    render() {
      return (
       <Router history={browserHistory}>
         <Route path={"/"} component={RootLink}>
         <Route path={"Director"} component={Director}/>

              <IndexRoute component={Home}/> {/* default route to be displayed with the first loader page */}
              <Route path={"school-achivements"} component={OutFits}/>
              <Route path={"headmaster"} component={HeadMaster}/>
              <Route path={"director"} component={Director}/>
              <Route path={"forms"} component={Forms}/>
              <Route path={"staff"} component={Staff}/>
              <Route path={"contacts"} component={ContactUs}/>
              <Route path={"success"} component={OutFits}/>
              <Route path={"grade-entry-point"} component={Grades}/>
         </Route>
       </Router>
      )
    }
  }

export default App;
