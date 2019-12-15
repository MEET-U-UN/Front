<template>
  <transition name="fade">
    <div class="modal__wrapper" v-show="isActive" ref="wrapper">
      <div class="card card--centered">
        <div class="card__inner">
          <div
            @click="hideModal" 
            class="close-icon"><i class="fas fa-times"></i></div>
          <div class="card__title">{{ title }}</div>
            {{ message }}
            <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class Modal extends Vue {
  @Prop({
    default: ''
  })
  title!: string;
  @Prop({
    default: ''
  })
  message!: string;
  @Prop({
    default: true
  })
  canClose!: boolean;

  isActive = false;

  showModal() {
    this.isActive = true;
    this.$emit('open');
  }

  hideModal() {
    this.isActive = false;
    this.$emit('close');
  }
}
</script>

<style lang='scss' scoped>

.modal__wrapper {
  @extend %fullScreen;
  position: fixed;
  background: rgba(black, 0.3);
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
}

.close-icon {
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;

  i {
    color: white;
    font-size: 30px;
  }
}

.card__inner {
  @include squared(100%);
  max-height: 80vh;
  position: relative;
  padding: 30px;
}

// Modal transitions
.fade-enter-active, 
.fade-leave-active {
  transition: .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
