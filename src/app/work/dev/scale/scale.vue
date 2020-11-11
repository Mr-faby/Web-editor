<template>
  <canvas :class="scaleType" class="scale-canvas"></canvas>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: ["scaleType"]
};
</script>

<style lang="scss" scoped>
.scale-canvas {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eee;
}
.scale-x {
  width: 100%;
  height: 20px;
}
.scale-y {
  width: 40px;
  height: 800px;
}
</style>