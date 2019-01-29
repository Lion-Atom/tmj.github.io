import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './root/logo.png';

//引入antd导航组件
import {Menu, Icon, Layout} from 'antd';

//引入ant-design样式
import 'antd/dist/antd.css';
import './root/home.css';

//引入路由
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//引入样式
import './index.css';

//引入组件
import myHome from './root/home';
import myTable from './components/table'
import myIcon from './components/icon'
import myGrid from './components/grid'
import myLayout from './components/layout'
import myAffix from './components/affix'
import myBreadcrumb from './components/breadcrumb'
import myMenu from './components/menu'
import myPagination from './components/pagination'
import mySteps from './components/steps'
import  myCarousel from './components/carousel'
import myDrawer from './components/drawer'
import myAnchor from './components/anchor'

const SubMenu = Menu.SubMenu;
//layout布局元素
const {Header, Footer, Sider, Content} = Layout;

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            mode: "inline",
            theme: "dark",
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e,
        })
        console.log('click ', e);
    }
    getUser = () => {
        this.setState({username: 'Atom'})
    }

    componentDidMount() {
        this.getUser();
    }


    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Sider>
                        <div type="primary" className="App-logo-wrap" id="logo">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </div>
                        <Menu
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['0']}
                            mode={this.state.mode}
                            theme={this.state.theme}
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="0">
                                <Link to="/"><span><Icon type="mail"/><span>index</span></span></Link>
                            </Menu.Item>

                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>General</span></span>}>
                                <Menu.Item key="1">
                                    <Link to="/myTable">Table</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/myIcon">Icon</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Layout</span></span>}>
                                <Menu.Item key="3"><Link to="/myGrid">Grid</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/myLayout">Layout</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="appstore"/><span>Navigation</span></span>}>
                                <Menu.Item key="5"><Link to="/myAffix">Affix 固钉</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/myBreadcrumb">Breadcrumb 面包屑</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/myMenu">Menu 导航菜单</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/myPagination">Pagination 分页</Link></Menu.Item>
                                <Menu.Item key="9"><Link to="/mySteps">steps 步骤条</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="appstore"/><span>Data Entry</span></span>}>
                                <Menu.Item key="10">AutoComplete 自动完成</Menu.Item>
                                <Menu.Item key="11">Cascader 级联</Menu.Item>
                                <Menu.Item key="12">Checkbox</Menu.Item>
                                <Menu.Item key="13">DatePicker</Menu.Item>
                                <Menu.Item key="14">Form</Menu.Item>
                                <Menu.Item key="15">Input</Menu.Item>
                                <Menu.Item key="16">InputNumber</Menu.Item>
                                <Menu.Item key="17">Mention 提及</Menu.Item>
                                <Menu.Item key="18">Rate 评分</Menu.Item>
                                <Menu.Item key="19">Radio</Menu.Item>
                                <Menu.Item key="20">Select</Menu.Item>
                                <Menu.Item key="21">Switch</Menu.Item>
                                <Menu.Item key="22">TreeSelect</Menu.Item>
                                <Menu.Item key="23">TimePicker</Menu.Item>
                                <Menu.Item key="24">Transfer 穿梭框</Menu.Item>
                                <Menu.Item key="25">Upload</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="appstore"/><span>Data Display</span></span>}>
                                <Menu.Item key="26"><Link to="/myCarousel">Carousel</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="appstore"/><span>Feedback</span></span>}>
                                <Menu.Item key="27"><Link to="/myDrawer">Drawer</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub7" title={<span><Icon type="appstore"/><span>Other</span></span>}>
                                <Menu.Item key="28"><Link to="/myAnchor">Anchor</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="header">
                            <div className="logo"/>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content>
                            <Route exact path="/" component={ myHome } />
                            <Route path="/myTable" component={myTable} />
                            <Route path="/myIcon" component={myIcon} />
                            <Route path="/myGrid" component={myGrid} />
                            <Route path="/myLayout" component={myLayout} />
                            <Route path="/myAffix" component={myAffix} />
                            <Route path="/myBreadcrumb" component={myBreadcrumb}/>
                            <Route path="/myMenu" component={myMenu} />
                            <Route path="/myPagination" component={myPagination} />
                            <Route path="/mySteps" component={mySteps} />
                            <Route path="/myCarousel" component={myCarousel}/>
                            <Route path="/myDrawer" component={myDrawer}/>
                            <Route path="/myAnchor" component={myAnchor}/>
                        </Content>
                        <Footer>
                            React-Antd-fd ©2019 Created by 2295238451@qq.com
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}


// 配置路由
ReactDOM.render(<Hello />, document.getElementById('root'));

