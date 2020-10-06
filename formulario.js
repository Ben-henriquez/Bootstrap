
/* 7-FORMULARIO */
$(document).ready(function(){

    $("#commentForm").validate({

        submitHandler: function(form) {

            // MENSAJE DE ALERTA
            alert('Gracias '+$('#nombre').val()+' por suscribirse');

            $(form).submit();
        }
    })   
       });
