<template>
  <div class="element-list-page">
    <div
      class="element-item"
      v-for="(comp, idx) in compList"
      :key="comp.comp_name + idx"
      @click="selectComp(comp)"
    >
      {{ idx + "." + comp.comp_name }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    compList() {
      const page = this.$store.state.currentPageObj;
      return (page && page["comp_list"]) || [];
    },
  },
  destroyed() {},
  methods: {
    selectComp(currentComp) {},
  },
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