<template>
  <div class="design-right-bar-page" v-if="renderComp">
    <!-- <div class="page-name">{{currentPage.page_name}}</div> -->
    <div class="comp-info">
      <span class="comp-name">{{
        currentSelectedComp && currentSelectedComp["comp_name"]
      }}</span>
      <span class="iconfont iconshanchu" title="删除" @click="delCompEv"></span>
    </div>
    <div class="data-config">
      <div class="tit">数据</div>
      <div class="content">
        <component :is="renderComp" :currentCompData="currentSelectedComp"></component>
      </div>
    </div>
    <div class="style-config">
      <div class="tit">样式</div>
      <div class="content">
        <common-config-component
          :currentCompData="currentSelectedComp"
        ></common-config-component>
      </div>
    </div>
  </div>
</template>

<script>
import CommonConfigComponent from "../custom-config/common-config.vue";
import { findConfigComp } from "../../../../core/js/comp-config.js";

export default {
  data: () => {
    return {
      currentComp: null,
      currentPage: null,
    };
  },
  props: ["currentSelectedComp"],
  components: {
    CommonConfigComponent,
  },
  computed: {
    renderComp() {
      return (
        (this.currentSelectedComp &&
          findConfigComp(this.currentSelectedComp["comp_type"])) ||
        null
      );
    },
  },
  mounted() {
  },
  destroyed() {
  },
  methods: {
    delCompEv() {
      this.$emit("delComp");
    },
  },
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