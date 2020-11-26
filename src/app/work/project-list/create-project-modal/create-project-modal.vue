<template>
  <modal @close="$emit('close')" @submit="submit">
    <span slot="header">创建新项目</span>
    <div class="body-content" slot="body">
      <div class="form-item">
        <label for="projectName">名称：</label>
        <input
          type="text"
          name="projectName"
          :class="{'error':!formValid}"
          required
          v-model.trim="projectNameStr"
        />
        <span class="required">*</span>
      </div>
      <div class="form-item">
        <label for="projectDesc">描述：</label>
        <input type="text" name="projectDesc" v-model.trim="projectDescStr" />
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "../../../../core/components/modal/modal.vue";

export default {
  data: () => {
    return {
      projectNameStr: "",
      projectDescStr: "",
      formValid: true
    };
  },
  components: {
    Modal
  },
  methods: {
    submit() {
      this.formValid = this.projectNameStr.length > 0;
      if (!this.formValid) return;
      this.$emit("submit", {
        project_name: this.projectNameStr,
        project_desc: this.projectDescStr
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>