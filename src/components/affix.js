/**
 * Created by tmj on 2019/1/28.
 */
import React,{Component} from 'react'
import {Affix,Button} from 'antd'
export default class myAffix extends Component{
    state = {
        top: 10,
        bottom: 10,
    }

    render() {
        return (
            <div>
                <Affix offsetTop={this.state.top}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                        }}
                    >
                        Affix top
                    </Button>
                </Affix>
                <br />
                <Affix offsetBottom={this.state.bottom}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                bottom: this.state.bottom + 10,
                            });
                        }}
                    >
                        Affix bottom
                    </Button>
                </Affix>
            </div>
        );
    }
}