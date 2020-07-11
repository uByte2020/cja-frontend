<template>
  <div id="home">
    <div class="carousel slide" id="slide-show" data-ride="carousel">
      <ul class="carousel-indicators">
        <li data-target="#slide-show" data-slide-to="0" class="active"></li>
        <li data-target="#slide-show" data-slide-to="1"></li>
      </ul>
      <div class="carousel-inner crsl-inner">
        <div class="carousel-item crsl-item">
          <img src="../assets/images/slide-1.jpg" alt />
          <div class="carousel-caption d-none d-md-block crsl-caption-right">
            <h5>What is Lorem Ipsum</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div class="carousel-item active crsl-item">
          <img src="../assets/images/slide-2.jpg" alt />
          <div class="carousel-caption d-none d-md-block crsl-caption-left">
            <h5>What is Lorem Ipsum</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <a href="#slide-show" class="carousel-control-prev" data-slide="prev">
        <span>
          <i class="fas fa-chevron-left"></i>
        </span>
      </a>
      <a href="#slide-show" class="carousel-control-next" data-slide="next">
        <span>
          <i class="fas fa-chevron-right"></i>
        </span>
      </a>
    </div>
    <div id="tipos-seguros">
      <div class="row text-white">
        <div class="col-md-3 col-sm-3">
          <span>
            <i class="fas fa-heartbeat"></i>
          </span>
          <br />
          <p class="lead">
            Cuidamos da sua saúde, lhe apresentando os melhores planos e as suas
            vantagens
          </p>
        </div>
        <div class="col-md-3 col-sm-3">
          <span>
            <i class="fas fa-car-crash"></i>
          </span>
          <br />
          <p class="lead">
            Cuidamos do seu automóvel com as diversas modalidades de seguro
            automóvel
          </p>
        </div>
        <div class="col-md-3 col-sm-3">
          <span>
            <i class="fas fa-people-carry"></i>
          </span>
          <p class="lead">
            Ajudamos a conseguir a melhor assistência caso aconteça algum
            acidente no desenvolver da sua ativadade laboral
          </p>
        </div>
        <div class="col-md-3 col-sm-3">
          <span>
            <i class="fas fa-building"></i>
          </span>
          <p class="lead">
            Ajudamos a sua Empresa a encontar o melhor seguro e que se adapte a
            sua realidade para garantir o ciclo de funcionamento de seus
            equipamentos e a sua produção
          </p>
        </div>
      </div>
    </div>
    <div id="about-us" class="container-fluid mt-3 mb-3">
      <div class="row">
        <div class="col-md-7 col-sm-7" id="desc-us">
          <div class="d-flex flex-column justify-content-center" style="height: 100%;">
            <h4>Sobre nós</h4>
            <!-- <hr /> -->
            <p class="lead">
              Somos uma empresa de capital privado e inteiramente angolano,
              fundada em 2018, com profissionais competente, altamente
              qualificados, pronto e disposto para lhe proporcionar o melhor que o
              nosso mercado segurador oferece.
            </p>
          </div>

          <!--<router-link class="btn" id="btn-vermais" to="/servicos"><i class="fas fa-plus-circle"></i> Informacao</router-link>     -->
        </div>
        <div class="col-md-5 col-sm-5" style="padding:0">
          <img src="../assets/images/2.jpg" alt />
        </div>
      </div>
    </div>
    <!-- <hr /> -->
    <div id="servicos" class="container-fluid p-5 mb-3">
      <h4 class="text-center">Serviços</h4>
      <div>
        <div class="row text-white text-center">
          <div class="col-md-3 col-sm-3">
            <span>
              <i class="fas fa-heartbeat"></i>
            </span>
            <br />
            <p class="lead">Consultoria</p>
          </div>
          <div class="col-md-3 col-sm-3">
            <span>
              <i class="fas fa-car-crash"></i>
            </span>
            <br />
            <p class="lead">Análise de Risco</p>
          </div>
          <div class="col-md-3 col-sm-3">
            <span>
              <i class="fas fa-people-carry"></i>
            </span>
            <p class="lead">Gestão da carteira de Seguro</p>
          </div>
          <div class="col-md-3 col-sm-3">
            <span>
              <i class="fas fa-building"></i>
            </span>
            <p class="lead">Renovação do Seguro</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <hr /> -->
    <div id="parceiros" class="container-fluid p-3">
      <h4 style="text-align:center">Parceiros</h4>
      <div>
        <div class="row">
          <div class="col-md-3 col-sm-3 parceiros-card">
            <img src="../assets/images/nossa.png" alt />
          </div>
          <div class="col-md-3 col-sm-3 parceiros-card">
            <img src="../assets/images/bic.jpg" alt />
          </div>
          <div class="col-md-3 col-sm-3 parceiros-card">
            <img src="../assets/images/gobal.png" alt />
          </div>
          <div class="col-md-3 col-sm-3 parceiros-card">
            <img src="../assets/images/saham.jpg" alt />
          </div>
          <div class="col-md-3 col-sm-3 parceiros-card">
            <img src="../assets/images/fidelidade.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parceiros-card {
  height: 200px;
}

#servicos {
  background: #2b2f36;
}
#servicos span {
  font-size: 80px;
  color: #8ec03b;
}
#servicos p {
  font-weight: 400; /* margin-left: 110px; */
}
.parceiros-card img {
  height: 100% !important;
  object-fit: contain !important;
  /* filter: contrast(0.7); */
  width: 100% !important;
}

.crsl-caption-left {
  left: 50% !important;
}

.crsl-caption-right {
  right: 50% !important;
}

.crsl-inner {
  height: 550px !important;
}
.crsl-item {
  height: 100% !important;
}

.crsl-item img {
  height: 100% !important;
  object-fit: cover !important;
  filter: contrast(0.7);
  width: 100% !important;
}

#home {
  padding: 0;
  border: 2px solid transparent;
  z-index: -1;
}
#slide-show {
  margin-top: 5.3%;
}
#tipos-seguros {
  background-color: #8ec03b;
  padding: 3%;
}
#tipos-seguros span {
  font-size: 80px;
  margin-left: 110px;
}

#tipos-seguros p {
  text-align: center;
}
#about-us img {
  padding: 0;
  margin: 0;
  width: 100%;
  /* height: 500px; */
}
#about-us p {
  /* padding: 2% 2% 0 2%; */
  text-align: justify;
}
#desc-us {
  padding: 2% 2% 0 2%;
}
h4 {
  text-transform: uppercase;
  color: #8ec03b;
  font-family: ubuntu;
  font-weight: bold;
}
#parceiros {
  padding: 1% 0.5% 1% 0;
}
#parceiros img {
  width: 100%;
}
@media only screen and (max-width: 768px) {
  #slide-show {
    margin-top: 0;
    width: 100%;
  }
  #tipos-seguros {
    background-color: #8ec03b;
    padding: 3%;
  }
  #tipos-seguros span {
    font-size: 70px;
    margin-left: 118px;
  }
  #tipos-seguros p {
    text-align: center;
    font-size: 16px;
  }
  #about-us p,
  #about-us ul li {
    font-size: 16px;
  }
  #desc-us {
    padding: 2% 2% 0 2%;
  }
  h4 {
    text-transform: uppercase;
    color: #8ec03b;
    font-family: ubuntu;
  }
  #parceiros {
    padding: 1% 0.5% 1% 0;
  }
  #parceiros img {
    width: 100%;
  }
}
</style>
