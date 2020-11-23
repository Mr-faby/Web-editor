<template>
  <div class="element-list-page">
    <div
      class="element-item"
      v-for="(comp,idx) in compList"
      :key="comp.comp_name + idx"
    >{{idx+'.'+comp.comp_name}}</div>
  </div>
</template>

<script>
import { EmitEvent } from "../../../../../core/js/emit.js";

export default {
  data: () => {
    return {
      compList: null
    };
  },
  mounted() {
    //监听页面激活事件
    EmitEvent.$on("selectedPage", page => {
      this.compList = page["comp_list"] || [];
    });
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