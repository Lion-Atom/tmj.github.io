/**
 * Created by tmj on 2019/1/28.
 */
import React,{Component} from 'react'
import {Breadcrumb,Icon} from 'antd'
export default class myBreadcrumb extends Component{
    render(){
        return(
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
        )
    }
}