<template>
  <div class="configuration">
    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="fa fa-user"></i>
      </div>
      Información personal      
    </div>

    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="fa fa-lock"></i>
      </div>
      Configuración  de Seguridad y privacidad
    </div>

    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="fa fa-bell"></i>
      </div>
      Notificaciones
    </div>

    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="fa fa-edit"></i>
      </div>
      Configuración de planes
    </div>

    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="fa fa-sliders-h"></i>
      </div>
      Personalizar
    </div>

    <div class="configuration__item">
      <div class="configuration__item__icon">
        <i class="far fa-question-circle"></i>
      </div>
      Información
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
export default class Configuration extends Vue {
  
}
</script>

<style lang='scss' scoped>

.configuration {
  margin: 30px auto;
  padding: 20px 0;
  max-width: 800px;
  border-radius: 20px;
  background-color: rgba($colorGreenLime, .8);
}

.configuration__item {
  @include flexVerticalCentered;
  padding: 20px 30px;
  cursor: pointer;
  transition: .3s;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;

  &:hover {
    color: white;

    i {
      color: white;
    }
  }
}

.configuration__item__icon {
  font-size: 30px;
  color: black;
  margin-right: 30px;

  i {
    transition: .3s;
  }
}


</style>
