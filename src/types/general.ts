import Vue from 'vue';

export interface Modal extends Vue {
  showModal(): void;
  hideModal(): void;
}

