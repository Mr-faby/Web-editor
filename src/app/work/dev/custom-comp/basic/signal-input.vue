<template>
  <div
    class="signal-input-comp comp-item"
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
    <input
      type="text"
      v-model="currentComp['data_source']['textValue']"
      :disabled="!editState"
      :style="{
        'background-color':currentComp.style['backgroundColor'],
        'color':currentComp.style['fontColor']
    }"
    />
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

  computed: {},

  props: ["currentComp"],

  mounted() {}
};
</script>

<style lang="scss" scoped>
.signal-input-comp {
  input {
    width: 100%;
    height: 100%;
    text-align: center;
    border: none;
  }
}
</style>