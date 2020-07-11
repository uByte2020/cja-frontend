<template>
<div id="home">
  <div class="carousel slide" id="slide-show" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#slide-show" data-slide-to="0" class="active"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/login.jpg" alt="" style="width:100%; height:10%">
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
            <br/>
            <p class="lead">Cuidamos da sua saúde, lhe apresentando os melhores planos e as suas vantagens</p>
        </div>
        <div class="col-md-3 col-sm-3">
            <span>
                <i class="fas fa-car-crash"></i>
            </span>
            <br/>
            <p class="lead">Cuidamos do seu automóvel com as diversas modalidades de seguro automóvel</p>
        </div>
        <div class="col-md-3 col-sm-3">
            <span>
                <i class="fas fa-people-carry"></i>
            </span>
            <p class="lead">Ajudamos a conseguir a melhor assistência caso aconteça algum acidente no desenvolver da sua ativadade laboral</p>
        </div>
        <div class="col-md-3 col-sm-3">
            <span>
                <i class="fas fa-building"></i>
            </span>
            <p class="lead">Ajudamos a sua Empresa a encontar o melhor seguro e que se adapte a sua realidade para garantir o ciclo de funcionamento de seus equipamentos e a sua produção</p>
        </div>
    </div>
</div>
<div id="about-us" class="container-fluid">
    <div class="row" >
        <div class="col-md-7 col-sm-7" id="desc-us">
            <h4>Sobre nós</h4>
            <hr>
            <p class="lead">
            Somos uma empresa de capital privado e inteiramente angolano, fundada em 2018, com profissionais competente, altamente qualificados, pronto e disposto para lhe proporcionar o melhor que o nosso mercado segurador oferece.
            <h6>Missão e Valores:</h6>
            <ul>
                <li class="lead">Capitalizar e aumentar valor para os acionistas;</li>
                <li class="lead">Contribuir para melhor gerir e assegurar os riscos;</li>
                <li class="lead">Contribuir no desenvolvimento socioeconômico de Angola;</li>
                <li class="lead">Proporcionar às empresas os melhores seguros aos riscos que estão exposto;</li>
                <li class="lead">Assegurar uma excelente gestão das carteira de seguros;</li>
                <li class="lead">Participar ativamente na educação financeira a nível de seguros em Angola;</li>
                <li class="lead">Elevar a importância estratégica da equipe laboral e capacitá-los para melhor servir.</li>
            </ul>
            <!--<router-link class="btn" id="btn-vermais" to="/servicos"><i class="fas fa-plus-circle"></i> Informacao</router-link>     -->
        </div>
        <div class="col-md-5 col-sm-5" style="padding:0">
            <img src="../assets/images/2.jpg" alt="">
        </div>
    </div>
</div>
<div  id="parceiros">
    <h4 style="text-align:right">Parceiros</h4>
    <hr>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <img src="../assets/images/bic.jpg" alt="">
            </div>
            <div class="col-md-4 col-sm-4">
                <img src="../assets/images/nossa.png" alt="">
            </div>
            <div class="col-md-4 col-sm-4">
                <img src="../assets/images/gobal.png" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <img src="../assets/images/saham.jpg" alt="" style="width:300px">
                
            </div>
            <div class="col-md-4 col-sm-4">
                <img src="../assets/images/fidelidade.jpg" alt="" style="width:200px">
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
    padding: 0;
    border: 2px solid transparent;
    z-index: -1;
    
}
#slide-show{
    margin-top: 5.3%;
}
#tipos-seguros{
    background-color: #8EC03B;
    padding: 3%;
}
#tipos-seguros span{
    font-size: 80px;
    margin-left: 110px;
}
#tipos-seguros p{
    text-align: center;
}
#about-us img{
   padding: 0;
   margin: 0;
   width: 100%;
   height: 500px;
}
#about-us p{
   padding: 2% 2% 0 2%;
   text-align: justify;
}
#desc-us{
    padding: 2% 2% 0 2%;
}
h4{
    text-transform: uppercase;
    color:#8EC03B;
    font-family: ubuntu;
}
#parceiros{
    padding: 1% 0.5% 1% 0;
}
#parceiros img{
    width: 100%;
}
 @media only screen and (max-width: 768px){
     #slide-show{
         margin-top:0;
         width: 100%;
     }
     #tipos-seguros{
        background-color: #8EC03B;
        padding: 3%;
    }
#tipos-seguros span{
    font-size: 70px;
    margin-left: 118px;
}
#tipos-seguros p{
    text-align: center;
    font-size: 16px;
}
#about-us p, #about-us ul li{
   font-size: 16px;
}
#desc-us{
    padding: 2% 2% 0 2%;
}
h4{
    text-transform: uppercase;
    color:#8EC03B;
    font-family: ubuntu;
}
#parceiros{
    padding: 1% 0.5% 1% 0;
}
#parceiros img{
    width: 100%;
}

  }
</style>