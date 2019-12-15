<template>
  <div class="chat__wrapper">
    <div class="card__title">Comentarios</div>
    <div
      ref="chat" 
      class="chat">
      <div class="chat__item">
        <div class="chat__icon">
          <img src="../../assets/people/persona1.png" alt="" class="hlp__image-cover">
        </div>
        <div class="chat__bubble">adddddddddddddddddddddddddddddsdasd</div>
      </div>
      <div class="chat__item">
        <div class="chat__icon">
          <img src="../../assets/people/persona1.png" alt="" class="hlp__image-cover">
        </div>
        <div class="chat__bubble">adddddddddddddddddddddddddddddsdasd</div>
      </div>

      <!-- User -->
      <div
        v-for="(message, idx) in messageList"
        :key="idx" 
        class="chat__item chat__item--right">
        <div class="chat__bubble chat__bubble--right">{{ message }}</div>
      </div>
    </div>
    <input
      v-model="message"
      @keypress.enter="sendMessage(message, 'message', true)" 
      type="text" class="message" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import modalMixin from '../../mixins/modalMixin';

@Component({})
export default class Comments extends modalMixin {
  messageList: string[] = [];
  message: string = '';

  sendMessage(message: string, model: string, repeat = false) {
    if (message === '') return;
    
    const chat = this.$refs.chat as HTMLElement;
    this.addItem(message, model, true);
    this.$nextTick(() => {
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    });
  }
}
</script>

<style lang='scss' scoped>

.chat__wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  flex: 1 0;
}

.chat {
  flex: 1 0;
  max-height: 40vh;
  overflow-y: auto;
}

.message {
  display: block;
  border-radius: 20px;
  width: 80%;
  height: 30px;
  margin: 0 auto;
  background: rgba(white, 0.8);
  padding: 10px 30px;
  position: relative;
}

.chat__item {
  display: flex;
  align-items: center;
  margin: 0 5px;
}

.chat__item--right {
  justify-content: flex-end;
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
  margin: 15px;
  font-size: 19px;
  padding: 5px 10px;
  max-width: 200px;
  white-space: pre-wrap;
  word-wrap: break-word;

  &::after {
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

.chat__bubble--right {
  &::after {
    left: calc(100% - 2px);
    border-width: 7px 0 7px 7px;
  }
}

</style>
