import request from '@/utils/request'

// 查询仓库列表
export function listHouse(query) {
  return request({
    url: '/wms/house/list',
    method: 'get',
    params: query
  })
}

// 查询仓库详细
export function getHouse(id) {
  return request({
    url: '/wms/house/' + id,
    method: 'get'
  })
}

// 新增仓库
export function addHouse(data) {
  return request({
    url: '/wms/house',
    method: 'post',
    data: data
  })
}

// 修改仓库
export function updateHouse(data) {
  return request({
    url: '/wms/house',
    method: 'put',
    data: data
  })
}

// 删除仓库
export function delHouse(id) {
  return request({
    url: '/wms/house/' + id,
    method: 'delete'
  })
}

//開啟禁用倉庫
export function publishHouse(id, publish) {
  return request({
    url: '/wms/house/publish/' + id + '/' + publish,
    method: 'post'
  })
}

