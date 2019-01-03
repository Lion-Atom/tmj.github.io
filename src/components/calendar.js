/**
 * Created by tmj on 2019/1/3.
 */
import React, {Component} from 'react'
import {Card,Calendar} from 'antd'
export default class myCalendar extends Component {
    constructor(props){
        super(props);
        this.onPanelChange = this.onPanelChange.bind(this);

    }
    onPanelChange(value,mode){
        console.log(value,mode)
    }
    render() {
        return (
            <Card style={{width: 300}}>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange}/>
            </Card>
        )
    }
}