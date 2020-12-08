<template>
  <div class="run-page">
    <div class="edit">
      <span class="page_name">组态：{{currentPage['page_name']}}</span>
      <span class="iconfont iconbianji edit-icon" title="编辑" @click="toEdit"></span>
    </div>
    <div class="comp-list-wrap" v-if="currentPage">
      <template v-for="(comp,idx) in currentPage.comp_list">
        <component :is="comp.component" :currentComp="comp" :key="comp.comp_name + idx"></component>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentProject: null,
      currentPage: null
    };
  },
  computed: {},
  created() {
    this.currentProject = this.$store.state.currentProjectObj;
    this.currentPage = this.$store.state.currentPageObj;
  },
  methods: {
    toEdit() {
      const projectId = this.currentProject["project_id"],
        pageId = this.currentPage['page_id'];
      if (!projectId || !pageId) return;
      this.$router.push(`../dev/${projectId}?checkPage=${pageId}`);
    }
  }
};
</script>

<style lang="scss">
.run-page {
  .edit {
    position: absolute;
    right: 100px;
    top: 0;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #aaa;
    .page_name {
      font-size: 14px;
      margin-right: 10px;
    }
    .edit-icon {
      font-size: 24px;
      &:hover {
        color: gray;
      }
    }
  }
  .comp-list-wrap {
    overflow: hidden;
    width: 100%;
    height: 100%;
    .comp-item {
      border-width: 1px;
      border-style: solid;
      position: absolute;
      box-sizing: border-box;
      .echarts{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>