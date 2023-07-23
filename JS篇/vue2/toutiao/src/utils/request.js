import axios from 'axios'

/* 二次封装，每次调用都是一个独立axios */
const request = axios.create({
  baseURL: 'https://www.escook.cn'
})
export default request
