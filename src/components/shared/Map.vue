<template>
  <transition name="fade">
    <div class="map-container">
      <div class="map-modal">
        <div class="map-inner">
          <input
            v-model="address" 
            @keypress.enter="searchAddress"
            type="text" class="search-bar" placeholder="Busca un lugar...">
          <div id="map" ref="map"></div>
          <div
            @click="$emit('close')" 
            class="close">
            <i class="fa fa-close"></i>
          </div>
          <div
            @click="saveLocation" 
            class="btn btn--blue btnalt">Guardar</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import 'googlemaps';
import { BlueEssence } from '../../types/map-style';

@Component({})
export default class Map extends Vue {
  markerList: google.maps.Marker[] = [];
  marker!: google.maps.Marker;
  googleMap!: google.maps.Map;
  address = '';
  center = {
    lat: 4.6376440857167385,
    lng: -74.08390656005729
  };

  mounted() {
    const API_KEY = "AIzaSyBfTyU35iqxopUoPT7CLY5dtiuHi93R5FY";
    const element = this.$refs.map as HTMLElement;

    // @ts-ignore
    this.googleMap = new google.maps.Map(element, {
      center: this.center,
      zoom: 16,
      styles: BlueEssence,
      draggable: true,
    });

    this.marker = new google.maps.Marker({
      position: this.center,
      map: this.googleMap,
      title: 'Default',
      draggable: true,
    });

    this.marker.addListener('dragend', (event: google.maps.MouseEvent) => {
      this.marker.setPosition(event.latLng);
    })
  }

  searchAddress() {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.address, componentRestrictions: {country: 'co'} }, (result: Array<google.maps.GeocoderResult>, status: google.maps.GeocoderStatus) => {
      if (status === 'OK') {
        this.address = '';

        const pos = {
          lat: result[0].geometry.location.lat(),
          lng: result[0].geometry.location.lng(),
        }

        this.googleMap.setCenter(pos);
        this.marker.setPosition(pos);
      }
    })
  }

  saveLocation() {
    this.$emit('position', this.marker.getPosition());
  }
}
</script>

<style lang='scss' scoped>

.map-container {
  position: fixed;
  left: 0;
  top: 0;
  @extend %fullScreen;
  z-index: 11;
  background: rgba(black, .8);
}

.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  
}

.map-modal {
  @extend %absoluteCentered;
  @include squared(60vh);
  padding: 30px;
  border-radius: 20px;
  background-color: $colorBlueAqua;
  z-index: 12;
}

.map-inner {
  @include squared(100%);
  position: relative;
}

.search-bar {
  height: 30px;
  border-radius: 30px;
  @extend %horizontalCentered;
  @extend %btnShadow;
  top: 30px;
  z-index: 13;
  background: white;
  padding: 5px 20px;
  font-size: 20px;
}

.btnalt {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

#map {
  @include squared(100%);
}

// Modal transitions
.fade-enter-active, 
.fade-leave-active {
  transition: .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
