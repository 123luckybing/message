import React, { Component } from 'react';
import Admin from './Component/Admin';
import Form from './Component/Form';
import Home from './Component/Home';
import Login from './Component/Login';
import NotFound from './Component/NotFound';
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
                    <Route exact path='/admin' component={Home}/>
                    <Route path='/admin/form' component={Form}/>
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
