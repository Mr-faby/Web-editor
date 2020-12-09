<template>
  <div class="button-comp-config comp-item-config">
    <div class="inline">
      <label for="text">名称：</label>
      <input type="text" style="width:100px" name="text" v-model="currentCompData['data_source']['btnName']" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  props: ["currentCompData"],
  mounted() {
  }
};
</script>

.<style lang="scss" scoped>
</style>