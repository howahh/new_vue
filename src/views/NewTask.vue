<template>
  <div>
    <div>
      <a-button type="primary" @click="showModal">
        Open Modal with customized footer
      </a-button>
      <a-modal v-model="visible" title="Title" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="handleCancel"> 取消 </a-button>
        </template>
        <add-spider />
      </a-modal>
    </div>
  </div>
</template>

<script>
import AddSpider from "../components/AddSpider.vue";

export default {
  name: "SpiderAdd",
  components: {
    AddSpider,
  },
  data() {
    return {
      loading: false,
      visible: false,
    };
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
  },
};
</script>

<style>
</style>