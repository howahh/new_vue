<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="10">
        <a-row>
          <a-card
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
          >
            <template #title style="padding: 5px">
              <h6>电影被侵权次数</h6>
              <p style="margin-bottom: 0px">
                本月新增<span class="text-success">+12%</span>
              </p>
            </template>
            <!-- <template #extra>
            <a-badge color="primary" class="badge-dot-primary" text="1" />
            <a-badge color="primary" class="badge-dot-secondary" text="2" />
          </template> -->
            <CardBarChart></CardBarChart>
          </a-card>
        </a-row>
        <a-row class="mb-24">
          <a-card class="second-line mb-24">
            <CardLineChart></CardLineChart>
          </a-card>
        </a-row>
      </a-col>
      <a-col :span="14">
        <!-- <a-card class="map mb-24"> -->
        <!-- <WidgetGlobe></WidgetGlobe> -->
        <Mymap></Mymap>
        <!-- </a-card> -->
      </a-col>
    </a-row>
    <!-- <a-row>
      <a-col :span="24">
        <a-card class="first-line mb-24">
          <a-row :gutter="24">
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(179,127,235)', 'rgb(24,144,255)']"
                dur="7"
              >
                <a-row><span style="color: #1890ff">爬虫1:</span></a-row>
                <br />
                <a-row><span style="color: #b37feb">29%</span></a-row>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="7"
              >
                <div style="color: #1890ff">爬虫1:</div>
                <br />
                <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="5"
              >
                <div style="color: #1890ff">爬虫1:</div>
                <br />
                <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="6"
              >
                <div style="color: #1890ff">爬虫1:</div>
                <br />
                <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="2"
              >
                <div style="color: #1890ff">爬虫1:</div>
                <br />
                <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
            <a-col :span="4">
              <dv-decoration-9
                style="
                  width: 150px;
                  height: 150px;
                  margin-top: 5px;
                  margin-left: 10px;
                "
                :color="['rgb(24,144,255)', 'rgb(179,127,235)']"
                dur="3"
              >
                <div style="color: #1890ff">爬虫1:</div>
                <br />
                <div style="color: #b37feb">29%</div>
              </dv-decoration-9>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row> -->
    <a-row :gutter="24">
      <a-col>
        <a-card
          style="height: 230px; padding: 16px"
          :bordered="false"
          class="header-solid third-line dashboard-bar-line mb-24"
          :bodyStyle="{ padding: '0 12px 8px 3px' }"
        >
          <a-row>
            <a-col :span="14">
              <h6>任务实时处理状态</h6>
              <a-carousel autoplay dot-position="right" autoplay-speed="10">
                <div style="text-align: center">
                  <a-tag style="margin-bottom: 30px" color="orange"
                    >深度分析任务-百度爬虫</a-tag
                  >
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已分析网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per0[0]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          当前分析网站进度:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per0[1]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已聚类网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per0[2]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                </div>
                <div style="text-align: center">
                  <a-tag style="margin-bottom: 30px" color="purple"
                    >深度分析任务-必应爬虫</a-tag
                  >
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已分析网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per1[0]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          当前分析网站进度:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per1[1]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已聚类网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per1[2]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                </div>
                <div style="text-align: center">
                  <a-tag style="margin-bottom: 30px" color="blue"
                    >深度分析任务-谷歌爬虫</a-tag
                  >
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已分析网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per2[0]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          当前分析网站进度:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per2[1]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                  <br />
                  <a-row>
                    <a-row :gutter="20">
                      <a-col :span="6">
                        <div style="font-family: Open Sans; font-weight: bold">
                          任务中已聚类网站:
                        </div></a-col
                      >
                      <a-col :span="11"
                        ><a-progress :percent="this.per2[2]" status="active"
                      /></a-col>
                      <a-col :span="2"><a-spin size="small" /></a-col>
                    </a-row>
                  </a-row>
                </div>
              </a-carousel>
            </a-col>
            <a-col :span="10"> <Pie style="margin-bottom: 20px"></Pie> </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="13">
        <a-card
          :bordered="false"
          class="header-solid third-line dashboard-bar-line"
          :bodyStyle="{ padding: '0 12px 8px 3px' }"
        >
          <template #title>
            <h6>数据获取引擎</h6>
            <p>本月新增<span style="color: rgb(0, 130, 251)">-33%</span></p>
            <p>本月新增<span style="color: rgb(179, 127, 235)">-57%</span></p>
          </template>
          <template #extra>
            <a-badge
              color="primary"
              class="badge-dot-primary"
              text="获取任务"
            />
            <a-badge
              color="primary"
              class="badge-dot-secondary"
              text="分析任务"
            />
          </template>
          <BarsForDash></BarsForDash>
        </a-card>
      </a-col>
      <a-col :span="11">
        <a-card class="third-line">
          <IndexRoll></IndexRoll>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardBarChart from "../components/Cards/CardBarChart";
import Lines from "../components/MyCharts/Lines";
import CardLineChart from "../components/Cards/CardLineChart.vue";
import WidgetGlobe from "../components/Widgets/WidgetGlobe";
import Mymap from "../components/Mymap";
import BarsForDash from "../components/BarsForDash";
import IndexRoll from "../components/IndexRoll";
import Pie from "../components/Charts/ChartPieIndex.vue";

export default {
  components: {
    Lines,
    Pie,
    CardBarChart,
    CardLineChart,
    WidgetGlobe,
    Mymap,
    BarsForDash,
    IndexRoll,
  },

  data() {
    return {
      ciycle_width: 8,
      per0: [69, 12, 27],
      per1: [22, 46, 12],
      per2: [36, 86, 44],
    };
  },
  beforeMount() {
    setInterval(() => {
      this.$set(this.per0, 0, this.per0[0] + 0.5);
    }, 2000);
    setInterval(() => {
      this.$set(this.per0, 1, this.per0[1] + 2);
      if (this.per0[1] >= 100) {
        this.$set(this.per0, 1, 0);
      }
    }, 2000);
    setInterval(() => {
      this.$set(this.per0, 2, this.per0[2] + 1);
    }, 2000);
    setInterval(() => {
      this.$set(this.per1, 0, this.per1[0] + 0.5);
    }, 2000);
    setInterval(() => {
      this.$set(this.per1, 1, this.per1[1] + 2);
      if (this.per1[1] >= 100) {
        this.$set(this.per1, 1, 0);
      }
    }, 2000);
    setInterval(() => {
      this.$set(this.per1, 2, this.per1[2] + 1);
    }, 2000);
    setInterval(() => {
      this.$set(this.per2, 0, this.per2[0] + 0.5);
    }, 2000);
    setInterval(() => {
      this.$set(this.per2, 1, this.per2[1] + 2);
      if (this.per2[1] >= 100) {
        this.$set(this.per2, 1, 0);
      }
    }, 2000);
    setInterval(() => {
      this.$set(this.per2, 2, this.per2[2] + 1);
    }, 2000);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.first-line {
  height: 160px;
}
.second-line {
  height: 278px;
}
.third-line {
  height: 320px;
}
.card-title {
  /* margin-top: 12px; */
  margin-left: 12px;
}
.map::v-deep {
  height: 580px;
}
</style>
