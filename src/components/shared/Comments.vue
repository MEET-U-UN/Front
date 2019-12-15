<template>
  <div class="chat__wrapper">
    <div class="card__title">Comentarios</div>
    <div class="chat">
      <div class="chat__item">
        <div class="chat__icon">
          <img src="../../assets/people/persona1.png" alt="" class="hlp__image-cover">
        </div>
        <div class="chat__bubble">adddddddddddddddddddddddddddddsdasd</div>
      </div>
    </div>
    <input type="text" class="message" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Comments extends Vue {}
</script>

<style lang='scss' scoped>

.chat__wrapper {
  height: 100%;
}

.chat {
  max-height: 50vh;
  overflow-y: auto;
}

.message {
  display: block;
  border-radius: 20px;
  width: 80%;
  margin: auto auto;
  height: 30px;
  background: rgba(white, 0.8);
  padding: 10px 30px;
  position: relative;
}

.chat__item {
  display: flex;
  align-items: center;
  margin: 0 8px;
}

.chat__icon {
  @include circular(50px);
  margin-right: 10px;
}

.chat__bubble {
  position: relative;
  min-width: 100px;
  padding: 0px;
  background: $colorGreenDeep;
  border-radius: 20px;
  margin: 20px;
  font-size: 19px;
  padding: 5px 10px;
  max-width: 200px;
  white-space: pre-wrap;
  word-wrap: break-word;

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 7px 7px 7px 0;
    border-color: transparent $colorGreenDeep;
    display: block;
    width: 0;
    z-index: 1;
    right: calc(100% - 2px);
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
