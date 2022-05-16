<template>
  <div>
    <a-table
      :columns="columns"
      :row-key="(record) => record.host"
      :data-source="data"
      :pagination="false"
      :scroll="{ y: 330 }"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">
        {{ name.first }} {{ name.last }}
      </template>
    </a-table>
  </div>
</template>

<script>
import axios from "axios";

const queryData = () => {
  return axios.post("http://localhost:5000/vpw/getVpwHaveMovieAndInfo");
};
const columns = [
  {
    title: "域名",
    dataIndex: "host",
    // sorter: true,
    width: "50%",
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "网站标题",
    dataIndex: "title",
    width: "50%",
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" },
    // ],
    // width: "20%",
  },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //   },
];

export default {
  data() {
    return {
      data: [],
    //   pagination: {},
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
    //   this.pagination = pager;
      this.fetch({
        // results: pagination.pageSize,
        // page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      queryData().then(({ data }) => {
        // const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        // pagination.total = 200;
        this.loading = false;
        console.log("data:", data);
        this.data = data.data.slice(0, 50);
        // this.pagination = pagination;
      });
    },
  },
};
</script>

<style>
</style>