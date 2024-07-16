

function firma(){
  var firmaCheck = document.getElementById('aceptaLegales');
  var btnEnviar  = document.getElementById('wizard');
  if(firmaCheck.checked == true){
     btnEnviar.disabled == false;
  }else{
    btnEnviar.disabled == true;
  }
}


  $(function () {
    // Manejar el evento submit del formulario
    $('#wizard').submit(function (event) {
        // Evitar que el formulario se envíe normalmente
        event.preventDefault();

        if (this.checkValidity()) {

        // Obtener los valores de los campos de entrada
        var no_empleado = $('#no-empleado').val();
        var empresa = $('#empresa').val();
        var nombre = $('#nombre').val();
        var apellidopaterno = $('#apellidopaterno').val();
        var apellidomaterno = $('#apellidomaterno').val();
        var telefonocelular = $('#telefonocelular').val();
        var correo = $('#correo').val();
        var plan_gratuito = $("input[name='plan_gratuito']:checked").val();
        var AhorroSemanal = $("input[name='AhorroSemanal']:checked").val();
        // var plan_proteccion = $("input[name='plan_proteccion']:checked").val();
        // var iniciar_100 = $("input[name='iniciar_100']:checked").val();
        var Monto = $('#Monto').val();
        var semana_22 = $("input[name='semana_22']:checked").val();
        var semana_47 = $("input[name='semana_47']:checked").val();
        var semana_22y47 = $("input[name='semana_22y47']:checked").val();
        var aceptaLegales = $("input[name='aceptaLegales']:checked").val();
        // ELEMENTOS DE LA TABLA
        // valores de 100
        var cien = $("input[id='cien']:checked").val();
        var cienUno = document.getElementById("cienUno").val();
        var cienDos = document.getElementById("cienDos").val();
        // valores de 150
        var cientocincuenta = $("input[id='cienCinco']:checked").val();
        var cienCincuenta    = document.getElementById('cienCincoUno').val();
        var cienCincuentaDos = document.getElementById('cienCincoDos').val();
        // valores de 200
        var dosCien = $("input[id='dosCien']:checked").val();
        var dosCienUno = document.getElementById('dosCienUno').val();
        var dosCienDos = document.getElementById('dosCienDos').val();
        // valores de 250
        var AhorroSemanal250 = $("input[id='AhorroSemanal250']:checked").val();
        var AhorroSemanal250Uno = document.getElementById('AhorroSemanal250Uno').val();
        var AhorroSemanal250Dos = document.getElementById('AhorroSemanal250Dos').val();
        // valores de 300
        var tresCien = $("input[id='tresCien']:checked").val();
        var tresCieUno = document.getElementById('tresCieUno').val();
        var tresCieDos = document.getElementById('tresCieDos').val();
        // valores de 500
        var cincoCien = $("input[id='cincoCien']:checked").val();
        var cincoCienUno = document.getElementById('cincoCienUno').val();
        var cincoCienDos = document.getElementById('cincoCienDos').val();

        

        

        // Construir el objeto de datos
        var data = {
          "no-empleado": no_empleado,
          "empresa": empresa,
          "datos-solicitud": JSON.stringify({
            "Nombre": nombre,
            "Apellido paterno": apellidopaterno,
            "Apellido materno": apellidomaterno,
            "Teléfono celular": telefonocelular,
            "Correo": correo,
            "Plan gratuito": plan_gratuito,
            "Ahorro semanal": AhorroSemanal,
            // "Plan protección": plan_proteccion,
            // "Iniciar con $100": iniciar_100,
            "Monto": Monto,
            "semana_22": semana_22,
            "semana_47": semana_47,
            "semana_22y47": semana_22y47,
            "aceptaLegales": aceptaLegales,
            // Datos de la tabla
            "Monto100": cien,
            "Monto100Uno":   cienUno,
            "Monto100Dos":   cienDos,
            // 150
            "Monto150":  cientocincuenta,
            "Monto150Uno": cienCincuenta,
            "Monto150Dos": cienCincuentaDos,
            // 200
            "Monto200":  dosCien,
            "Monto200Uno": dosCienUno,
            "Monto200Dos": dosCienDos,
            // 250
            "Monto250": AhorroSemanal250,
            "Monto250Uno": AhorroSemanal250Uno,
            "Monto250Dos": AhorroSemanal250Dos,
            // 300
            "Monto300": tresCien,
            "Monto300Uno": tresCieUno,
            "Monto300Dos": tresCieDos,
            // 500
            "Monto500": cincoCien,
            "Monto500Uno": cincoCienUno,
            "Monto500Dos": cincoCienDos,
          })
        };

        // Realizar la solicitud AJAX
        console.log(JSON.stringify(data));

        // $.ajax({
        //   crossDomain: true,
        //   url: "https://tksdev.tecas.com.mx:6010/ServicioCapturaAhorro/capturaahorro/Registrar",
        //   type: "POST",
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'user-access-control': 'Sev_ahorro',
        //     'tks-tch-access-control': '9DEV5ZFk24GOzScAh'
        //   },
        //   dataType: "json",
        //   contentType: 'application/json; charset=utf-8',
        //   data: JSON.stringify(data),
        //     success: function (data) {
        //       alert('¡Registro cargado exitosamente!');
        //       console.log(data);
        //     },
        //     error: function (error) {
        //       alert('Error al enviar la solicitud: ' + error.responseText);
        //     }
        //   });

        // Local
        // fetch('https://tksdev.tecas.com.mx:6010/ServicioCapturaAhorro/capturaahorro/Registrar', {
          // Demo
          // fetch('https://cmeappq.came.org.mx:6010/ServicioCapturaAhorro/capturaahorro/Registrar', {
            // Producción
            fetch('https://cmeappp.came.org.mx:6010/ServicioCapturaAhorro/capturaahorro/Registrar', {
              method: 'POST',
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'user-access-control': 'Sev_ahorro',
            // Local
            // 'tks-tch-access-control': '9DEV5ZFk24GOzScAh',
            // Demo
            // 'tks-tch-access-control': '9QA5ZFk24GOzScAh',
            // Producción
            'tks-tch-access-control': '9PROD5ZFk24GOzScAh',
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(data)
          // , mode: 'no-cors'
        })
            .then(response => {
          // alert('¡Registro cargado exitosamente!');
          window.location.replace("gracias.html");
        })
            .catch(error => {
              alert('Lo sentimos, su solicitud no ha podido ser enviada, por favor inténtelo más tarde.');
            });
          }});
  });