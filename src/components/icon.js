/**
 * Created by tmj on 2019/1/28.
 */
import React,{Component} from 'react'
import {Icon} from 'antd'
export default class myIcon extends Component{
    render(){
        return(
            <div className="icons-list">
                <Icon type="qq" />
                <Icon type="twitter" />
            </div>
        )
    }
}