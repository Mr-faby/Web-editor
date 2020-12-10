<template>
  <div
    class="video-comp comp-item"
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
    <video
      src="../../../../../asset/video/Video_2020-12-09_182038.mp4"
      width="100%"
      height="100%"
      autoplay
      controls
      loop
    >您的浏览器版本过低，请升级浏览器版本</video>
    <!-- src="https://www.w3schools.com/html/mov_bbb.mp4" -->
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
.video-comp {
}
</style>