import React, { Component } from 'react';
import Admin from './Component/Admin';
import Form from './Component/Form';
import Home from './Component/Home';
import Login from './Component/Login';
import NotFound from './Component/NotFound';
import Button from './Component/Button';
import Modal from './Component/Modal';
import NoMatch from './Component/NoMatch';
import Message from './Component/Message';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              {/* 登陆 */}
              <Route exact path='/' component={Login} />
              {/* 功能页面 */}
              <Route path='/admin' component={() => 
                <Admin>
                  {/* 子路由 */}
                  <Switch>  
                    <Route exact path='/admin' component={Home}/>
                    <Route path='/admin/form' component={Form}/>
                    <Route path='/admin/ui/button' component={Button}/>
                    <Route path='/admin/ui/modals' component={Modal}/>
                    <Route path='/admin/ui/message' component={Message}/>
                    <Route component={NoMatch}/>
                  </Switch>  
                </Admin>
              } />
              {/* 404 */}
              <Route component={NotFound}/> 
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
