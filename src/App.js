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
import City from './Component/City';
import Tab from './Component/Tab';
import Register from './Component/Register';
import TableBasic from './Component/TableBasic';
import TableHigh from './Component/TableHigh';
import Text from './Component/Text';
import Order from './Component/Order';
import Staff from './Component/Staff';
import Power from './Component/Power';
import OrderDetail from './Component/OrderDetail';
import TableRadio from './Component/TableRadio';
import TableCheck from './Component/TableCheck';
import Pie from './Component/Pie';
import Bar from './Component/Bar';
import Line from './Component/Line';
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
                    <Route path='/admin/city' component={City}/>
                    <Route path='/admin/table/basic' component={TableBasic}/>
                    <Route path='/admin/table/high' component={TableHigh}/>
                    <Route path='/admin/text' component={Text}/>
                    <Route path='/admin/order' component={Order}/>
                    <Route path='/admin/person' component={Staff}/>
                    <Route path='/admin/bikeMap' component={Staff}/>
                    <Route path='/admin/power' component={Power}/>
                    <Route path='/admin/table/radio' component={TableRadio}/>
                    <Route path='/admin/table/check' component={TableCheck}/>
                    <Route path='/admin/icon/bar' component={Bar}/>
                    <Route path='/admin/icon/pie' component={Pie}/>
                    <Route path='/admin/icon/line' component={Line}/>
                    <Route component={NoMatch}/>
                  </Switch>  
                </Admin>
              } />
              <Route path='/Register' component={Register} />
              {/* 404 */}
              <Route path='/order/detail/:orderNumber' component={OrderDetail} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
