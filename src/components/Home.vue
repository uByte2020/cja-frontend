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
          <div class="carousel-caption d-md-block crsl-caption crsl-caption-left">
            <h5>Mediação de Seguros</h5>
            <p>Proporcionar às empresas os melhores seguros aos riscos que estão exposto</p>
          </div>
        </div>
        <div class="carousel-item active crsl-item">
          <img src="../assets/images/slide-2.jpg" alt />
          <div class="carousel-caption d-md-block crsl-caption crsl-caption-right">
            <h5>Consultoria</h5>
            <p>
              Elevamos a importância estratégica da equipe laboral e os capacitamos
              para melhor servir
            </p>
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
      <div class="row text-white text-center">
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
      <h4 class="text-center text-white">Serviços</h4>
      <div>
        <div class="row justify-content-center pl-3 pr-3">
          <div
            class="col-md-4 col-sm-4 mt-4 mr-0 ml-0"
            v-for="service in services"
            :key="service.id"
          >
            <div class="card crd text-center">
              <img class="card-img-top crd-img-top" :src="service.img" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{{service.title}}</h5>
                <p class="card-text text-justify block-with-text">{{service.description}}</p>
                <button
                  type="button"
                  @click="callModal(service.pos)"
                  class="btn crd-btn-see-more"
                >Ver mais</button>
              </div>
            </div>
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal-see-more"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{services[position].title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-justify">{{services[position].description}}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      services: [
        {
          pos: 0,
          img: require("../assets/images/slide-3.jpg"),
          title: "Consultoria",
          description:
            "Identificamos as necessidades e assessoramos o cliente na escolha da melhor Seguradora, levando em consideração a solidez da Instituição, sua estrutura, qualidade de atendimento e o melhor equilíbrio entre custo e benefício de seus produtos e serviços."
        },
        {
          pos: 1,
          img: require("../assets/images/slide-1.jpg"),
          title: "Gestão da carteira de Seguro",
          description:
            "Observamos as mudanças ocorridas durante a vigência das apólices, sejam mercadológicas ou do próprio contrato, resguardando os direitos e deveres do Segurado. Esclarecemos e ajudamos os nossos clientes na escolha dos melhores seguros para os seus bens, ajudando-os na resolução dos eventuais sinistros que lhe ocorram."
        },
        {
          pos: 2,
          img: require("../assets/images/slide-4.jpg"),
          title: "Análise de Risco",
          description:
            "Identificamos as possibilidades de perdas e danos e recomendamos as coberturas adequadas para o ressarcimento de eventuais prejuízos."
        }
      ],
      position: 0
    };
  },
  methods: {
    callModal(pos) {
      this.position = pos;
      $("#modal-see-more").modal("show");
    }
  },
  mounted() {
    // window.scroll({
    //   top: 2500,
    //   left: 0,
    //   behavior: "smooth"
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  scroll-behavior: smooth !important;
}

.parceiros-card {
  height: 200px;
}

.block-with-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.crd {
  border: none;
  height: 370px;
  margin: auto;
  width: 90%;
}

.crd-img-top {
  height: 170px;
}
.crd-btn-see-more {
  background: #2b2f36;
  color: #fff;
}
.crd-btn-see-more:hover {
  color: #8ec03b;
}
#servicos {
  background: #2b2f36;
  color: #2b2f36;
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

.crsl-caption h5 {
  font-size: 1.8rem;
}
.crsl-caption p {
  font-size: 1.25rem;
  text-transform: capitalize;
}

.crsl-caption-left {
  left: 40% !important;
}

.crsl-caption-right {
  right: 40% !important;
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
  filter: contrast(0.5);
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
  /* margin-left: 110px; */
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
  .crd {
    width: 100%;
  }
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
