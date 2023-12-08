import request from '@/utils/request'

// 查询物资管理列表
export function listGoods(query) {
  return request({
    url: '/wms/goods/list',
    method: 'get',
    params: query
  })
}

// 查询物资管理详细
export function getGoods(id) {
  return request({
    url: '/wms/goods/' + id,
    method: 'get'
  })
}

// 新增物资管理
export function addGoods(data) {
  return request({
    url: '/wms/goods',
    method: 'post',
    data: data
  })
}

// 修改物资管理
export function updateGoods(data) {
  return request({
    url: '/wms/goods',
    method: 'put',
    data: data
  })
}

// 删除物资管理
export function delGoods(id) {
  return request({
    url: '/wms/goods/' + id,
    method: 'delete'
  })
}
