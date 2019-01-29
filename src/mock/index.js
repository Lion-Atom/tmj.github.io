/**
 * Created by tmj on 2019/1/29.
 */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {Users} from './data/user'
import {Goods} from './data/goods'

export default{
    init(){
        var mock = new MockAdapter();
        mock.onGet('/api/users').reply(200, {
            code: 1001, msg: '请求成功', Users
        })
        mock.onGet('/api/goods').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        goods: Goods,
                        config: config.params
                    }])
                }, 500)
            })
        })
    }
}