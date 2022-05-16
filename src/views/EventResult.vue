<template>
  <div>
    <div
      class="profile-nav-bg"
      style="background-image: url('images/bg-profile.jpg')"
    ></div>
    <a-row :gutter="24">
      <a-col :span="10">
        <a-card
          class="card-profile-head"
          style="height: 280px; margin-left: 24px"
        >
          <a-row>
            <!-- <a-col :span="24" style="height:160px; background-color:rgb(24, 144, 255, 0.2);"> -->
            <a-col
              :span="24"
              style="height: 160px; background-color: rgb(82, 196, 26, 0.2)"
            >
              <div style="text-align: center">
                <div style="height: 55px"></div>
                <div style="font-size: 25px">任务分析结果</div>
              </div>
              <div style="float: right; margin-top: 20px">
                <div
                  style="
                    color: rgb(82, 196, 26, 0.5);
                    font-weight: bold;
                    margin-right: 20px;
                    font-size: 20px;
                  "
                >
                  分析完成
                </div>
              </div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24" style="height: 140px">
              <div class="container">
                <div :class="isScoll">
                  <ul
                    v-for="(result, index) in this.results"
                    :key="result + index"
                  >
                    <li style="font-size: 18px">{{ result }}</li>
                  </ul>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="14">
        <a-card
          class="card-profile-head dashboard-bar-line header-solid mb-24"
          style="height: 280px; margin-right: 24px; padding: 16px"
        >
          <template #title>
            <h6>侵权网站服务器软件信息</h6>
            <!-- <p>今日爬虫运行数量 <span class="text-danger">-1</span></p> -->
            <p>使用次数最多</p>
          </template>
          <ChartBar v-if="this.status" :data="this.prop_app"></ChartBar>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="14">
        <a-card
          :bordered="false"
          class="card-profile-head dashboard-bar-line header-solid mb-24"
          style="
            height: 410px;
            margin-left: 24px;
            margin-top: 24px;
            padding: 16px;
          "
        >
          <template #title>
            <h6>侵权网站服务器位置分布</h6>
            <p>出现次数最多</p>
          </template>
          <ChartBarHorizental
            v-if="this.status"
            :data="this.prop_geo"
          ></ChartBarHorizental>
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-card
          :bordered="false"
          class="header-solid"
          style="
            height: 410px;
            margin-right: 24px;
            margin-top: 24px;
            padding: 16px;
          "
        >
          <template #title>
            <h6>本次任务中侵权网站情况</h6>
            <p>侵权网站和其他网站对比</p>
          </template>
          <ChartPie></ChartPie
        ></a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="16">
        <a-card
          style="
            height: 500px;
            margin-left: 24px;
            margin-top: 24px;
            padding: 16px;
          "
        >
          <div v-if="mapStatus">
            <Map />
          </div>
          <div v-if="mapStatus == 0" style="text-align: center">
            <div style="height: 220px"></div>
            <a-spin />
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          style="
            height: 500px;
            margin-right: 24px;
            margin-top: 24px;
            padding: 16px;
          "
        >
          <template #title>
            <h6>侵权网站信息</h6>
            <p>点击可查看详细信息</p>
          </template>
          <TableResult />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardProfileInformation from "../components/Cards/CardProfileInformation";
import ChartBar from "../components/Charts/ChartBarResult";
import ChartBarHorizental from "../components/Charts/ChartBarHorizentalResult.vue";
import ChartPie from "../components/Charts/ChartPieResult.vue";
import Map from "../components/WorldMap.vue";
import TableResult from "../components/TableResult.vue";
export default {
  components: {
    CardProfileInformation,
    ChartBar,
    ChartBarHorizental,
    ChartPie,
    Map,
    TableResult,
  },

  data() {
    return {
      app: {},
      status: 0,
      prop_app: {},
      app_labels: [
        "Apache",
        "CloudFlare",
        "IIS",
        "Microsoft ASP.NET",
        "Nginx",
        "PHP",
        "Windows Server",
      ],
      geo: {},
      geo_labels: [
        "澳大利亚",
        "中国大陆",
        "中国香港",
        "美国",
        "其他国家和地区",
      ],
      prop_geo: [],
      mapStatus: 0,
      results: [
        "本次任务总共处理花费时间：00 小时 06 分钟 32 秒 ",
        "本次任务识别侵权电影网站： 545 个",
        "本次任务总共识别侵权电影： 63279 个",
        "本次任务中服务器软件分析： Nginx 值得注意",
        "本次任务最多出现地理位置： 美国 值得注意",
      ],
      isScoll : "",
    };
  },

  beforeMount() {
    var temp = this.results.slice();
    for (var j = 0; j < 10; j++) {
      for (var i = 0; i < temp.length; i++) {
        this.results.push(temp[i]);
      }
    }

    this.getData();
  },
  created() {
    setTimeout(() => {
      this.mapStatus = 1;
    }, 3000);
    setInterval(()=>{
      this.isScoll = "scoll";
      setTimeout(()=>{
        var t = this.results.shift();
        this.results.push(t);
        this.isScoll = "";
      }, 1100);
    }, 2200);
  },

  methods: {
    getData() {
      this.axios
        .post("http://localhost:5000/vpw/getVpwHaveMovieAndInfo")
        .then((response) => {
          // console.log(response);
          for (var i = 0; i < response.data.data.length; i++) {
            switch (response.data.data[i].geo) {
              case "au": {
                response.data.data[i].geo = "澳大利亚";
                break;
              }
              case "cn": {
                response.data.data[i].geo = "中国大陆";
                break;
              }
              case "hk": {
                response.data.data[i].geo = "中国香港";
                break;
              }
              case "us": {
                response.data.data[i].geo = "美国";
                break;
              }
              default: {
                response.data.data[i].geo = "其他国家和地区";
                break;
              }
            }
          }
          for (var i = 0; i < response.data.data.length; i++) {
            var app = response.data.data[i].app.split(",");
            for (var j = 0; j < app.length; j++) {
              var temp = app[j].split("/")[0];
              this.app[temp] = 0;
              // console.log(app[j]);
            }
            this.geo[response.data.data[i].geo] = 0;
          }
          // console.log(this.app);
          for (var i = 0; i < response.data.data.length; i++) {
            var app = response.data.data[i].app.split(",");
            for (var j = 0; j < app.length; j++) {
              var temp = app[j].split("/")[0];
              this.app[temp] += 1;
            }
            this.geo[response.data.data[i].geo] += 1;
          }
          for (var i = 0; i < this.app_labels.length; i++) {
            this.prop_app[this.app_labels[i]] = this.app[this.app_labels[i]];
          }
          for (var i = 0; i < this.geo_labels.length; i++) {
            this.prop_geo.push(this.geo[this.geo_labels[i]]);
          }
          this.status = 1;
          // console.log(this.geo);
          // console.log(this.app);
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  height: 120px;
  overflow: hidden;
}

.scoll {
  animation: myScoll 30s linear infinite;
}

@keyframes myScoll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>