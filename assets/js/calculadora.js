$(function () {
    const resultado = $('#resultado');
    const borrar = $('#borrar');
    const igual = $('#igual');
    const operacion = $('.operacion');
    const numero = $('.numero');


    // Agregamos eventos click a los botones de números
    numero.on('click', function () {
        resultado.val(resultado.val() + $(this).val());
    });

    // Agregamos eventos click a los botones de operaciones
    operacion.on('click', function () {
        var ultimoCaracter = resultado.val().slice(-1); // obtener el último caracter de la cadena de texto

        if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') { // verificar si el último caracter es un operador
            resultado.val(resultado.val().slice(0, -1) + $(this).val()); // reemplazar el operador existente con el nuevo
        } else {
            resultado.val(resultado.val() + $(this).val()); // concatenar el nuevo operador
        }
    });
    // Agregamos evento click al botón de borrar
    borrar.on('click', function () {
        resultado.val('');
    });

    // Agregamos evento click al botón de igual
    igual.on('click', function () {
        resultado.val(eval(resultado.val()));
    });
});
