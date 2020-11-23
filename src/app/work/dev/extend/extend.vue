<template>
  <div class="extend-page">extend</div>
</template>

<script>
import { EmitEvent } from "../../../../core/js/emit.js";

export default {
  data: () => {
    return {
      style: null,
      data: null
    };
  },
  created() {},
  methods: {
    clickCompEv(currentComp) {
      EmitEvent.$emit("selectCompEmit", currentComp);
    },
    dragCompEv(event) {
      this.$emit("dragCompEv", event);
    }
  }
};
</script>