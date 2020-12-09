<template>
  <div
    class="text-comp comp-item"
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
    @click.stop="clickCompEv(currentComp)"
    @dragstart="dragCompEv($event)"
    @drag="dragCompEv($event)"
    @dragend="dragCompEv($event)"
  >
    <div class="text">{{currentComp['data_source']['text']}}</div>
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

  mounted() {}
};
</script>

<style lang="scss" scoped>
.text-comp {
  display: flex;
  align-items: center;
  .text {
    width: 100%;
    text-align: center;
  }
}
</style>