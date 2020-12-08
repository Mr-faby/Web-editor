<template>
  <canvas :id="scaleType" :class="scaleType" class="scale-canvas">您的浏览器版本过低，请升级浏览器版本</canvas>
</template>

<script>
export default {
  data: () => {
    return {
      width: 1520,
      height: 780
    };
  },
  props: ["scaleType"],
  mounted() {
    this.getCanvas();
  },
  methods: {
    getCanvas() {
      const canvas = document.getElementById(this.scaleType),
        ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (this.scaleType === "scale-x") {
        canvas.width = this.width;
        canvas.height = 20;
        this.drawScaleX(ctx);
      } else {
        canvas.width = 40;
        canvas.height = this.height;
        this.drawScaleY(ctx);
      }
    },
    drawScaleX(ctx) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#9c9c9c";
       ctx.font = '500 10px Tahoma';
      const lines = parseInt(this.width / 10),
        gap = 10;
      for (let i = 0; i <= lines; i++) {
        ctx.beginPath();
        ctx.moveTo(gap * i, 0);
        ctx.lineTo(gap * i, i % 5 ? 5 : 10);
        if (i % 10 === 0) {
          ctx.strokeText(i * 10, gap * i + 2, 15);
        }
        ctx.closePath();
        ctx.stroke();
      }
    },
    drawScaleY(ctx) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#9c9c9c";
      const lines = parseInt(this.height / 10),
        gap = 10;
      for (let i = 0; i <= lines; i++) {
        ctx.beginPath();
        ctx.moveTo(0, gap * i);
        ctx.lineTo(i % 5 ? 5 : 10, gap * i);
        if (i % 5 === 0) {
          ctx.strokeText(i * 10, 15, gap * i + 10);
        }
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scale-canvas {
  position: absolute;
  top: 0;
  left: 0;
}
.scale-x {
  width: calc(100% - 40px);
  height: 20px;
  left: 40px;
}
.scale-y {
  width: 40px;
  height: 780px;
  top: 20px;
}
</style>