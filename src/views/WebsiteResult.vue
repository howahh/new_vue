<template>
  <div>
    <vue-particles
      id="particles-js"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <a-row class="mb-24">
      <a-col :span="24">
        <a-card style="height: 70px; padding: 16px">
          <div
            style="font-weight: bold; font-size: 15px; display: inline-block"
          >
            当前任务：
          </div>
          <div style="display: inline-block">
            <a-cascader
              v-if="this.flag"
              :options="this.selectData"
              style="width: 250px"
              :default-value="[this.task, this.host]"
              @change="onChange"
            />
          </div>
          <div style="float: right; margin-top: 8px">
            <div
              style="
                font-weight: bold;
                font-size: 15px;
                display: inline-block;
                margin-right: 4px;
              "
            >
              显示所有信息
            </div>
            <a-switch default-checked />
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :span="10">
        <div v-if="this.websiteFlag == 0" style="text-align: center">
          <a-card
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
            style="height: 305px"
          >
            <div style="height: 140px"></div>
            <a-spin />
          </a-card>
        </div>
        <div v-if="this.websiteFlag">
          <a-card
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
            style="height: 320px"
          >
            <template #title>
              <h6>侵权网站信息概述</h6>
              <!-- <p>今日爬虫运行数量 <span class="text-danger">-1</span></p> -->
            </template>
            <a-descriptions :column="1" bordered>
              <a-descriptions-item label="网站标题"
                >{{ this.websiteData.title }}
              </a-descriptions-item>
              <a-descriptions-item label="Domain">
                {{ this.websiteData.domain }}
              </a-descriptions-item>
              <a-descriptions-item label="IP地址">
                <a-tag color="orange"> {{ this.websiteData.ip }} </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="地理位置">
                <a-tag color="blue"> {{ this.websiteData.location }} </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="探测时间">
                <a-tag color="green"> {{ this.websiteData.detectTime }} </a-tag>
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </div>
        <a-card class="mb-24" style="height: 320px"></a-card>
      </a-col>
      <a-col :span="14">
        <a-card style="height: 664px"> </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" class="mb-24">
      <a-col :span="14">
        <div v-if="this.imageFlag == 0" style="text-align: center">
          <a-card
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
            style="height: 680px"
          >
            <div style="height: 320px"></div>
            <a-spin />
          </a-card>
        </div>
        <div v-if="this.imageFlag">
          <a-card
            style="height: 680px"
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
          >
            <template #title>
              <h6>网页取证</h6>
              <p>已添加盲水印</p>
            </template>
            <br /><br />
            <el-image
              :src="this.image"
              :preview-src-list="[this.image]"
            ></el-image>
          </a-card>
        </div>
      </a-col>
      <a-col :span="10">
        <div v-if="this.infoFlag == 0">
          <a-card
            style="height: 680px; text-align: center"
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
          >
            <div style="height: 320px"></div>
            <a-spin></a-spin>
          </a-card>
        </div>
        <div v-if="this.infoFlag">
          <a-card
            style="height: 680px"
            :bordered="false"
            class="dashboard-bar-line header-solid mb-24"
          >
            <template #title>
              <h6>溯源信息</h6>
              <p>侵权网站溯源信息展示</p>
            </template>
            <a-descriptions :column="1" bordered>
              <a-descriptions-item label="服务器软件"
                ><div v-html="this.websiteData.app"></div>
              </a-descriptions-item>
              <a-descriptions-item label="网站描述">
                {{ this.websiteData.desccription }}
              </a-descriptions-item>
              <a-descriptions-item label="运营人员邮箱">
                <a-tag color="orange"> {{ this.websiteData.email }} </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="运营人员姓名">
                {{ this.websiteData.registrant }}
              </a-descriptions-item>
              <a-descriptions-item label="运营公司名称">
                {{ this.websiteData.registrar }}
              </a-descriptions-item>
              <a-descriptions-item label="友情链接">
                <a-tag color="blue"> {{ this.websiteData.friend_link }} </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="关键词">
                {{ this.websiteData.keywords }}
              </a-descriptions-item>
              <a-descriptions-item label="服务器">
                <a-tag color="green"> {{ this.websiteData.server }} </a-tag>
              </a-descriptions-item>
              <a-descriptions-item label="侵权电影">
                <div class="container">
                  <div :class="this.isScoll">
                    <div v-for="movie in this.movies1" :key="movie">
                      <div>{{ movie }}</div>
                    </div>
                  </div>
                </div>
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectData: [],
      websiteData: [],
      task: "",
      host: "",
      flag: false,
      websiteFlag: false,
      imageFlag: false,
      infoFlag: false,
      movies1: [],
      movies2: [],
      isScoll: true,
    };
  },

  beforeMount() {
    this.getSelectData();
    this.getWebsiteData();
    this.getImage();
    this.getMovies1();
    this.getMovies2();

    setInterval(() => {
      this.isScoll = "scoll";
      setTimeout(() => {
        var t = this.movies1.shift();
        this.movies1.push(t);
        this.isScoll = "";
      }, 850);
    }, 1700);
  },

  methods: {
    onChange(value) {
      this.task = value[0];
      this.host = value[1];

      this.getWebsiteData();
      this.getImage();
    },

    ifMovieNotInArray(movie, array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].toString().search(movie) != -1) {
          return false;
        }
      }
      return true;
    },

    getMovies1() {
      this.movies1 = [""];
      console.log(this.movies1);
      this.axios
        .post("http://localhost:5000/movie/getMovieInPage", {
          start: 0,
          count: 200,
          site: "zywlyy.cn",
        })
        .then((response) => {
          var pattern = "《(.*?)》";
          for (var i = 0; i < response.data.data.length; i++) {
            var result = response.data.data[i].name.match(pattern);
            if (result != null) {
              if (
                this.ifMovieNotInArray(result[1].split(" ")[0], this.movies1)
              ) {
                this.movies1.push(result[1].split(" ")[0]);
              }
            }
          }
        });
    },

    getMovies2() {},

    getImage() {
      this.imageFlag = false;
      var image = "";
      if (typeof this.host == "undefined") {
        image = "4kgd.cn";
      } else {
        image = this.host;
      }
      this.image =
        "http://localhost:5000/apiRequestSender/query/getScreenshot?domain=" +
        image;
      this.imageFlag = true;
    },

    getSelectData() {
      this.task = this.$route.query.task;
      this.host = this.$route.query.host;
      // console.log(refererCode);
      var temp = [
        {
          value: "4kgd.cn",
          label: "4kgd.cn",
        },
        {
          value: "5dz.cn",
          label: "5dz.cn",
        },
      ];
      this.axios
        .post("http://localhost:5000/apiRequestSender/query/getTimerRemain")
        .then((response) => {
          for (var i = 0; i < response.data.data.length; i++) {
            var json = {
              value: response.data.data[i].name,
              label: response.data.data[i].name,
              children: temp,
            };
            this.selectData.push(json);
          }
          if (typeof this.task == "undefined") {
            this.task = this.selectData[0].value;
          }
          if (typeof this.host == "undefined") {
            this.host = "4kgd.cn";
          }
          this.flag = true;
        });
    },

    getWebsiteData() {
      var site = "";
      if (typeof this.host == "undefined") {
        site = "4kgd.cn";
      } else {
        site = this.host;
      }
      this.websiteFlag = false;
      this.axios
        .post("http://localhost:5000/apiRequestSender/query/trackQuery", {
          param: site,
        })
        .then((response) => {
          this.websiteData = response.data.data[0];
          this.websiteFlag = true;
          this.infoFlag = true;
          var year = new Date().getFullYear();
          var month = new Date().getMonth() + 1;
          var day = new Date().getDate() - 2;
          var time = year + "年" + month + "月" + day + "日";
          this.websiteData["detectTime"] = time;
          console.log(time);
          console.log(this.websiteData.title);
          console.log(this.websiteData);
        });
    },
  },
};
</script>

<style>
th {
  width: 140px;
}
.container {
  height: 60px;
  overflow: hidden;
}

.scoll {
  animation: myScoll 20s linear infinite;
}

@keyframes myScoll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

#particles-js{
    width: 100%;
    height: 100%;
    position:fixed;
}

</style>