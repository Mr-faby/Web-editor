<template>
  <div class="drag-comp-scale-comp" v-if="currentComp">
    <div
      class="top"
      :style="{
          top:activeComp['style']['top'] + 20 - half + 'px',
          left:activeComp['style']['left'] + 40 + activeComp['style']['width']/2 - half + 'px'
      }"
      draggable="true"
      @dragstart="changeWhEv($event,'top')"
      @drag="changeWhEv($event,'top')"
      @dragend="changeWhEv($event,'top')"
    ></div>
    <div
      class="right"
      :style="{
        top:activeComp['style']['top'] + 20 + activeComp['style']['height']/2 - half + 'px',
        left:activeComp['style']['left'] + 40 + activeComp['style']['width'] - half + 'px'
    }"
      draggable="true"
      @dragstart="changeWhEv($event,'right')"
      @drag="changeWhEv($event,'right')"
      @dragend="changeWhEv($event,'right')"
    ></div>
    <div
      class="bottom"
      :style="{
        top:activeComp['style']['top'] + 20 + activeComp['style']['height'] - half + 'px',
        left:activeComp['style']['left'] + 40 + activeComp['style']['width']/2 - half + 'px'
    }"
      draggable="true"
      @dragstart="changeWhEv($event,'bottom')"
      @drag="changeWhEv($event,'bottom')"
      @dragend="changeWhEv($event,'bottom')"
    ></div>
    <div
      class="left"
      :style="{
        top:activeComp['style']['top'] + 20 + activeComp['style']['height']/2 - half + 'px',
        left:activeComp['style']['left'] + 40 - half + 'px'
    }"
      draggable="true"
      @dragstart="changeWhEv($event,'left')"
      @drag="changeWhEv($event,'left')"
      @dragend="changeWhEv($event,'left')"
    ></div>
    <div
      class="scale-width-posi"
      :style="{
        width:activeComp['style']['width'] + 'px',
        left:activeComp['style']['left'] + 40 + 'px'
    }"
    ></div>
    <div
      class="scale-height-posi"
      :style="{
        height:activeComp['style']['height'] + 'px',
        top:activeComp['style']['top'] + 20 + 'px'
    }"
    ></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      half: 3,
      startClientX: 0,
      startClientY: 0
    };
  },
  props: ["currentComp"],
  computed: {
    activeComp() {
      return this.currentComp;
    }
  },
  mounted() {},
  methods: {
    changeWhEv(event, attribute) {
      const type = event.type;
      if (type === "dragstart") {
        this.startClientX = event.clientX;
        this.startClientY = event.clientY;
      }
      if (type === "drag" && event.clientX === 0 && event.clientY === 0) return;
      if (attribute === "left" && this.activeComp["style"]["left"] > 0) {
        this.activeComp["style"]["width"] += this.startClientX - event.clientX;
        if (this.activeComp["style"]["left"] < 0) {
          this.activeComp["style"]["left"] = 0;
        }
        this.activeComp["style"]["left"] += -(
          this.startClientX - event.clientX
        );
      } else if (attribute === "right") {
        this.activeComp["style"]["width"] += event.clientX - this.startClientX;
      } else if (attribute === "top" && this.activeComp["style"]["top"] > 0) {
        this.activeComp["style"]["height"] += this.startClientY - event.clientY;
        this.activeComp["style"]["top"] += -(
          this.startClientY - event.clientY
        );
      } else if (attribute === "bottom") {
        this.activeComp["style"]["height"] += event.clientY - this.startClientY;
      }
      this.startClientX = event.clientX;
      this.startClientY = event.clientY;
    }
  }
};
</script>

<style lang="scss" scoped>
.drag-comp-scale-comp {
  div {
    width: 5px;
    height: 5px;
    border: 1px solid red;
    position: absolute;
    cursor: ew-resize;
    z-index: 100;
    background-color: white;
    &.top,
    &.bottom {
      cursor: ns-resize;
    }
    &.scale-width-posi {
      height: 10px;
      top: 0;
      background-color: rgba(255, 0, 0, 0.3);
    }
    &.scale-height-posi {
      width: 10px;
      left: 0;
      background-color: rgba(255, 0, 0, 0.3);
    }
  }
}
</style>