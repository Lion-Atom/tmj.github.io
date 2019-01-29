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
import myTable from './components/general/table'
import myIcon from './components/general/icon'
//layout
import myGrid from './components/layout/grid'
import myLayout from './components/layout/layout'
//navigation
import myAffix from './components/navigation/affix'
import myBreadcrumb from './components/navigation/breadcrumb'
import myMenu from './components/navigation/menu'
import myPagination from './components/navigation/pagination'
import mySteps from './components/navigation/steps'
//data-entry
import myAutoComplete from './components/data-entry/autoComplete'
import myCascader from './components/data-entry/cascader'
import myCheckbox from './components/data-entry/checkbox'
import myDatepicker from './components/data-entry/datepicker'
import myForm from './components/data-entry/form'
import myInput from './components/data-entry/input'
import myInputNumber from './components/data-entry/inputNumber'
import myMention from './components/data-entry/mention'
import myRate from './components/data-entry/rate'
import myTransfer from './components/data-entry/transfer'
import  myUpload from './components/data-entry/upload'
//data-display
import  myCarousel from './components/data-display/carousel'
//feedback
import myDrawer from './components/feedback/drawer'
//other
import myAnchor from './components/other/anchor'


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
                                <Menu.Item key="10"><Link to="/myAutoComplete">AutoComplete 自动完成</Link></Menu.Item>
                                <Menu.Item key="11"><Link to="/myCascader">Cascader 级联</Link></Menu.Item>
                                <Menu.Item key="12"><Link to="/myCheckbox">Checkbox</Link></Menu.Item>
                                <Menu.Item key="13"><Link to="/myDatepicker">DatePicker</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/myForm">Form</Link></Menu.Item>
                                <Menu.Item key="15"><Link to="/myInput">Input</Link></Menu.Item>
                                <Menu.Item key="16"><Link to="/myInputNumber">InputNumber</Link></Menu.Item>
                                <Menu.Item key="17"><Link to="/myMention">Mention 提及</Link></Menu.Item>
                                <Menu.Item key="18"><Link to="/myRate">Rate 评分</Link></Menu.Item>
                                {/**<Menu.Item key="19">Radio</Menu.Item>
                                <Menu.Item key="20">Select</Menu.Item>
                                <Menu.Item key="21">Switch</Menu.Item>
                                <Menu.Item key="22">TreeSelect</Menu.Item>
                                <Menu.Item key="23">TimePicker</Menu.Item>*/}
                                <Menu.Item key="24"><Link to="/myTransfer">Transfer 穿梭框</Link></Menu.Item>
                                <Menu.Item key="25"><Link to="/myUpload">Upload</Link></Menu.Item>
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
                            {/* general */}
                            <Route exact path="/" component={ myHome } />
                            <Route path="/myTable" component={myTable} />
                            <Route path="/myIcon" component={myIcon} />
                            {/* loyout */}
                            <Route path="/myGrid" component={myGrid} />
                            <Route path="/myLayout" component={myLayout} />
                            {/* navigation */}
                            <Route path="/myAffix" component={myAffix} />
                            <Route path="/myBreadcrumb" component={myBreadcrumb}/>
                            <Route path="/myMenu" component={myMenu} />
                            <Route path="/myPagination" component={myPagination} />
                            <Route path="/mySteps" component={mySteps} />
                            {/* data entry */}
                            <Route path="/myAutoComplete" component={myAutoComplete} />
                            <Route path="/myCascader" component={myCascader} />
                            <Route path="/myCheckbox" component={myCheckbox} />
                            <Route path="/myDatepicker" component={myDatepicker} />
                            <Route path="/myCheckbox" component={myCheckbox} />
                            <Route path="/myCheckbox" component={myCheckbox} />
                            <Route path="/myForm" component={myForm} />
                            <Route path="/myInput" component={myInput} />
                            <Route path="/myInputNumber" component={myInputNumber}/>
                            <Route path="/myMention" component={myMention}/>
                            <Route path="/myRate" component={myRate}/>
                            <Route path="/myTransfer" component={myTransfer}/>
                            <Route path="/myUpload" component={myUpload}/>
                            {/* data display */}
                            <Route path="/myCarousel" component={myCarousel}/>
                            {/* feedback */}
                            <Route path="/myDrawer" component={myDrawer}/>
                            {/* other */}
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

