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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at aliquid distinctio officia laudantium maxime fugit velit, rerum quasi vel cum repellat necessitatibus possimus saepe est quod maiores sit! Provident, mollitia dolore! Ex iste dolores velit blanditiis veritatis, praesentium deserunt expedita sequi. Quas cum dolores doloribus explicabo possimus id beatae tempora? Perferendis aliquid et quibusdam saepe non obcaecati quisquam ratione veniam minima. Voluptatum mollitia corrupti repellat numquam enim eius ratione? Ullam quidem quos illo nemo quas cupiditate eius reiciendis voluptates error assumenda nulla, esse culpa nostrum suscipit magnam voluptatem laboriosam eligendi laudantium provident voluptas impedit ab fugit nihil? Ab, ad.
      </div>
    </div>

    <div 
      @click="toggleHelp(1)"
      class="configuration__item">
      <div class="configuration__item__icon">
        <i
          :class="{'i--white': helpShow[1]}" 
          class="fa fa-caret-right"></i>
        ¿Cómo cambiar mis preferencias personales?
      </div>
      <div
        :class="{'info--active': helpShow[1]}" 
        class="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at aliquid distinctio officia laudantium maxime fugit velit, rerum quasi vel cum repellat necessitatibus possimus saepe est quod maiores sit! Provident, mollitia dolore! Ex iste dolores velit blanditiis veritatis, praesentium deserunt expedita sequi. Quas cum dolores doloribus explicabo possimus id beatae tempora? Perferendis aliquid et quibusdam saepe non obcaecati quisquam ratione veniam minima. Voluptatum mollitia corrupti repellat numquam enim eius ratione? Ullam quidem quos illo nemo quas cupiditate eius reiciendis voluptates error assumenda nulla, esse culpa nostrum suscipit magnam voluptatem laboriosam eligendi laudantium provident voluptas impedit ab fugit nihil? Ab, ad.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at aliquid distinctio officia laudantium maxime fugit velit, rerum quasi vel cum repellat necessitatibus possimus saepe est quod maiores sit! Provident, mollitia dolore! Ex iste dolores velit blanditiis veritatis, praesentium deserunt expedita sequi. Quas cum dolores doloribus explicabo possimus id beatae tempora? Perferendis aliquid et quibusdam saepe non obcaecati quisquam ratione veniam minima. Voluptatum mollitia corrupti repellat numquam enim eius ratione? Ullam quidem quos illo nemo quas cupiditate eius reiciendis voluptates error assumenda nulla, esse culpa nostrum suscipit magnam voluptatem laboriosam eligendi laudantium provident voluptas impedit ab fugit nihil? Ab, ad.
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at aliquid distinctio officia laudantium maxime fugit velit, rerum quasi vel cum repellat necessitatibus possimus saepe est quod maiores sit! Provident, mollitia dolore! Ex iste dolores velit blanditiis veritatis, praesentium deserunt expedita sequi. Quas cum dolores doloribus explicabo possimus id beatae tempora? Perferendis aliquid et quibusdam saepe non obcaecati quisquam ratione veniam minima. Voluptatum mollitia corrupti repellat numquam enim eius ratione? Ullam quidem quos illo nemo quas cupiditate eius reiciendis voluptates error assumenda nulla, esse culpa nostrum suscipit magnam voluptatem laboriosam eligendi laudantium provident voluptas impedit ab fugit nihil? Ab, ad.
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
