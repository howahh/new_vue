<template>
  <div class="myViz">
    <div id="viz" class="neojs" />
    <a-button @click="this.update">hhh</a-button>
  </div>
</template>

<script>
// const NeoVis = require("neovis.js");
import * as NeoVis from "neovis.js";

export default {
  components: {},
  props: {},
  data() {
    return {
      viz: null, //定义一个viz对象
    };
  },
  mounted() {
    this.draw();
  }, //渲染
  methods: {
    submit() {
      var cypher = $("#cypher").val();
      if (cypher.length > 3) {
        this.viz.renderWithCypher(cypher);
        console.log("hhh123");
      } else {
        console.log("reload");
        this.viz.reload();
      }
    },
    stabilize() {
      this.viz.stabilize();
    },
    update() {
      console.log("hh");
      // this.viz.clearNetwork()
      this.viz.updateWithCypher(
        "MATCH p=(m:Movie)-[:has_movie] -(n:Domain)-[r:with_title]-(t:Title),q=(n:Domain)-[:with_IP]-(i:IP)  WHERE n.name='4kgd.cn' RETURN p,q limit 50"
      );
    },
    draw() {
      var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: "1234",
        labels: {
          //"Character": "name",
          // Character: {
          //   caption: "name",
          //   size: "pagerank",
          //   community: "community",
          //   //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
          // },
          Domain: {
            caption: "name",
            size: 2,
          },
        },
        relationships: {
          has_movie: {
            thickness: "weight",
            caption: true,
          },
        },
        //查询节点的语句，写成你们的
        initial_cypher:
          "MATCH p=(n)-[r:has_movie]-(I) WHERE  n.name='4kgd.cn' RETURN n limit 45",
        // "MATCH p= (n:Cluster)-[:in_cluster]-(Domain)-[:has_movie]-(Movie) RETURN p LIMIT 100"

      };
      // this.viz = new NeoVis(config);
      this.viz = new NeoVis.default(config);
      this.viz.render();
      const that = this;
      const nodesArray = []; // 动态取出neo4j通过语句查询的节点集群
      const labelsArr = []; // 节点群
      const edgesArr = [];
      window.slm = this.viz;
      const eno4jObject = this.viz;
      that.viz.registerOnEvent("completed", (ab) => {
        // Your after render code here
        console.log(that.viz.nodes.get({ group:'Domain' }));
        // /**
        //  * 处理节点拖到问题
        //  */
        // that.viz.nodes.on('click', function(params) {
        //   // for (var i = 0; i < params.nodes.length; i++) {
        //   //   var nodeId = params.nodes[i]
        //   //   eno4jObject.nodes.update({ id: nodeId, fixed: { x: true, y: true }})
        //   //   console.log('结束')
        //   // }
        //   console.log("click")
        // })
        // eno4jObject.network.on('dragStart', function(params) {
        //   for (var i = 0; i < params.nodes.length; i++) {
        //     var nodeId = params.nodes[i]
        //     eno4jObject.nodes.update({ id: nodeId, fixed: { x: false, y: false }})
        //     console.log('开始')
        //   }
        // })
      });

      // this.viz.network.on('dragEnd', function(params) {
      //     for (var i = 0; i < params.nodes.length; i++) {
      //       var nodeId = params.nodes[i]
      //       eno4jObject.nodes.update({ id: nodeId, fixed: { x: true, y: true }})
      //       console.log('结束')
      //     }
      //   })
    },
  },
};
</script>

<style>
#viz {
  height: 400px;
  width: 400px;
}
</style>
