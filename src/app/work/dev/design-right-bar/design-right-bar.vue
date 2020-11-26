<template>
  <div class="design-right-bar-page" v-if="configComp">
    <div class="comp-info">
      <span class="comp-name">{{currentComp && currentComp['comp_name']}}</span>
      <span class="iconfont iconshanchu" title="删除" @click="delCompEv"></span>
    </div>
    <div class="data-config">
      <div class="tit">数据</div>
      <div class="content">
        <component :is="configComp" :currentCompData="currentComp"></component>
      </div>
    </div>
    <div class="style-config">
      <div class="tit">样式</div>
      <div class="content">
        <common-config-component :currentCompData="currentComp"></common-config-component>
      </div>
    </div>
  </div>
</template>

<script>
import CommonConfigComponent from "../custom-config/common-config.vue";
import { EmitEvent } from "../../../../core/js/emit.js";
import { findConfigComp } from "../../../../core/js/comp-config.js";

export default {
  data: () => {
    return {
      configComp: null,
      currentComp: null
    };
  },
  props: [],
  components: {
    CommonConfigComponent
  },
  computed: {},
  mounted() {
    EmitEvent.$on("selectCompEmit", currentComp => {
      if (!currentComp) {
        this.configComp = null;
        this.currentComp = null;
        return;
      }
      const type = currentComp["comp_type"];
      this.configComp = findConfigComp(type);
      this.currentComp = currentComp;
    });
  },
  destroyed() {
    EmitEvent.$off("selectCompEmit");
  },
  methods: {
    delCompEv() {
      EmitEvent.$emit("delComp");
    }
  }
};
</script>

<style lang="scss" scoped>
.design-right-bar-page {
  .comp-info {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 5px solid red;
    background-color: rgba(255, 0, 0, 0.05);
    .comp-name {
      padding-left: 20px;
    }
    span.iconfont {
      padding-right: 10px;
      color: red;
      cursor: pointer;
    }
  }
  .data-config,
  .style-config {
    .tit {
      box-sizing: border-box;
      background-color: #eee;
      padding: 5px 10px;
    }
    .content {
      padding: 5px;
    }
  }
}
</style>