/**
 * Created by tmj on 2019/1/3.
 */
import React,{Component} from 'react'
import '../assets/css/grid.css'
export default class myGrid extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="item3">3</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
                <div className="item6">6</div>
            </div>
        )
    }
}