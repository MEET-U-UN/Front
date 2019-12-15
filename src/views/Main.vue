<template>
  <div>
    <input type="text" class="search-bar" placeholder="Buscar plan...">
    <div class="general-container">
      <div class="titles">
        <div class="card__title">Mis creaciones</div>
        <div class="card__title">Invitaciones</div>
      </div>

      <div class="col-container">
        <div class="col">

          <div class="card__content">
            <div
              @click="editPlan" 
              class="card__content__title">El mejor plan</div>
            <div class="fl-row">
              <div class="user-pick">
                <img src="../assets/people/persona2.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona3.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona4.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona5.png" alt="">
              </div>
            </div>

            <div class="fl-row-a fl-data">
              <div class="card__label">Fecha</div>
              <div class="card__data">01/09/2019   4<i class="fa fa-star istar"></i></div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Preferencias del plan</div>
              <div class="card__data">Deporte</div>
              <div class="card__data">Turismo</div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Ubicación</div>
              <div class="card__data">suescalada.com 4<i class="fa fa-star istar"></i></div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Opciones plan</div>
              <div class="card__data">Montañismo 3<i class="fa fa-star istar"></i></div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Presupuesto</div>
              <div class="card__data">300.000 x persona 4<i class="fa fa-star istar"></i></div>
            </div>
          </div>

          <div class="card__content">
            <div class="card__content__title">Fiesta familiar</div>
            <div class="fl-row">
              <!-- <div class="user-pick">
                <img src="../assets/people/persona2.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona3.png" alt="">
              </div> -->
              <div class="user-pick">
                <img src="../assets/people/persona4.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona5.png" alt="">
              </div>
            </div>

            <div class="fl-row-a fl-data">
              <div class="card__label">Fecha</div>
              <div class="card__data">01/09/2019   4<i class="fa fa-star istar"></i></div>
            </div>

            <!-- <div class="fl-row-a fl-data">
              <div class="card__label">Preferencias del plan</div>
              <div class="card__data">Deporte</div>
              <div class="card__data">Turismo</div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Ubicación</div>
              <div class="card__data">suescalada.com 4<i class="fa fa-star istar"></i></div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Opciones plan</div>
              <div class="card__data">Montañismo 3<i class="fa fa-star istar"></i></div>
            </div>
            <div class="fl-row-a fl-data">
              <div class="card__label">Presupuesto</div>
              <div class="card__data">300.000 x persona 4<i class="fa fa-star istar"></i></div>
            </div> -->
          </div>

        </div>
        <div class="col">
          <div class="card__content">
            <div class="card__content__title">Almuerzo viernes</div>
            <div class="fl-row">
              <!-- <div class="user-pick">
                <img src="../assets/people/persona2.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona3.png" alt="">
              </div> -->
              <div class="user-pick">
                <img src="../assets/people/persona4.png" alt="">
              </div>
              <div class="user-pick">
                <img src="../assets/people/persona5.png" alt="">
              </div>
            </div>

            <div class="fl-row-a fl-data">
              <div class="card__label">Fecha</div>
              <div class="card__data">01/09/2019   4<i class="fa fa-star istar"></i></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Modal
      title="Nombre del plan"
      ref="modal"
    >
      <div class="modal-container--xl col-container">
        <div class="col--full col__container--scroll">
          <div class="fl-row">
            <div class="user-pick">
              <img src="../assets/people/persona2.png" alt="">
            </div>
            <div class="user-pick">
              <img src="../assets/people/persona3.png" alt="">
            </div>
            <div class="user-pick">
              <img src="../assets/people/persona4.png" alt="">
            </div>
            <div class="user-pick">
              <img src="../assets/people/persona5.png" alt="">
            </div>
          </div>

          <div class="fl-row-w">
            <div class="card__label">Fecha</div>
            <input
              v-model="date"
              @keypress.enter="addItem(date, 'date')"
              placeholder="Agrega una fecha" 
              type="text" class="input">
            <div
              v-for="date in dateList" 
              @click="removeItem(date, 'date')"
              :key="date"
              class="card__data">{{ date }}<i class="fa fa-star istar"></i></div>
          </div>
          <div class="fl-row-w">
            <div class="card__label">Preferencias del plan</div>
            <input
              v-model="plan"
              @keypress.enter="addItem(plan, 'plan')"
              placeholder="Agrega una plan" 
              type="text" class="input">
            <div
              v-for="plan in planList" 
              @click="removeItem(plan, 'plan')"
              :key="plan"
              class="card__data">{{ plan }}<i class="fa fa-star istar"></i></div>
          </div>

          <div class="col-container">
            <dir>
              <div class="card__label">Ubicaciones</div>
              <div
                @click="showMap = true" 
                class="btn btn--blue">Agregar</div>
              <div
                v-for="(coordinate, index) in coordinatesList" 
                @click="removeItem(coordinates, 'coordinates')"
                :key="index"
                class="card__data">{{ coordinate.lat | num }} | {{ coordinate.lng | num }}</div>
            </dir>
            <dir>
              <div class="card__label">Opciones plan</div>
              <input
                v-model="opt"
                @keypress.enter="addItem(opt, 'opt')"
                placeholder="Agrega una opción" 
                type="text" class="input">
              
              <div class="fl-col">
                <div
                  v-for="opt in optList" 
                  @click="removeItem(opt, 'opt')"
                  :key="opt"
                  class="card__data">{{ opt }}<i class="fa fa-star istar"></i></div>
              </div>
            </dir>
            <dir>
              <div class="card__label">Presupuesto</div>
              <input
                v-model.number="budget"
                @keypress.enter="addItem(budget, 'budget')"
                placeholder="Agrega un presupuesto" 
                type="number" class="input">
              <div
                v-for="budget in budgetList" 
                @click="removeItem(budget, 'budget')"
                :key="budget"
                class="card__data">{{ budget }}</div>

                <div class="divider"></div>
                <div class="card__label">Total: {{ totalBudget }}</div>
            </dir>
          </div>
        </div>

        <div class="comments">
          <div class="btn btn--blue">Concretar</div>
          <Comments></Comments>
        </div>
      </div>
    </Modal>

    <Map
      v-show="showMap"
      @close="showMap = false"
      @position="getPosition"></Map>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Modal from '../components/ui/Modal.vue';
import modalMixin from '../mixins/modalMixin';
import Comments from '../components/shared/Comments.vue';
import Map from '../components/shared/Map.vue';

@Component({
  components: {
    Modal,
    Comments,
    Map,
  },
  filters: {
    num(value: number) {
      const a = String(value);
      return a.substring(0, 3);
    }
  }
})
export default class Main extends modalMixin {
  planList: string[] = [];
  plan: string = "";
  dateList: string[] = [];
  date: string = "";
  optList: string[] = [];
  opt: string = "";
  budgetList: string[] = [];
  budget: string = "";

  coordinates = '';
  coordinatesList: Array<{ lat: number, lng: number }> = [];

  showMap = false;

  get totalBudget() {
    return +this.budgetList.reduce((acc: string, curr: string) => {
      return (+acc + +curr) + '';
    }, '0');
  }

  editPlan() {
    this.showModal();
  }

  getPosition(position: google.maps.LatLng) {
    const a = position.lat();
    const b = position.lng();

    this.coordinatesList.push({
      lat: a,
      lng: b,
    });
    this.showMap = false;
  }
}
</script>

<style lang='scss' scoped>

.titles,
.col-container {
  display: flex;
  justify-content: space-around;
}

.card__content__title {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
.col {
  width: 40%;
}

.col--full {
  flex: 1 1;
}

.col-container--scroll {
  overflow-y: auto;
}

.comments {
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
}

</style>
