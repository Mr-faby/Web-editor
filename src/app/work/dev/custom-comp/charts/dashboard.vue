<template>
  <div
    class="dashboard-comp comp-item"
    :style="{
      'width':currentComp.style['width'] + 'px',
      'height':currentComp.style['height'] + 'px',
      'top':currentComp.style['top'] + 'px',
      'left':currentComp.style['left'] + 'px',
      'border-color':currentComp.style['borderColor'],
      'border-radius':currentComp.style['borderRadius'] + '%',
      'font-size':currentComp.style['fontSize'] + 'px',
      'opacity':currentComp.style['opacity'],
      'zIndex':currentComp.style['zIndex'],
      'background-color':currentComp.style['backgroundColor'],
      'color':currentComp.style['fontColor']
  }"
    :draggable="editState"
    @click.stop="clickCompEvs(currentComp)"
    @dragstart="dragCompEv($event)"
    @drag="dragCompEv($event)"
    @dragend="dragCompEv($event)"
  >
    <div :id="currentComp['uuid']" class="echarts"></div>
  </div>
</template>

<script>
import ExtendComponent from "../../extend/extend.vue";
import { Echarts } from "core/echarts/echarts.js";

export default {
  extends: ExtendComponent,
  data: () => {
    return {
      charts: null
    };
  },

  props: ["currentComp"],

  mounted() {
    this.initEcharts();
  },

  methods: {
    initEcharts() {
      this.charts = Echarts.init(
        document.getElementById(this.currentComp["uuid"])
      );
      this.charts.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
          }
        ]
      });
    },

    clickCompEvs(event) {
      this.charts.resize();
      this.clickCompEv(event);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>