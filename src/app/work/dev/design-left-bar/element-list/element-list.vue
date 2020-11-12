<template>
  <div class="element-list-page">
    <div class="element-item">1.折线</div>
    <div class="element-item">2.仪表盘</div>
    <div class="element-item">3.折线</div>
    <div class="element-item">4.仪表盘</div>
  </div>
</template>

<script>
import { EmitEvent } from "../../../../../core/js/emit.js";

export default {
  mounted() {
    // EmitEvent.$on('dragComp',data => {
    //   console.log('element',data)
    // })
  },
  destroyed() {
    // EmitEvent.$off('dragComp')
  }
};
</script>

<style lang="scss" scoped>
.element-list-page {
  .element-item {
    padding: 0 5px;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 0, 0, 0.05);
    }
  }
}
</style>