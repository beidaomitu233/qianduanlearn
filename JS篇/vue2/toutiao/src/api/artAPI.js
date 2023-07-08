import request from '@/utils/request'

// 当多个页面都需要调用同一个接口的时候进行抽离,方便复用
// 按需导出一个经常需要调用的接口
export const getartAPI = function (_page, _limit) {
  // 封装获取文章的方法
  return request.get('/articles', {
    params: {
      _page: _page,
      // 获取文章的数量，传参给服务器，服务器根据参数发送对应的数量,简写型式
      _limit
    }
  })
}
