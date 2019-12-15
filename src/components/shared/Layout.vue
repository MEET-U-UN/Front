<template>
  <div class="layout">
    <Modal
      title="Nombre del plan"
      @close="closeModal"
      ref="modal"
    >
      <div class="modal-container">
        <div class="fl-row-a">
          <div class="card__label">Añadir integrantes</div>
          <input
            v-model="name"
            @keypress.enter="addMember" 
            placeholder="Escribe un nombre y presiona [ENTER]" type="text" class="input">
          <div
            v-for="member in memberList"
            :key="member" 
            class="card__data">{{ member }}</div>
        </div>
        <div class="fl-row-a">
          <div class="card__label">Preferencias del plan</div>
          <input
            v-model="plan"
            @keypress.enter="addPlan" 
            placeholder="Escribe un plan y presiona [ENTER]" type="text" class="input">
          <div
            v-for="plan in planList"
            :key="plan" 
            class="card__data">{{ plan }}</div>
        </div>

        <div class="col-container">
          <div class="col">
            <div class="fl-row-a">
              <div class="card__label">Actividad inicial</div>
              <input
                v-model="initialActivity"
                @keypress.enter="addPlan" 
                placeholder="Escribe algo..." type="text" class="input">
            </div>
            <div class="fl-row-a">
              <div class="card__label">Fecha</div>
              <input
                v-model="date"
                @keypress.enter="addPlan" 
                placeholder="Escribe algo..." type="text" class="input">
            </div>
            <div class="fl-row-a">
              <div class="card__label">Presupuesto</div>
              <input
                v-model="budget"
                @keypress.enter="addPlan" 
                placeholder="Escribe algo..." type="text" class="input">
            </div>
          </div>
          <div class="col">
            <div class="card__label">Selecciona una ubicación</div>
          </div>
        </div>

        <div class="btn__container--horizontal">
          <div class="btn btn--blue">Crear nuevo plan</div>
        </div>        
      </div>
    </Modal>
    <div
      @click="create"
      class="create">
      <i class="fa fa-plus"></i>
    </div>
    <Menu></Menu>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Menu from './Menu.vue';
import Modal from '../ui/Modal.vue';
import modalMixin from '../../mixins/modalMixin';

@Component({
  components: {
    Menu,
    Modal,
  },
})
export default class Layout extends modalMixin {
  memberList: string[] = [];
  planList: string[] = [];

  name:            string = '';
  plan:            string = '';
  initialActivity: string = '';
  date:            string = '';
  budget:          string = '';

  create() {
    this.showModal();
  }

  addMember() {
    this.memberList.push(this.name);
    this.name = '';
  }

  addPlan() {
    this.planList.push(this.plan);
    this.plan = '';
  }

  closeModal() {
    this.hideModal();
    this.name = this.plan = this.initialActivity = this.date = this.budget = '';
    this.memberList = [];
    this.planList = [];
  }
}
</script>

<style lang='scss' scoped>

.layout {
  display: flex;
}

.view {
  background: url('../../assets/themenu.jpg');
  background-size: cover;
  flex: 1 0;
  height: 100vh;
  overflow-y: auto;
}

.create {
  @include circular(60px);
  @include flexCentered;
  position: fixed;
  background: $colorBlueAqua;
  bottom: 30px;
  right: 30px;
  color: white;
  font-size: 35px;
  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: brightness(110%);
  }
}

</style>
