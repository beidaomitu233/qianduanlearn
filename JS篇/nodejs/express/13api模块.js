const { query } = require('express');
const express = require('express');
const router = express.Router();
/* const qs = require('qs'); */

//挂载路由
router.get('/get', (req, res) => {
  const qs = req.query;
  res.send({
    zhuangtai: 0,
    meg: 'get请求成功',
    data: query, //需要相应给客户端的数据
  });
});

router.post('/post', (req, res) => {
  const body = req.body;
  res.send({
    zhuangtai: 0,
    meg: 'get请求成功',
    data: body, //需要相应给客户端的数据
  });
});

module.exports = router;
