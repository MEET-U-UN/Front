<template>
  <div class="friend-list">
    <input type="text" class="search-bar" placeholder="Buscar amigos...">
    <div class="list">
      <div class="card__title">Lista de amigos</div>

      <div
        v-for="person in people"
        :key="person.name" 
        class="friend">
        <div class="friend__photo">
          <img src="../assets/profile1.png" alt="" class="hlp__image-cover">
        </div>
        <div class="friend__data">
          {{ person.name }}
          <div class="friend__url">{{ person.user }}</div>
        </div>
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
export default class Friends extends Vue {
  people = [
    { name: 'Daniel', user: 'unal' },
    { name: 'Carlos', user: 'unal' },
    { name: 'Ivan', user: 'unal' },
    { name: 'Valentina', user: 'unal' },
    { name: 'Ana', user: 'unal' },
  ]
}
</script>

<style lang='scss' scoped>

.card__title {
  margin: 0 auto;
  width: 80%;
  margin: 0 auto;
  display: block;
}

.friend {
  display: flex;
  justify-content: space-between;
  margin: 10px 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 2px;
    background: rgba(black, .9);
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}

.list {
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  background-color: rgba($colorGreenLime, .8);
  max-height: 80vh;
  overflow-y: auto;
}

.friend__photo {
  @include circular(150px);
}

.friend__data {
  width: 200px;
  font-size: 28px;
}

.friend__url {
  color: $colorBlueAqua;
}

</style>
