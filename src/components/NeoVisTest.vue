<template>
  <div class="myViz">
    <div id="viz">
        Cypher query: <textarea rows="4" cols=50 id="cypher"></textarea><br>
        <input type="submit" value="Submit" id="reload" @click="submit">
        <input type="submit" value="Stabilize" id="stabilize" @click="stabilize">
    </div>
  </div>
</template>

<script>
import NeoVis from 'neovis.js';

export default {
  components: {},
  props: {},
  data() {
    return {
      viz: {}, //定义一个viz对象
    };
  },
  mounted() {
    this.draw();
    console.log("hhh")
  }, //渲染
  methods: {
    submit() {
      var cypher = $("#cypher").val();
      if (cypher.length > 3) {
        this.viz.renderWithCypher(cypher);
      } else {
        console.log("reload");
        this.viz.reload();
      }
    },
    stabilize() {
      this.viz.stabilize();
    },
    draw() {
      var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: "1234",
        labels: {
          //"Character": "name",
          Character: {
            caption: "name",
            size: "pagerank",
            community: "community",
            //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
          },
        },
        relationships: {
          INTERACTS: {
            thickness: "weight",
            caption: false,
          },
        },
        //查询节点的语句，写成你们的
        initial_cypher: "MATCH p=(n)-[r:has_movie]->(I) WHERE  n.name='4kgd.cn' RETURN p limit 20",
      };
      console.log(NeoVis)
      this.viz = new NeoVis(config);
      this.viz.render();
      console.log(this.viz);
    },
  },
}
</script>

<style>
#viz{
    height: 400px;
    width: 400px;
}
</style>
