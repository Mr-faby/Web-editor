<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <div class="title">
              <slot name="header">default header</slot>
            </div>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <div class="btn-wrap">
              <button class="close" @click="$emit('close')">取消</button>
              <button class="submit" @click="$emit('submit')">确定</button>
            </div>
            <!-- <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('submit')">OK</button>
            </slot>-->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  //   vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  margin-top: 100px;
  padding: 20px 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header .title {
  margin-top: 0;
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  .btn-wrap {
    padding-top: 10px;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
    text-align: right;
    button {
      margin-left: 5px;
      &.close {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.65);
        &:hover {
          color: #40a9ff;
          border-color: #40a9ff;
        }
      }
      &.submit {
        &:hover {
          background-color: #40a9ff;
          border-color: #40a9ff;
        }
      }
    }
  }
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>