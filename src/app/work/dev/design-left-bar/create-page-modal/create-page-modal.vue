<template>
  <modal @close="$emit('close')" @submit="submit">
    <span slot="header">创建新页面</span>
    <div class="body-content" slot="body">
      <div class="form-item">
        <label for="pageName">名称：</label>
        <input
          type="text"
          name="pageName"
          :class="{'error':!formValid}"
          required
          v-model.trim="pageNameStr"
        />
        <span class="required">*</span>
      </div>
      <div class="form-item">
        <label for="pageDesc">描述：</label>
        <input type="text" name="pageDesc" v-model.trim="pageDescStr" />
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "../../../../../core/components/modal/modal.vue";

export default {
  data: () => {
    return {
      pageNameStr: "",
      pageDescStr: "",
      formValid: true
    };
  },
  components: {
    Modal
  },
  methods: {
    submit() {
      this.formValid = this.pageNameStr.length > 0;
      if (!this.formValid) return;
      this.$emit("submit", {
        page_name: this.pageNameStr,
        page_desc: this.pageDescStr
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>