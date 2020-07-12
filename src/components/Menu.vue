<template>
  <div id="teste">
    <div class="navbar navbar-expand-sm" id="main_menu">
      <a href="#" class="navbar-brand" id="logotipo" style="margin-left: 3%;">
        <img src="../assets/images/logo.png" alt style="width: 25%;object-fit: contain;" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#meu_links"
        id="btn_collapse"
      >
        <span>
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <div id="meu_links" class="collapse navbar-collapse flex-row-reverse">
        <ul class="navbar-nav" id="header-menu">
          <li class="nav-item">
            <a href="#slide-show" @click="scrollTo('#slide-show')" class="nav-link activo">Início</a>
          </li>
          <li class="nav-item">
            <a href="#about-us" @click="scrollTo('#about-us')" class="nav-link">Sobre nós</a>
          </li>
          <li class="nav-item">
            <a href="#servicos" @click="scrollTo('#servicos')" class="nav-link">Serviços</a>
          </li>
          <li class="nav-item">
            <a href="#parceiros" @click="scrollTo('#parceiros')" class="nav-link">Parceiros</a>
          </li>
          <li class="nav-item">
            <a href="#contactos" @click="scrollTo('#contactos')" class="nav-link">Contactos</a>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/servicos" class="nav-link">
              <i class="fas fa-sign-in-alt"></i> Login
            </router-link>
          </li>-->
        </ul>
      </div>
    </div>

    <router-view name="aux"></router-view>

    <footer id="contactos" class="container-fluid text-white pt-3">
      <h4 class="text-center text-uppercase">Contactos</h4>
      <div class="row">
        <div class="col-md-3">
          <ul>
            <li>Servicos</li>
            <li>&#10095; Consultoria</li>
            <li>&#10095; Análise de Risco</li>
            <li>&#10095; Gestão da carteira de Seguro</li>
            <li>&#10095; Renovação do Seguro</li>
            <li>&#10095; Defensor</li>
            <li>&#10095; Organização</li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul>
            <li>Contactos</li>
            <li>
              <i class="fas fa-phone" style="color: #dd4a40"></i>
              991 139 311
            </li>
            <li>
              <i class="fas fa-phone" style="color: #dd4a40"></i>
              928 724 627
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul>
            <li>Onde estamos</li>
            <li>
              <i class="fas fa-map-marker-alt" style="color: #dd4a40"></i>
              Centralidade do Kilamba Edifício K2
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul>
            <li>Midias Sociais</li>
            <li>
              <a href="https://www.facebook.com/cjaseguro/">
                <i class="fab fa-facebook"></i> CJA-Mediação de Seguros
              </a>
            </li>
            <!-- <li>
              <a href="#">
                <i class="fab fa-instagram"></i> _CSseguros
              </a>
            </li>-->
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  methods: {
    scrollTo(sessionId) {
      const $root = $("html, body");

      $root.animate(
        {
          scrollTop: $(sessionId).offset().top
        },
        500,
        function() {
          window.location.hash = sessionId;
        }
      );
      return false;
    },
    ativar: function() {
      var menuItemAtivo = document.querySelectorALL("nav-item");
      for (var i = 0; i < menuItemAtivo.length; i++) {
        menuItemAtivo[i].remove("activo");
      }
      menuItemAtivo.classList.add("activo");
    }
  }
};
</script>
<style scoped>
#header-menu {
  margin-right: 5%;
}

@font-face {
  font-family: "ubuntu";
  src: url("../assets/fonts/Ubuntu-Light.ttf");
}
#main_menu {
  background: #fff;
  border-bottom: 1px solid #8ec03b;
  z-index: 100;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;
  height: 12%;
}
.navbar-brand {
  margin-left: 5%;
}
.navbar-nav {
  margin-left: 12%;
}
#btn_collapse {
  border: 1px solid #8ec03b;
  background: #fff;
  color: #8ec03b;
}
.nav-item {
  margin-left: 0.5%;
}
.nav-link {
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  width: 135px;
  text-align: center;
  font-family: ubuntu;
}

.activo {
  background-color: #8ec03b;
  color: #fff !important;
  border-radius: 20px;
}
.nav-link:hover {
  color: #8ec03b;
}
footer {
  background: #2b2f36;
}
footer > .row {
  padding: 1%;
}
footer ul {
  list-style-type: none;
}
footer > ul > li > a {
  color: #fff;
}
footer ul li a:hover {
  text-decoration: none;
  color: #8ec03b;
}
/**Media query */
@media only screen and (max-width: 768px) {
  #main_menu {
    position: relative;
    width: 100%;
  }
  #logotipo {
  }
  #main_menu .navbar-brand {
    margin-left: 0;
    width: 80%;
    /* border: 1px solid red; */
    /* display: none; */
  }
  .navbar-nav {
    margin-left: 0;
  }
  .nav-item {
    padding: 1%;
  }
  .nav-link {
    font-size: 15px;
    width: 100px;
    text-align: center;
    margin: auto;
  }

  #btn_collapse {
    position: relative;
    /* left: 87%; */
    width: 10%;
  }
}
</style>
