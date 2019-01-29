/**
 * Created by tmj on 2019/1/29.
 */
import Mock from 'mockjs'
const Users = [];
for(let i=0;i++;i<100){
    Users.push(Mock.mock({
        id:Mock.Random.integer(60,100),
        time:Mock.Random.datetime,
        desc: Mock.Random.cparagraph()
    }))
}
export{Users}