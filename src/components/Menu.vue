<template>
<div id="teste">
    <div class="navbar navbar-expand-sm" id="main_menu">
        <a href="#" class="navbar-brand">
            <img src="../assets/images/1.jpg" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#meu_links" id="btn_collapse">
            <span><i class="fas fa-bars"></i></span>
        </button>
        <div id="meu_links" class="collapse navbar-collapse">
            <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link activo" v-on:click.native="ativar"><i class="fas fa-home"></i> Início</router-link></li>
            <li class="nav-item"><a href="#about-us" class="nav-link"><i class="fas fa-heartbeat"></i> Sobre nós</a></li>
            <li class="nav-item"><router-link to="/servicos" class="nav-link"><i class="fas fa-cogs"></i> Serviços</router-link></li>
            <li class="nav-item"><router-link to="/servicos" class="nav-link"><i class="fas fa-hands-helping"></i> Parceiros</router-link></li>
            <li class="nav-item"><router-link to="/servicos" class="nav-link"><i class="fas fa-camera"></i> Galeria</router-link></li>
            <li class="nav-item"><router-link to="/servicos" class="nav-link"><i class="fas fa-sign-in-alt"></i> Login</router-link></li>
        </ul>
        </div>  
    </div>

    <router-view name='aux'></router-view>


   <footer class="container-fluid text-white">
    <div class="row">
        <div class="col-md-3">
            <ul>
                <li>Servicos</li>
                <li><a href="#">&#10095; Consultoria</a></li>
                <li><a href="#">&#10095; Análise de Risco</a></li>
                <li><a href="#">&#10095; Gestão da carteira de Seguro</a></li>
                <li><a href="#">&#10095; Renovação do Seguro</a></li>
                <li><a href="#">&#10095; Defensor</a></li>
                <li><a href="#">&#10095; Organização</a></li>
            </ul>
        </div>
        <div class="col-md-3 ">
            <ul>
                <li>Termos</li>
                <li><a href="">&#10095; Termos e condicoes</a></li>
                <li><a href="#">&#10095; Politicas de reembolso</a></li>
            </ul>
        </div>
        <div class="col-md-3">
            <ul>
                <li>C&JS - Seguros</li>
                <li><a href="#"><i class="fas fa-map-marker-alt" style="color: #dd4a40"></i> Onde estamos</a></li>
            </ul>
            
        </div>
        <div class="col-md-3">
            <ul>
                <li>Midias Sociais</li>
                <li><a href="X"><i class="fab fa-facebook"></i> Facebook/CJSeguros</a></li>
                <li><a href="#"><i class="fab fa-instagram"></i> _CSseguros</a></li>
            </ul>
        </div>
    </div>
</footer>
</div>
</template>
<script>
    export default{
        methods:{
            ativar: function(){
                var menuItemAtivo = document.querySelectorALL('nav-item')
                for(var i=0; i<menuItemAtivo.length; i++){
                    menuItemAtivo[i].remove('activo')
                }
                menuItemAtivo.classList.add('activo')
            }
        }
    }
</script>
<style  scoped>
    @font-face{
        font-family: 'ubuntu';
        src: url('../assets/fonts/Ubuntu-Light.ttf');
    } 
    #main_menu{
        background: #fff;
        border-bottom: 1px solid #8EC03B;
        z-index: 100;
        margin: 0;
        padding: 0;
        position: fixed;
        width: 100%;
        height: 12%;
    }
    .navbar-brand{
        margin-left: 5%;
    }
    .navbar-nav{
        margin-left: 12%;
    }
    #btn_collapse{
        border:1px solid #8EC03B;
        background: #fff;
        color:#8EC03B;
    }
    .nav-item{
        margin-left: .5%;
    }
    .nav-link{
        color: rgba(0, 0, 0, 0.8) ;
        font-size:18px;
        width: 135px;
        text-align: center;
        font-family: ubuntu;
    }
    .nav-link:hover,.activo{
        background-color: #8EC03B;
        color:#fff;
        border-radius: 20px;
    }  
    footer{
        background: #2B2F36;
    }
    footer>.row{
        padding: 3%;
    }
    footer ul{
        list-style-type: none;
    }
    footer>ul>li>a{
        color:#fff
    }
    footer ul li a:hover{
        text-decoration: none;
        color: #8EC03B;
    }
/**Media query */
  @media only screen and (max-width: 768px){
      #main_menu{
          position: relative;
          width: 100%;
      }
      #main_menu .navbar-brand{
          margin-left: 0;
          border: 1px solid red;
          display:none
      }
        .navbar-nav{
        margin-left: 0;
        }
            .nav-item{
        padding: 1%;
    }
        .nav-link{
        font-size:10px;
        width: 100px;
        text-align: justify;
    }
  }
</style>