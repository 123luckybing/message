import React, { Component } from 'react';
import Admin from './Component/Admin';
import PicWall from './Component/PicWall';
import Carousel from './Component/Carousel';
import Home from './Component/Home';
import Login from './Component/Login';
import NotFound from './Component/NotFound';
import Button from './Component/Button';
import Modal from './Component/Modal';
import NoMatch from './Component/NoMatch';
import Message from './Component/Message';
import Loading from './Component/Loading';
import Notification from './Component/Notification';
import LoginPractice from './Component/LoginPractice';
import RegisterPractice from './Component/RegisterPractice';
import Tab from './Component/Tab';
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
                    <Route path='/admin/form/login' component={LoginPractice}/>
                    <Route path='/admin/form/register' component={RegisterPractice}/>
                    <Route path='/admin/ui/button' component={Button}/>
                    <Route path='/admin/ui/modals' component={Modal}/>
                    <Route path='/admin/ui/message' component={Message}/>
                    <Route path='/admin/ui/loading' component={Loading}/>
                    <Route path='/admin/ui/notice' component={Notification}/>
                    <Route path='/admin/ui/lunbo' component={Carousel}/>
                    <Route path='/admin/ui/tab' component={Tab}/>
                    <Route path='/admin/ui/tab' component={Carousel}/>
                    <Route path='/admin/ui/PicWall' component={PicWall}/>
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
