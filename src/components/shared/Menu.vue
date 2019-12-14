<template>
  <div class="menu-bar">
    <div class="user-profile">
      <img src="../../assets/people/persona1.png" alt="" class="hlp__image-cover">
    </div>
    <router-link
      tag="div"
      class="menu__item"
      active-class="menu__item--active"
      :to="{ name: 'main' }"
    >
    <div class="menu__item__icon">
      <i class="fa fa-columns"></i>
    </div>
    Mis planes
    </router-link>
    <router-link
      tag="div"
      class="menu__item"
      active-class="menu__item--active"
      :to="{ name: 'profile' }"
    >
    <div class="menu__item__icon">
      <i class="fa fa-user"></i>
    </div>
    Mi perfil
    </router-link>
    <!-- <router-link
      tag="div"
      class="menu__item"
      active-class="menu__item--active"
      :to="{ name: 'profile' }"
    >
    <div class="menu__item__icon">
      <i class="far fa-calendar-alt"></i>
    </div>
    Programación
    </router-link> -->
    <router-link
      tag="div"
      class="menu__item"
      active-class="menu__item--active"
      :to="{ name: 'friends' }"
    >
    <div class="menu__item__icon">
      <i class="fa fa-user-friends"></i>
    </div>
    Amigos
    </router-link>

    <div class="divider"></div>

    <router-link
      tag="div"
      class="menu__item"
      active-class="menu__item--active"
      :to="{ name: 'configuration' }"
    >
    <div class="menu__item__icon">
      <i class="fa fa-tools"></i>
    </div>
    Configuración
    </router-link>
    <router-link
      tag="div"
      class="menu__item"
      :to="{ name: 'help' }"
    >
    <div class="menu__item__icon">
      <i class="fa fa-question"></i>
    </div>
    Ayuda
    </router-link>

  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({})
export default class Menu extends Vue {
  
}
</script>

<style lang='scss' scoped>

.menu-bar {
  width: 350px;
  height: 100vh;
  background: $colorGreenLime;
}

.user-profile {
  @include circular(180px);
  margin: 50px auto 30px;
}

.menu__item {
  @include flexVerticalCentered;
  padding: 20px 30px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: darken($color: $colorGreenLime, $amount: 15%);
  }
}

.menu__item--active {
  background: darken($color: $colorGreenLime, $amount: 6%);
}

.menu__item__icon {
  font-size: 20px;
  color: black;
  margin-right: 15px;
}

</style>
