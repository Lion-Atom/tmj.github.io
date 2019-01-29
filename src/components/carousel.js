/**
 * Created by tmj on 2019/1/29.
 */
import React,{Component} from 'react'
import {Carousel} from 'antd'
import './../assets/css/carousel.css'

export default class myCarousel extends Component{

    render(){
        return(
            <Carousel effect="fade">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }

}