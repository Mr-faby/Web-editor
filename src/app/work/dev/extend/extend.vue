<template>
  <div class="extend-page">extend</div>
</template>

<script>
export default {
  data: () => {
    return {
      style: null,
      data: null,
    };
  },
  created() {},
  computed: {
    editState() {
      return this.$store.state.editState;
    },
  },
  methods: {
    clickCompEv(currentComp) {
      if (!this.editState) return;
      this.$emit("selectCompEmit", currentComp);
    },
    dragCompEv(event) {
      if (!this.editState) return;
      this.$emit("dragCompEv", event);
    },
  },
};
</script>