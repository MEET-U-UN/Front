<template>
  <div class="configuration">
    <div class="title">Preguntas frecuentes</div>

    <div 
      @click="toggleHelp(0)"
      class="configuration__item">
      <div class="configuration__item__icon">
        <i
          :class="{'i--white': helpShow[0]}" 
          class="fa fa-caret-right"></i>
        ¿Cómo empiezo a crear un nuevo plan? 
      </div>
      <div
        :class="{'info--active': helpShow[0]}" 
        class="info">
En la pestaña mis planes, en la esquina inferior derecha dale al boton con un "+" en él. La aplicación te guiará para que completes los datos necesarios para crear un plan. Al final del proceso dale click a "Crear Plan" y ya podras verlo en tu pantalla principal.
      </div>
    </div>

    <div 
      @click="toggleHelp(1)"
      class="configuration__item">
      <div class="configuration__item__icon">
        <i
          :class="{'i--white': helpShow[1]}" 
          class="fa fa-caret-right"></i>
        ¿Cómo cambiar mis datos personales?
      </div>
      <div
        :class="{'info--active': helpShow[1]}" 
        class="info">
        Ve a la pestaña Perfil y cambia los datos a tu gusto. Una vez hallas finalizado, da click en Modificar Datos.
      </div>
    </div>

    <div 
      @click="toggleHelp(2)"
      class="configuration__item">
      <div class="configuration__item__icon">
        <i
          :class="{'i--white': helpShow[2]}" 
          class="fa fa-caret-right"></i>
        ¿Como agregar o eliminar a alguien de mi lista de amigos? 
      </div>
      <div
        :class="{'info--active': helpShow[2]}" 
        class="info">
En la pestaña Amigos selecciona dentro de la lista que aparece a la persona que deseas eliminar. Dale al botón de "Eliminar" y luego confirma tu decision.
      </div>
    </div>

    <div 
      @click="toggleHelp(3)"
      class="configuration__item">
      <div class="configuration__item__icon">
        <i
          :class="{'i--white': helpShow[3]}" 
          class="fa fa-caret-right"></i>
        ¿Como cambiar el fondo y colores de mi cuenta?
      </div>
      <div
        :class="{'info--active': helpShow[3]}" 
        class="info">
        Por ahora esto no se puede hacer. Pero a que el verde te gusta mucho no?
      </div>
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
export default class Help extends Vue {
  helpShow = [
    false,
    false,
    false,
    false,
  ]

  toggleHelp(idx: number) {
    this.$set(this.helpShow, idx, !this.helpShow[idx]);
  }
}
</script>

<style lang='scss' scoped>

.configuration {
  margin: 30px auto;
  padding: 20px;
  max-width: 800px;
  border-radius: 20px;
  background-color: rgba($colorGreenLime, .8);
}

.configuration__item {
  padding: 20px 30px;
  cursor: pointer;
  transition: .3s;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;

  &:hover {
    i {
      color: white;
    }
  }
}

.info {
  margin: 10px 0;
  max-height: 0;
  padding: 0 10px;
  overflow: hidden;
  transition: .3s;
  font-size: 25px;
  font-weight: normal;
}

.info--active {
  max-height: 500px;
}

.i--white {
  color: $colorBlueAqua;
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
