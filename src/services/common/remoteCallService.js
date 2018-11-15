import axios from 'axios';
import {Message} from 'element-ui';
import {getJwtToken} from '../data/global';
var config = require('src/configs/config.js')


// axios.interceptors.response.use(data  => {
//   return data
// }, error => {
//   if (error.response) {
//     if (error.response.status == 401)
//       window.location.href = "/views/login.html";
//   }
//   else {
//     window.location.href = "/views/login.html";
//   }
//   return Promise.reject(error)   // 返回接口返回的错误信息
// });


export function remoteCall(tranCode, body, serviceVersion = "1.0") {

  // axios.defaults.withCredentials = true;

  console.log('remoteCall body=', JSON.stringify(body));
  if (config.dev) {
    return new Promise((resolve, reject) => {
      var jsonpath = '/static/mock/' + tranCode + '.json'

      axios.get(jsonpath)
        .then(res => {
          resolve(res.data);
        }).catch(error => {
        Message({
          message: '发生异常错误,请刷新页面重试,或联系程序员,访问地址' + jsonpath,
          type: 'error',
          duration: 5 * 1000
        });
        console.log(error); // for debug
        reject(error);
      });
    });
  }

  return new Promise((resolve, reject) => {
    var request =
      {
        Request: {
          Head: {
            Version: "1.0",
            ContentType: "TEXT_JSON",
            TranCode: tranCode,
            ServiceVersion: "1.0"
          },
          Body: body
        }
      };

    // axios.defaults.headers.post['Authorization'] = getJwtToken();

    // alert(JSON.stringify(axios.defaults.headers.post));
    // var instance = axios.create({
    //   timeout: 1000,
    //   headers: {'jwtToken': getJwtToken()}
    // });

    // alert(JSON.stringify(instance.headers));
    // alert(getJwtToken());

    let header = {
      jwtToken: getJwtToken()
    };

    // alert(JSON.stringify(header));

    // axios.interceptors.request.use(
    //   config => { // 判断是否存在token，如果存在的话，则每个http header都加上token
    //     config.headers.Authorization = '111';
    //
    //     return config;
    //   },
    //   err => {
    //     return Promise.reject(err);
    //   });

    axios.post(config.url.remoteService, request, {headers: header})
      .then(response => {
        // alert(JSON.stringify(response));
        console.log('remoteCall response=', JSON.stringify(response.data));
        const res = response.data;
        const resHead = res.Response.Head;
        if (resHead.AckCode == "100.1" || resHead.AckCode == "100.2") {
          //成功
          resolve(res.Response.Body);
        }
        else {
          //失败
          reject(res.Response);
        }
      })
      .catch(error => {
        Message({
          message: '发生异常错误,请刷新页面重试,或联系程序员,访问地址' + config.url.remoteService,
          type: 'error',
          duration: 5 * 1000
        });
        console.log(error); // for debug
        reject(error);
      });
  });
}
