/**
 * Created by tmj on 2019/1/3.
 */
import React from 'react'
import {render} from 'react-dom'
import { Router,Route,Link,hashHistory,IndexLink,IndexRedirect,IndexRoute} from 'react-router'
import {Menu, Icon} from 'antd'
// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './main.css'

import myTable from './components/table'
import myCard from './components/card'
import myForm from './components/form'
import myChart from './components/chart'
import myCalendar from './components/calendar'
import myGrid from './components/grid'
import myAnimate from './components/animate'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
    handleClick=(e)=>{
        this.setState({
            current:e,
        })
        console.log('click ', e);
    }
    getUser = () => {
        this.setState({username: 'Atom'})
    }

    constructor(props) {
        super(props);
        this.state = {
            current:'',
            username: '',
        }
    }
    componentDidMount(){
        this.getUser();
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='src/assets/images/logo.png' width="40" id="logo"/>
                    <Menu
                        enu theme="dark"
                        onClick={this.handleClick}
                        style={{width: 185}}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <SubMenu key="sub1" title={<span><Icon type="appstore"/><span>导航一</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myChart">图表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCalendar">日历</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/myCard">卡片</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>导航二</span></span>}>
                            <Menu.Item key="6"><Link to="/myGrid">导航</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/myAnimate">关注</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user"/>{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}
render((
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute path="myTable" component={myTable} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
            <Route path="myGrid" component={myGrid} />
        </Route>
    </Router>
), document.getElementById('app'));
