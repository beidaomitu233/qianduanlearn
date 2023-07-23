const express = require('express');

//创建路由对象
const router = express.Router();

//挂载具体路由
router.get('/use/z', (req, res) => {
  res.send('chengg');
});

router.post('/zzz/dd', (req, res) => {
  res.send('chengg2');
});

//向外导出路由对象
module.exports = router;
