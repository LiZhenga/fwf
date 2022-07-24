<template>
  <div>
    <el-container>
      <el-aside width="509px">
        <el-row class="search">
          <el-col :span="16" :offset="1">
            <div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </el-col>

          <el-col :span="6" :offset="0">
            <div>
              <el-button type="primary">
                <el-icon style="vertical-align: middle">
                  <Search />
                </el-icon>
                <span style="vertical-align: middle"> Search </span>
              </el-button>
            </div>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<style>
.el-aside{
  height: 964px;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 100);
  text-align: center;
}
.el-main{
  background-color: #EFEFF4;
  width: 931px;
}
.search{
  padding: 54px 0;
}
</style>

<script>
export default {
  name: 'ForumView',
}
</script>