import axios from 'axios';
function fetch(api, method, callback) {
  axios({
    url: api,
    method: method,
    headers: {}
  })
    .then((res) => {
      console.log('成功');
      callback && callback(res.data);
    })
    .catch((err) => {
      console.log('失败', err);
    })
    .then(() => {
      // 总会执行
    });
}
export default fetch;
