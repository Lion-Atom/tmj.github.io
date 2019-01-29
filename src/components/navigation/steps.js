/**
 * Created by tmj on 2019/1/29.
 */
import React,{Component} from 'react'
import {Steps,Icon} from 'antd'
const Step = Steps.Step;
export default class mySteps extends Component{
    render(){
        return(
            <Steps>
                <Step status="finish" title="Login" icon={<Icon type="user" />} />
                <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
        )
    }
}