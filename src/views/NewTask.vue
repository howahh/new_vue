<template>
  <a-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <add-spider />
        </el-col>
        <el-col :span="12">
          <img src="../assets/img/spider.png" alt="" />
        </el-col>
      </el-row>
  </a-card>
</template>

<script>
import AddSpider from "../components/AddSpider.vue";

export default {
  name: "SpiderAdd",
  components: {
    AddSpider,
  },
  setup() {}
}
</script>

<style>
</style>