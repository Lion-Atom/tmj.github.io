/**
 * Created by tmj on 2019/1/29.
 */
import React,{Component} from 'react'
import {Pagination} from 'antd'
import {requestUsers} from "../../api/api";
function showTotal(total){
    return `total ${total} items`;
}
requestUsers().then((res) => {
    console.log(res)
})

export default class myPagination extends Component{

    render(){
        return(
            <div>
                <Pagination size="small" total={50} />
                <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                <Pagination size="small" total={50} showTotal={showTotal} />
            </div>
        )
    }

}