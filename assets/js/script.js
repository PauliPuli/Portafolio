//el signo $ indica que estoy usando la libreria//
$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    }) 

  $('#enviarcorreo').click(function (){
    alert("El correo fue enviado exitosamente. ¡Pronto te responderé!") //MODAL//
  })

});
