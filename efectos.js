
$(document).ready(function(){

    /* 1-EFECTO EN EL CARRUCEL */
    $('#carrusel').hide().fadeIn(1000);


    /* 2- EFECTO EN EL CARD
    $('#box1').mouseover(function(){

        $('#box1 .card').animate({opacity:0.5}).addClass('bg-dorado')

    });

    $('#box1').mouseleave(function(){

        $('#box1 .card').animate({opacity:1}).removeClass('bg-dorado')

    }); */

    /* 3-EFECTO EN LAS CARDS */
    $('.box').mouseover(function(){

        $('.card' , this ).animate({opacity:0.5}).addClass('bg-dorado')

    });

    $('.box').mouseleave(function(){

        $('.card' , this ).animate({opacity:1}).removeClass('bg-dorado')

    });

    /* 5- CUPON DE DESCUENTO */
    $('#cupon a').click(function(){
        $('#cupon .descuento').hide()
        .html('<h2>Código de descuento #456123</h2>')
        .slideDown(1000);
    });

    /* 6- VIDEO CON EFECTO FANCYBOX */
    $('.btn-video').click(function(){
        $.fancybox.open('<div class="message"><iframe width="560" height="315" src="https://www.youtube.com/embed/2OGVtpONiXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
    });


    /* 8- BOTON SUBIR */
    $('.btn_subir').click(function(){
        //ANIMAR SCROLL VERTICAL PARA QUE SE MUEVA HASTA LA POSICION 0 DEL NAVEGADOR
        $('html , body').animate({scrollTop:0}, 1000);
    });
    




});