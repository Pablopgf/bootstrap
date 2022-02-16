'use strict';

var form = document.getElementById('form');
var forms = document.querySelectorAll('.needs-validation');
var enviar = document.getElementById('enviar');
var borrar = document.getElementById('borrar');
var enviarEfecto = document.getElementById('enviarEfecto');
var alerta = document.getElementById('alerta');

borrar.addEventListener('click', () => {
    form.reset();
});

Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                enviar.hidden = true;
                enviarEfecto.hidden = false;

                setTimeout(function () {
                    enviar.hidden = false;
                    enviarEfecto.hidden = true;
                    alerta.hidden = false;
                    form.classList.remove('was-validated');
                    form.submit();
                    form.reset();

                }, 5000);
            }
        }, false);
    })