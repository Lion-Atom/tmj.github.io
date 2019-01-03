/**
 * Created by tmj on 2019/1/3.
 */
import React,{Component} from 'react'
export default class myAnimate extends Component{

    render(){
        return(
            <div className="animate">
                <div className="ani-box">
                    <img src="./src/assets/images/face.jpg" width="100" className="animated fadeInUp lastPic" />
                    <span className="animated flipInX ege">我的头像</span>
                </div>
                <h2>本案例：react-antd的demo</h2>
                <div>demo演示地址：</div>
                <div><a href="http://luozhihao.github.io/react-antd-demo/index.html](http://luozhihao.github.io/react-antd-demo/index.html">demo在线地址</a></div>
            </div>
        )
    }
}