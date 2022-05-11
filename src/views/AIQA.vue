<template>
  <a-row>
    <a-col :span="22" :offset="1" style="margin-top: 30px">
      <a-card
        style="
          background-color: white;
          width: 100%;
          min-height: 400px;
          border-radius: 20px;
        "
        :hoverable="true"
      >
        <QAWelcome />
        <!-- <Conversation :ques="ques" :ans="ans" />
        <Conversation :ques="ques" :ans="ans" />
        <Conversation :ques="ques" :ans="ans" /> -->
        <transition-group tag="">
          <div v-for="num in this.count_list" :key="num">
            <Conversation :words="conv[num].words" :flag="conv[num].flag" />
          </div>
        </transition-group>

        <div style="margin-top: 100px; margin-left: 100px; margin-right: 100px">
          <a-input-search
            v-model:value="value"
            placeholder="请输入您的问题"
            enter-button="发送"
            show-count
            :maxLength="20"
            @search="onSearch"
          />
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import Conversation from "../components/Conversation.vue";
import QAWelcome from "../components/QAWelcome.vue";
import QuesConv from "../components/QuesConv.vue";
import AnsConv from "../components/AnsConv.vue";
export default {
  components: { Conversation, QAWelcome, QuesConv, AnsConv },

  data() {
    return {
      value: "",
      conv: [],
      ques: [],
      ans: [],
      count: 0,
      count_list: [],
    };
  },

  methods: {
    onSearch(searchValue) {
      this.value = "";
      // console.log("use value", searchValue);

      this.getConversation(searchValue);
    },
    getConversation(que) {
      this.conv.push({
        flag: 1,
        words: que,
      });
      console.log("flag1:", this.conv.length);
      this.count_list.push(this.count);
      this.count += 1;
      // console.log(this.ques);
      // console.log(this.count);
      // this.count.push(this.count.length);
      this.axios
        .post("http://localhost:5000/apiRequestSender/query/QASystem", {
          param: que,
        })
        .then((response) => {
          var temp = response.data.data.str;
          if (temp.length > 400) {
            temp = temp.slice(0, 400);
            temp += "...<br/>您还可以访问我们的知识图谱页面查看更多信息。";
          }
          this.ans.push(temp);
          this.conv.push({
            words: temp,
            flag: 0,
          });
          console.log("flag0:", this.conv.length);
          // console.log(response.data.data.str);
        });
    },
  },
};
</script>

<style scoped>
.v-item {
  list-style-type: none;
  /**
	 * 可以在v-enter-active和v-move中分别用transition过渡，也可以在item中用transition，包含了这两项
	 * 要用all不用transform，有可能是因为splice删除效果不是transform
	 */
  /* transition: all 1s; */
}
.v-enter-active {
  transition: all 1s;
}
.v-move {
  /* transition: all 1s; */
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-leave-active {
  position: absolute;
}
</style>