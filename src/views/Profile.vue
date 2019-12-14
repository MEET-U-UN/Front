<template>
  <div class="profile">
    <div class="photo-profile">
      <img src="../assets/people/persona1.png" alt="" class="hlp__image-cover">
    </div>

    <div class="card card__content__title">
      <div class="fl-row-a">
        <div class="card__label">Nombre</div>
        <input
          v-model="profile.name" 
          type="text" class="input">
      </div>
      <div class="fl-row-a">
        <div class="card__label">Fecha de nacimiento</div>
        <input
          v-model="profile.birthdate" 
          type="text" class="input">
      </div>
      <div class="fl-row-a">
        <div class="card__label">Correo</div>
        <input
          v-model="profile.email" 
          type="email" class="input">
      </div>
      <div class="fl-row-a">
        <div class="card__label">Usuario</div>
        <input
          v-model="profile.username" 
          type="text" class="input">
      </div>
      <div class="fl-row-a">
        <div class="card__label">Gustos</div>
        <input
          v-model="newinterest" 
          @keypress.enter="addItem(newinterest, 'newinterest')"
          type="text" class="input">
      </div>
      <div class="fl-row-a">
        <div
          @click="removeItem(interest, 'newinterest')"
          v-for="(interest, idx) in newinterestList"
          :key="idx"
          class="card__data">
            {{ interest }}
        </div>
      </div>

      <div class="btn__container--horizontal">
        <div class="btn btn--blue">Eliminar cuenta</div>
        <div class="btn btn--blue">Modificar datos</div>
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
import modalMixin from '../mixins/modalMixin';

@Component({})
export default class Profile extends modalMixin {
  profile = {
    name: "",
    birthdate: "",
    email: "",
    username: "",
    interests: "",
  };

  newinterest: string = '';
  newinterestList: string[] = [];
}
</script>

<style lang='scss' scoped>

.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.photo-profile {
  @include circular(300px);
  position: relative;
  background: white;
  padding: 5px;
}

.btn__container--horizontal {
  > div {
    margin: 0 10px;
  }
}

</style>
