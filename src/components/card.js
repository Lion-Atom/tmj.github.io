
/**
 * Created by tmj on 2019/1/3.
 */
import React,{Component}from 'react'
import { Row,Col,Card } from 'antd'

export default class myCard extends Component{
    render(){
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card 1" bordered={false}>Card content 1</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card 2" bordered={false}>Card content 2</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card 3" bordered={false}>Card content 3</Card>
                    </Col>
                </Row>
            </div>
        )
    }
}