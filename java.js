function cotizar() {
    var valor = parseInt(document.getElementById("monto").value);
    var resultado = 0;
    var tres = 1.20;
    var seis = 1.30;
    var doce = 1.45;
    var dieciocho = 1.55;
    var venticuatro = 1.70;

    if(document.getElementById("tres").checked){
        resultado = valor * tres;
        alert("El valor que deberá abonar en 3 pagos es: $" + resultado);
    }
    else if(document.getElementById("seis").checked){
        resultado = valor * seis;
        alert("El valor que deberá abonar en 6 pagos es: $" + resultado);
    }
    else if(document.getElementById("doce").checked){
        resultado = valor * doce;
        alert("El valor que deberá abonar en 12 pagos es: $" + resultado);
    }
    else if (document.getElementById("dieciocho").checked){
        resultado = valor * dieciocho;
        alert("El valor que deberá abonar en 18 pagos es: $" + resultado);
    }
    else if(document.getElementById("venticuatro").checked){
        resultado = valor * venticuatro;
        alert("El valor que deberá abonar en 24 pagos es: $" + resultado);
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}
