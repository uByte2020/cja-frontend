<template>
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
        <div class="col-md-3">
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
    footer{
        background: #2B2F36;
    }
    footer>.row{
        padding: 3%;
    }
    footer ul{
        list-style-type: none;
    }
    footer ul li a{
        color:#fff
    }
    footer ul li a:hover{
        text-decoration: none;
        color: #8EC03B;
    }
</style>