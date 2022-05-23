<template>
  <div class="place-holder">
    <div style="height:50px; color:white">
        <h6 style="padding:6px; ">实时爬取任务</h6>
    </div>
    <div class="scoll-container">
      <div class="scoll">
        <div v-for="item in this.title" :key="item">
          <div>
            {{ item }}
            <hr align=center width=500 color=#987cb9 SIZE=1/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
      return{
        title:[]
    }
  },
  methods: {
      getData() {
          this.axios
          .post("http://localhost:5000/vpw/getVpwInPage", {
          start: 0,
          count: 100,
        })
        .then((response) => {
          for (var i = 0; i < response.data.data.length; i++) {
            var temp = response.data.data[i].title;
            if(temp.length>20){
                temp = temp.slice(0,20) + '...'
            }
            this.title.push(temp);
          }
        });
      }
  },
  beforeMount() {
      this.getData();
  },
  
};
</script>

<style scoped>
.place-holder {
  height: 200px;
  border-radius: 5px;
  margin: 6px;
  width: 100%;
  border: 1px solid;
  border-color: white;
}
.scoll-container {
  height: 200px;
  overflow: hidden;
}
.scoll {
  margin: 20px;
  animation: myScoll 40s linear infinite;
}
.scoll:hover {
  animation-play-state: paused;
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