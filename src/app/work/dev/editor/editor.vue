<template>
  <div class="editor-page">
    <scale-component scaleType="scale-x"></scale-component>
    <scale-component scaleType="scale-y"></scale-component>
    <div class="editor">{{appProject}}</div>
  </div>
</template>

<script>
import ScaleComponent from "../scale/scale.vue";
export default {
  data: () => {
    return {};
  },
  components: {
    ScaleComponent
  },
  computed: {
    appProject() {
      return JSON.stringify(this.$store.state.appProject);
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.editor-page {
  position: relative;
  height: 800px;
  .editor {
    width: calc(100% - 40px);
    height: 780px;
    position: absolute;
    top: 20px;
    left: 40px;
    background-image: linear-gradient(
        rgba(200, 205, 208, 0.3) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(200, 205, 208, 0.3), 1px, transparent 0),
      linear-gradient(#c8cdd0 1px, transparent 0),
      linear-gradient(90deg, #c8cdd0 1px, transparent 0);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
  }
}
</style>