<template>
  <div>
    <a-row :gutter="12">
      <a-col :span="12">
        <dv-border-box-4>
          <a-card class="smchart"> <Lines myid="test1"></Lines></a-card>
        </dv-border-box-4>
      </a-col>
      <a-col :span="12">
        <a-card class="smchart"> <Lines myid="test2"></Lines></a-card>
      </a-col>
    </a-row>
    <a-row> </a-row>
    <a-row>
      <a-col></a-col>
      <a-col></a-col>
    </a-row>
    <!-- <a-row :gutter="11" class="mb-24">
      <a-col :span="12" >
        <a-row class="mb-24">
          <a-card class="smchart">
            <Lines></Lines></a-card>
        </a-row>
        <a-row>
          <a-card class="smchart"> line </a-card>
        </a-row>
      </a-col>
      <a-col :span="12">
          <a-card style="height:482px "> map </a-card>
      </a-col>
      <a-col :span="6">
        <a-row class="mb-24">
          <a-card class="smchart"> circle </a-card>
        </a-row>
        <a-row>
          <a-card class="smchart"> circle </a-card>
        </a-row>
      </a-col>
    </a-row> -->
    <a-row>
      <CardBarChart></CardBarChart>
    </a-row>

    <!-- <div class="hhh">
      hello, world
      <a-row>
        <a-card
          ><Lines></Lines>
          <CardBarChart></CardBarChart
        ></a-card>
      </a-row>
    </div> -->
  </div>
</template>

<script>
import CardBarChart from "../components/Cards/CardBarChart";
import Lines from "../components/MyCharts/Lines";
export default {
  components: {
    Lines,
    CardBarChart,
  },

  Linesdata() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.smchart {
  height: 230px;
  margin-bottom: 15px;
  box-shadow: 3;
}
.ant-card-body {
  padding: 0px;
}
</style>
