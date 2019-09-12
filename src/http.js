import axios from 'axios'


// axios 配置   请求超时时间
axios.defaults.timeout = 300000


//这和webpack对应，webpack匹配api下的路径，替换成目标服务器target
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default axios