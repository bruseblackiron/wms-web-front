<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="18">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>概览信息</span>
            </div>
          </template>
          <el-row :gutter="20">
            <el-col :span="6">
              <div>
                <el-statistic
                    group-separator=","
                    :precision="2"
                    :value="value2"
                    :title="title"
                ></el-statistic>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-statistic title="男女比">
                  <template slot="formatter">
                    456/2
                  </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-statistic
                    group-separator=","
                    :precision="2"
                    decimal-separator="."
                    :value="value1"
                    :title="title"
                >
                  <template slot="prefix">
                    <i class="el-icon-s-flag" style="color: red"></i>
                  </template>
                  <template slot="suffix">
                    <i class="el-icon-s-flag" style="color: blue"></i>
                  </template>
                </el-statistic>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-statistic :value="like ? 521 : 520" title="Feedback">
                  <template slot="suffix">
              <span @click="like = !like" class="like">
                <i
                    class="el-icon-star-on"
                    style="color:red"
                    v-show="!!like"
                ></i>
                <i class="el-icon-star-off" v-show="!like"></i>
              </span>
                  </template>
                </el-statistic>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <div ref="usedmemory" style="height: 350px" />
            </el-col>
          </el-row>
        </el-card>
        <el-row :gutter="20" style="margin-top: 20px">
          <el-col :span="12">
            <el-card class="">
              <template v-slot:header>
                <div class="clearfix">
                  <span>热门商品</span>
                </div>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="">
              <template v-slot:header>
                <div class="clearfix">
                  <span>分类统计</span>
                </div>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6">
        <el-card class="update-log">
          <template v-slot:header>
            <div class="clearfix">
              <span>最近操作日志</span>
            </div>
          </template>
          312
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup name="Index">
import * as echarts from 'echarts';
import {onMounted, ref} from "vue";
let like = ref(true)
let value1 = ref(4154.564)
let value2 = ref(1314)
let title = ref('增长人数')
const usedmemory = ref(null);

onMounted(()=> {
  const usedmemoryInstance = echarts.init(usedmemory.value, "macarons");
  usedmemoryInstance.setOption({
    grid: [
      {
        left: '0',
        right: '0'
      },
    ],
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260, 135, 147, 260],
        type: 'line'
      }
    ]
  })
})

</script>

<style scoped lang="scss">
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>

