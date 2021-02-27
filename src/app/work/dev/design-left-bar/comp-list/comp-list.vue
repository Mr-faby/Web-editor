<template>
  <div class="comp-list-page">
    <div class="basic-comp">
      <div class="panel-head" @click="basicCompExpanded = !basicCompExpanded">
        <span>基础</span>
        <span
          class="expand iconfont iconzhankai"
          :class="{ expanded: basicCompExpanded }"
        ></span>
      </div>
      <div class="panel" v-show="basicCompExpanded">
        <div
          class="comp-item"
          v-for="comp of basicComp"
          :key="comp.comp_type"
          draggable="true"
          @dragend="emitDragCompEvToParent(comp, $event)"
        >
          <span class="iconfont" :class="comp.icon"></span>
          <span class="comp-text">{{ comp.comp_name }}</span>
        </div>
      </div>
    </div>
    <div class="charts-comp">
      <div class="panel-head" @click="chartsCompExpanded = !chartsCompExpanded">
        <span>图表</span>
        <span
          class="expand iconfont iconzhankai"
          :class="{ expanded: chartsCompExpanded }"
        ></span>
      </div>
      <div class="panel" v-show="chartsCompExpanded">
        <div
          class="comp-item"
          v-for="comp of chartsComp"
          :key="comp.comp_type"
          draggable="true"
          @dragend="emitDragCompEvToParent(comp, $event)"
        >
          <span class="iconfont" :class="comp.icon"></span>
          <span class="comp-text">{{ comp.comp_name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { basicComp, chartsComp } from "../../../../../core/js/comp-config.js";

export default {
  data: () => {
    return {
      basicCompExpanded: true,
      chartsCompExpanded: true,
      basicComp,
      chartsComp,
    };
  },
  props: ["currentPageData"],
  computed: {},
  mounted() {
  },
  methods: {
    emitDragCompEvToParent(comp, event) {
      if (!this.currentPageData) return;
      this.$emit("listenCompDragFromListEv", { comp, event });
    },
  },
};
</script>

<style lang="scss" scoped>
.comp-list-page {
  .panel-head {
    height: 24px;
    line-height: 24px;
    background-color: #f2f2f2;
    color: #444;
    display: flex;
    justify-content: space-between;
    padding: 2px 5px;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 5px;
    span.expand {
      transform: rotate(90deg);
      &.expanded {
        transform: rotate(0);
      }
    }
  }
  .panel {
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    font-size: 12px;
    .comp-item {
      cursor: pointer;
      border: 1px solid #f5f5f5;
      text-align: center;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgba(255, 0, 0, 0.5);
        color: white;
      }
    }
  }
}
</style>