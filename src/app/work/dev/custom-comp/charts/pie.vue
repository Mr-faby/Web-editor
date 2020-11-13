<template>
  <div
    class="pie-comp comp-item"
    :style="{
      'width':style['width'] + 'px',
      'height':style['height'] + 'px',
      'top':style['top'] + 'px',
      'left':style['left'] + 'px',
      'border-color':style['borderColor'],
      'border-radius':style['borderRadius'] + '%',
      'font-size':style['fontSize'] + 'px',
      'opacity':style['opacity'],
      'zIndex':style['zIndex'],
      'background-color':style['backgroundColor'],
      'color':style['fontColor']
  }"
  >pie</div>
</template>

<script>
export default {
  data: () => {
    return {
      data: null,
      style: null
    };
  },
  props: ["currentComp"],
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.data = this.currentComp["data_source"];
      this.style = this.currentComp["style"];
    }
  }
};
</script>