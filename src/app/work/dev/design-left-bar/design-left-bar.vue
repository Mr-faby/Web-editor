<template>
  <div class="design-left-bar-page">
    <div class="page-comp-wrap">
      <div class="head">
        <div class="page tab" @click="checkTab(1)" :class="{'active':currentTab === 1}">页面</div>
        <div class="element tab" @click="checkTab(2)" :class="{'active':currentTab === 2}">元素</div>
        <div class="create-page tab" @click="createPage">+</div>
      </div>
      <div class="list">
        <keep-alive>
          <component :is="currentComponent" :data="pageList"></component>
        </keep-alive>
      </div>
    </div>
    <div class="comp-list">
      <comp-list-component></comp-list-component>
    </div>
  </div>
</template>

<script>
import PageListComponent from "./page-list/page-list.vue";
import ElementListComponent from "./element-list/element-list.vue";
import CompListComponent from "./comp-list/comp-list.vue";

export default {
  data: () => {
    return {
      currentTab: 1,
      currentComponent: PageListComponent
    };
  },
  props: ["pageList"],
  components: {
    PageListComponent,
    ElementListComponent,
    CompListComponent
  },
  methods: {
    checkTab(type) {
      if (!type) return;
      this.currentTab = type;
      this.currentComponent =
        type === 1 ? PageListComponent : ElementListComponent;
    },
    createPage() {}
  }
};
</script>

<style lang="scss" scoped>
.design-left-bar-page {
  .page-comp-wrap {
    height: 280px;
    .head {
      height: 30px;
      line-height: 30px;
      display: flex;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      .tab {
        flex: 1;
        border-right: 1px solid #eee;
        &.create-page {
          width: 28px;
          flex: none;
        }
        &:hover,
        &.active {
          color: red;
          border-bottom: 1px solid red;
        }
      }
    }
    .list {
      height: 250px;
      padding: 5px;
      box-sizing: border-box;
      font-size: 12px;
    }
  }
}
</style>