<template>
  <div class="friend-list">
    <div class="card">
      <div class="card__title">Lista de amigos</div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class Friends extends Vue {
  
}
</script>

<style lang='scss' scoped>

.friend-list {
  @include flexCentered;

}

</style>
