/**
 * Created by tmj on 2019/1/29.
 */
import React,{Component} from 'react'
import { Anchor } from 'antd';

const { Link } = Anchor;

const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
};
 export default class myAnchor extends Component{
     render(){
         return(
             <Anchor affix={false} onClick={handleClick}>
                 <Link href="#components-anchor-demo-basic" title="Basic demo" />
                 <Link href="#components-anchor-demo-static" title="Static demo" />
                 <Link href="#API" title="API">
                     <Link href="#Anchor-Props" title="Anchor Props" />
                     <Link href="#Link-Props" title="Link Props" />
                 </Link>
             </Anchor>
         )
     }
 }