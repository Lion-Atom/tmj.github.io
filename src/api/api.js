/**
 * Created by tmj on 2019/1/29.
 */
import axios from 'axios'

let base = '';
export const requestUsers = params=> axios.get(`${base}/api/users`).then(res=>res.data);
export const requestGoods = params=> axios.get(`${base}/api/goods`).then(res=>res.data);
