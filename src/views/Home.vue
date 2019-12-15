<template>
  <div class="beach-bg">
    <div @click="openModal('login')" class="btn btn--blue left-btn" ref="lbtn">Iniciar sesión</div>
    <div class="circle" ref="circle">
      <div class="circle__inner">
        <div class="hands">
          <img src="../assets/hands.png" alt />
        </div>
        <div class="title logo">MeetU</div>
        <div class="main-text">¡Sal por una nueva aventura!</div>
        <div class="help">¿Necesitas ayuda?</div>
      </div>
    </div>
    <div @click="openModal('register')" class="btn btn--blue right-btn" ref="rbtn">Registrarse</div>

    <modal @close="showLogin = false; showRegister = false;" ref="modal">
      <div>
        <div v-show="showLogin" class="login">
          <div class="title">Iniciar sesión con</div>
          <div class="icons">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
          </div>
          <div class="card__line"></div>
          <div class="label">Usuario</div>
          <input type="text" class="input" v-model="login.username" />
          <div class="label">Contraseña</div>
          <input type="password" class="input" v-model="login.password" />
          <div style="text-align: right" class="label text--link">Olvidé mi contraseña</div>
          <div class="btn__container--vertical">
            <div class="btn btn--blue">Iniciar sesión</div>
            <div @click="openModal('register')" class="btn btn--blue">Regístrate</div>
          </div>
        </div>

        <div v-show="showRegister" class="login">
          <div class="title">Registro</div>
          <div class="form form--col2">
            <div>
              <div class="label">Nombres</div>
              <input type="text" class="input" v-model="register.name" />
            </div>
            <div>
              <div class="label">Apellidos</div>
              <input type="text" class="input" v-model="register.surname" />
            </div>
            <div>
              <div class="label">Fecha de Nacimiento</div>
              <input type="text" class="input" v-model="register.surname" />
            </div>
            <div>
              <div class="label">Correo</div>
              <input type="email" class="input" v-model="register.surname" />
            </div>
            <div>
              <div class="label">Usuario</div>
              <input type="text" class="input" v-model="register.surname" />
            </div>
            <div>
              <div class="label">Contraseña</div>
              <input type="password" class="input" v-model="register.surname" />
            </div>
          </div>

          <div class="btn__container--vertical">
            <div
               @click="showLogin = true; showRegister = false"
              class="btn btn--blue">Iniciar sesión</div>
            <div
              @click="showLogin = false; showRegister = true"
              class="btn btn--blue">Regístrate</div>
          </div>
          <div class="icons">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { TweenMax } from "gsap";
import modalMixin from "../mixins/modalMixin";

@Component({})
export default class HomePage extends modalMixin {
  showLogin = false;
  showRegister = false;

  register = {
    name: "",
    surname: "",
    birthdate: "",
    email: "",
    username: "",
    password: ""
  };

  login = {
    username: "",
    password: ""
  };


  mounted() {
    this.animateParts();
  }

  openModal(mode: string) {
    if (mode == "login") {
      this.showLogin = true;
      this.showRegister = false;
    } else {
      this.showLogin = false;
      this.showRegister = true;
    }

    this.showModal();
  }

  animateParts() {
    const circle = this.$refs.circle as HTMLElement;

    TweenMax.from(circle, 0.8, {
      top: "80%",
      opacity: 0
    });

    const lbtn = this.$refs.lbtn as HTMLElement;
    const rbtn = this.$refs.rbtn as HTMLElement;

    TweenMax.from(lbtn, 0.9, {
      left: "-100%",
      opacity: 0
    });

    TweenMax.from(rbtn, 0.9, {
      right: "-100%",
      opacity: 0
    });
  }
}
</script>

<style lang='scss' scoped>
.circle {
  @include circular(35vw);
  @extend %absoluteCentered;
  @extend %btnShadow;
  top: 40%;
  background: $colorGreenLime;
  text-align: center;
}

.circle__inner {
  @include squared(100%);
  position: relative;
}

.left-btn,
.right-btn {
  @extend %verticalCentered;
  @extend %btnInnerShadow;
  top: 40%;
  font-size: 30px;
  border-radius: 15px;
  padding: 1.5vw 3vw;
  border-radius: $borderRadius;
}

.main-text {
  @extend %horizontalCentered;
  position: absolute;
  bottom: 5vw;
  font-size: 1.8vw;
}

$distance: 5vw;
.left-btn {
  left: $distance;
}

.right-btn {
  right: $distance;
}

.hands {
  @include squared(13vw);
  @extend %horizontalCentered;
  top: 5vw;
  @include responsiveImage;
}

.help {
  @extend %horizontalCentered;
  text-shadow: 1px 1px 3px black;
  color: white;
  top: calc(100% + 2.5vw);
  background: rgba(black, 0.25);
  border-radius: 30px;
  padding: 5px 20px;
  white-space: nowrap;
}

.logo {
  @extend %horizontalCentered;
  top: 51%;
  font-size: 6.3vw;
}

// * Login
.login {
  min-width: 500px;
}

.icons {
  width: 70%;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  font-size: 50px;

  i {
    @include circular(70px);
    @include flexCentered;
    @extend %btnInnerShadow;
    background: white;
  }
}
</style>