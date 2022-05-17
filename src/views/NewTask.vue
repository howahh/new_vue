<template>
  <div>
    <a-row :gutter="24" class="mb-24">
      <a-col :span="8">
        <a-card style="height: 300px"></a-card>
      </a-col>
      <a-col :span="16">
        <a-card style="height: 300px"></a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" class="mb-24">
      <a-col :span="12">
        <a-card style="height: 300px"></a-card>
      </a-col>
      <a-col :span="12">
        <a-card style="height: 300px"></a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" class="mb-24">
      <a-col :span="18">
        <a-card style="height: 500px"></a-card>
      </a-col>
      <a-col :span="6">
        <a-card style="height: 500px"></a-card>
      </a-col>
    </a-row>
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