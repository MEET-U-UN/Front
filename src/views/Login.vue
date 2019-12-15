<template>
  <div class="beach-bg">
    <div class="card card--centered">
      <div class="card__title">Inicia sesión con:</div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Modal from '../components/ui/Modal.vue';
import modalMixin from '../mixins/modalMixin';

@Component({})
export default class ComponentName extends modalMixin {
  mounted() {
    
  }
}
</script>

<style lang='scss' scoped>

  

</style>
