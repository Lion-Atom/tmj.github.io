/**
 * Created by tmj on 2019/1/28.
 */
import React,{Component} from 'react'
import { Row, Col } from 'antd';
import './../assets/css/grid.css'

export default class myGrid extends Component{
    render(){
        return(
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
            </div>
        )
    }
}
