<template>
  <div>
    <a-row>
      <a-col>
        <a-card
          class="mb-24 card-table dashboard-bar-line header-solid"
          style="min-height: 100px; padding: 16px"
        >
          <a-button
            style="background-color: rgb(24, 144, 255); color: white"
            @click="showModal"
            >新增用户</a-button
          >
          <a-modal v-model="visible" title="添加用户" on-ok="handleOk" width="700px">
            <template slot="footer">
              <a-button key="back" @click="handleCancel"> 取消 </a-button>
            </template>
            <new-user></new-user>
          </a-modal>
          <!-- <a-button style="background-color:rgb(24, 144, 255); color:white">用户</a-button> -->
          <a-table
            :columns="columns"
            :row-key="(record) => record.email"
            :data-source="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
          >
            <template slot="操作" slot-scope="text, record">
              <a-popconfirm
                v-if="data.length"
                title="确定要删除吗？"
                ok-text="确定"
                cancel-text="取消"
                @confirm="() => onDelete(record.email)"
              >
                <a href="javascript:;">删除</a>
              </a-popconfirm>
            </template>
          </a-table></a-card
        >
      </a-col>
      <a-col> </a-col>
    </a-row>
  </div>
</template>

<script>
import axios from "axios";
import NewUser from "../components/NewUser.vue"
const queryData = (params) => {
  return axios.post("http://localhost:5000/user/getUserInPage", {
    start: 0,
    count: 100,
  });
};
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    width: "10%",
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "邮箱",
    dataIndex: "email",
    width: "15%",
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "用户名",
    dataIndex: "username",
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" },
    // ],
    width: "15%",
  },
  {
    title: "权限组",
    dataIndex: "group",
    sorter: (a, b) =>
      a.group.toString().charCodeAt(0) - b.group.toString().charCodeAt(0),
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" },
    // ],
    width: "15%",
  },
  {
    title: "是否可用",
    dataIndex: "ban",
    sorter: (a, b) => a.ban - b.ban,
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" },
    // ],
    width: "10%",
  },
  {
    title: "操作",
    dataIndex: "operation",
    scopedSlots: { customRender: "操作" },
    width: "20%",
  },
];

export default {
  components:{
      NewUser
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      visible: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },

    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter((item) => item.email !== key);
      axios
        .post("http://localhost:5000/manage/user/delUser", {
          email: key,
        })
        .then((response) => {
          this.fetch();
        });
    },

    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch();
    },
    fetch() {
      this.loading = true;
      queryData().then(({ data }) => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        // pagination.total = 200;
        this.loading = false;
        this.data = data.data;
        for (var i = 0; i < this.data.length; i++) {
          this.data[i]["id"] = i + 1;
        }
        console.log(this.data);
        this.pagination = pagination;
      });
    },
  },
};
</script>

<style>
/* .ant-modal-body{
    width:500px;
} */
</style>