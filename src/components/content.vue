<template>
<div id ="content">
  <grid-layout
            :layout.sync="layout"
            :col-num="16"
            :row-height="10"
            :is-draggable="false"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[20, 20]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            <component :is="item.c"></component>
        </grid-item>
    </grid-layout>
</div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"
import Chart1 from "./content_charts/top_chart_1"
import Chart2 from "./content_charts/top_chart_2"
import Chart3 from "./content_charts/top_chart_3"
import Chart4 from "./content_charts/top_chart_4"
import Chart5 from "./content_charts/chart_5"
import Chart6 from "./content_charts/chart_6"
import Chart7 from "./content_charts/chart_7"
import Chart8 from "./content_charts/chart_8"
import Chart9 from "./content_charts/chart_9"
import Chart10 from "./content_charts/chart_10"
import Chart11 from "./content_charts/chart_11"
import Chart12 from "./content_charts/chart_12"
import Chart13 from "./content_charts/chart_13"

export default {
  name: 'content',
  components: {
    GridLayout,
    GridItem,
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    Chart6,
    Chart7,
    Chart8,
    Chart9,
    Chart10,
    Chart11,
    Chart12,
    Chart13
  },
  data() {
        return {
            layout: [
                {"x":2,"y":0,"w":3,"h":5,"i":"0","c": "Chart1", static: false},
                {"x":5,"y":0,"w":3,"h":5,"i":"1","c": "Chart2", static: false},
                {"x":8,"y":0,"w":3,"h":5,"i":"2","c": "Chart3", static: false},
                {"x":11,"y":0,"w":3,"h":5,"i":"3","c": "Chart4", static: false},
                {"x":2,"y":0,"w":8,"h":17,"i":"4","c": "Chart5", static: false},
                {"x":10,"y":0,"w":4,"h":17,"i":"5","c": "Chart6", static: false},
                {"x":2,"y":0,"w":8,"h":12,"i":"6","c": "Chart7", static: false},
                {"x":2,"y":0,"w":4,"h":5,"i":"7","c": "Chart8", static: false},
                {"x":6,"y":0,"w":4,"h":5,"i":"8","c": "Chart9", static: false},
                {"x":10,"y":0,"w":4,"h":5,"i":"9","c": "Chart10", static: false},
                {"x":10,"y":0,"w":4,"h":12,"i":"10","c": "Chart11", static: false},
                {"x":2,"y":0,"w":8,"h":11,"i":"11","c": "Chart12", static: false},
                {"x":10,"y":0,"w":4,"h":11,"i":"12","c": "Chart13", static: false}
            ],
            draggable: false,
            resizable: false,
            index: 0
        }
  }
}
</script>

<style lang="less">

#content {
  border: 0;
  width: calc(100% - 320px);
  padding: 0;
  margin-top: 62px;
  margin-left: 320px;
  position: absolute;
  background-color: #f6f6f6;
  transition: 0.5s;
  font-family: 'Open Sans', sans-serif;
}

.vue-grid-layout {
  background: #eeeeee;
  //background: grey;
  padding-bottom: 60px;
  transition: none;
}

.vue-grid-item {
  background: #ffffff;
  border-radius: 5px;
  transition: none;
}
</style>