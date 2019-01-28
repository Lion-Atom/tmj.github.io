/**
 * Created by tmj on 2019/1/3.
 */
import React, {Component} from 'react'
import {Table} from 'antd'


const tableData = [];
for (let i = 0; i < 48; i++) {
    tableData.push({
        key: i,
        name: `Erword·Hositon King-${i}`,
        age: 23 + i,
        address: `London, Park Lane no.${i}`,
        remark: 'https://github.com/Lion-Atom/tmj.github.io/tree/react-antd-demo',
    })
}
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
    render: text => <a href="javascript:">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    width: '10%',
}, {
    title: 'Address',
    dataIndex: 'address',
    width: '20%',
}, {
    title: 'Remark',
    dataIndex: 'remark',
    width: '30%',
    render: text => <a href={text} target="_blank">{text}</a>,
}];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

export default class myTable extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={tableData}/>
        )
    }
}