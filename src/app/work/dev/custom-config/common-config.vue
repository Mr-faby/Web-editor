<template>
  <div class="common-config-page">
    <div class="style-item">
      <div class="width-height label-input">
        <div class="width">
          <label>长</label>
          <input type="number" name="width" v-model.number="style['height']" />
        </div>
        <div class="height">
          <label>宽</label>
          <input type="number" name="width" v-model.number="style['width']" />
        </div>
      </div>
      <div class="x-y label-input">
        <div class="x">
          <label>X</label>
          <input type="number" name="x" v-model.number="style['left']" />
        </div>
        <div class="y">
          <label>Y</label>
          <input type="number" name="y" v-model.number="style['top']" />
        </div>
      </div>
    </div>
    <div class="style-item">
      <div class="style-tit">字体</div>
      <div class="label-input">
        <div class="font-size">
          <label>大小</label>
          <input type="number" name="size" v-model="style['fontSize']" />
        </div>
      </div>
      <div class="color-wrap">
        <div class="selected-color color" :style="{'background-color':style['fontColor']}"></div>
        <div
          class="color-item color"
          v-for="color in colors"
          :key="color"
          :style="{'background-color':color}"
          @click="style['fontColor'] = color"
        ></div>
      </div>
    </div>
    <div class="style-item">
      <div class="style-tit">边框</div>
      <div class="color-wrap">
        <div class="selected-color color" :style="{'background-color':style['borderColor']}"></div>
        <div
          class="color-item color"
          v-for="color in colors"
          :key="color"
          :style="{'background-color':color}"
          @click="style['borderColor'] = color"
        ></div>
      </div>
    </div>
    <div class="style-item">
      <div class="style-tit">背景</div>
      <div class="color-wrap">
        <div class="selected-color color" :style="{'background-color':style['backgroundColor']}"></div>
        <div
          class="color-item color"
          v-for="color in colors"
          :key="color"
          :style="{'background-color':color}"
          @click="style['backgroundColor'] = color"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      colors: [
        "#ffffff",
        "#e6e6e6",
        "#cdcdcd",
        "#707070",
        "#2c2c2c",
        "#d81e06",
        "#f4ea2a",
        "#1afa29",
        "#1296db",
        "#13227a"
      ]
    };
  },
  props: ["currentCompData"],
  computed:{
    style(){
      return this.currentCompData['style']
    }
  },
  updated(){
    console.log('updated')
  }
};
</script>

<style lang="scss" scoped>
.common-config-page {
  font-size: 12px;
  .style-item {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    .style-tit {
      margin: 6px 0;
      color: #aaa;
    }
    .label-input {
      display: flex;
      div {
        flex: 1;
        height: 20px;
        line-height: 20px;
        margin: 5px;
        display: flex;
        text-align: center;
        border: 1px solid #aaa;
        label {
          display: inline-block;
          background-color: #eee;
          width: 27px;
        }
        input {
          width: 40px;
          padding: 0;
          border: none;
          text-align: center;
        }
      }
    }
    .color-wrap {
      .color {
        display: inline-block;
        width: 24px;
        height: 24px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .selected-color {
        margin-right: 5px;
        border: 1px solid #e6e6e6;
      }
      .color-item {
        &:hover {
          border: 1px solid red;
        }
      }
    }
    .font-size {
      label {
        width: 50px !important;
      }
      input {
        flex: 1;
      }
    }
  }
}
</style>