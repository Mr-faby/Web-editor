<template>
  <div class="extend-page">extend</div>
</template>

<script>
import { EmitEvent } from "../../../../core/js/emit.js";

export default {
  data: () => {
    return {
      style: null,
      data: null,
      marginL: 220,
      marginT: 65,
      changeX: 0,
      changeY: 0
    };
  },
  created() {},
  methods: {
    clickCompEv(currentComp) {
      EmitEvent.$emit("selectCompEmit", currentComp);
    },
    dragCompEv(compData, _event) {
      const type = _event.type,
        clientX = _event.clientX - this.marginL,
        clientY = _event.clientY - this.marginT;
      if (type === "dragstart") {
        this.changeX = clientX - compData["style"]["left"];
        this.changeY = clientY - compData["style"]["top"];
      }
      if (type === "drag" && _event.clientX === 0 && _event.clientY === 0)
        return;
      compData["style"]["left"] =
        clientX - this.changeX < 0 ? 0 : clientX - this.changeX;
      compData["style"]["top"] =
        clientY - this.changeY < 0 ? 0 : clientY - this.changeY;
    }
  }
};
</script>