import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { Modal } from '../types/general';

@Component({})
export default class modalMixin extends Vue {
  refModal!: Modal;


  mounted() {
    this.refModal = this.$refs.modal as Modal;
  }

  showModal() {
    this.refModal.showModal();
  }

  hideModal() {
    this.refModal.hideModal();
  }

  addItem(item: any, model: string, repeat = false) {
    if ((this as any)[`${model}List`].includes(item) && !repeat) return;

    (this as any)[`${model}List`].push(item);
    (this as any)[model] = '';
  }

  removeItem(item: any, model: string) {
    const array  = (this as any)[`${model}List`] as any[];
    array.splice(array.indexOf(item), 1);
  }
}