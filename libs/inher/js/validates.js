// Validaciones de tabla campos, variables de validacion
// -------------------------------------------------------------
// Validaciones de checkbox campos de $100
 function seleccionado(){
  var btnEnviar = document.getElementById('enviar');
    
  

    calcular();
    let cien = document.getElementById('cien');
    let cienUno = document.getElementById("cienUno");
    let cienDos = document.getElementById("cienDos");
    if(cien.checked == true){
      cienUno.disabled = false;
      cienDos.disabled = false;
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr6").innerHTML = "";
    }else if(cien.checked == false){
      cienUno.disabled = true;
      cienDos.disabled = true;
      document.querySelector(".montoErr").innerHTML = "";
    }
    // ----------------------------------------------------------
    // Validaciones de checkbox campos de $150
    let cientocincuenta = document.getElementById('cienCinco');
    let cienCincuenta    = document.getElementById('cienCincoUno');
    let cienCincuentaDos = document.getElementById('cienCincoDos');
    if(cientocincuenta.checked == true){
        cienCincuenta.disabled = false;
        cienCincuentaDos.disabled = false;
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr3").innerHTML = "";
        document.querySelector(".montoErr4").innerHTML = "";
        document.querySelector(".montoErr5").innerHTML = "";
        document.querySelector(".montoErr6").innerHTML = "";
      }else if(cientocincuenta.checked == false){
        cienCincuenta.disabled = true;
        cienCincuentaDos.disabled = true;
        // ELIMINA LOS ERRORES DE LOS OTROS CAMPOS
        document.querySelector(".montoErr2").innerHTML = "";
    }

    // ------------------------------------------------------------
    // Validaciones de checkbox campos de $200
    let dosCien = document.getElementById('dosCien');
    let dosCienUno = document.getElementById('dosCienUno');
    let dosCienDos = document.getElementById('dosCienDos');
    if(dosCien.checked == true){
        dosCienUno.disabled = false;
        dosCienDos.disabled = false;
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr2").innerHTML = "";
        document.querySelector(".montoErr4").innerHTML = "";
        document.querySelector(".montoErr5").innerHTML = "";
        document.querySelector(".montoErr6").innerHTML = "";
      }else if(dosCien.checked == false){
        dosCienUno.disabled = true;
        dosCienDos.disabled = true;
        // ELIMINA LOS ERRORES DE LOS OTROS CAMPOS
        document.querySelector(".montoErr3").innerHTML = "";
    }

    // ---------------------------------------------------------------
    // Validaciones de checkbox campos de $250
    let AhorroSemanal250 = document.getElementById('AhorroSemanal250');
    let AhorroSemanal250Uno = document.getElementById('AhorroSemanal250Uno');
    let AhorroSemanal250Dos = document.getElementById('AhorroSemanal250Dos');
    if(AhorroSemanal250.checked == true){
        AhorroSemanal250Uno.disabled = false;
        AhorroSemanal250Dos.disabled = false;
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr2").innerHTML = "";
        document.querySelector(".montoErr3").innerHTML = "";
        document.querySelector(".montoErr5").innerHTML = "";
        document.querySelector(".montoErr6").innerHTML = "";
      }else if(AhorroSemanal250.checked == false){
        AhorroSemanal250Uno.disabled = true;
        AhorroSemanal250Dos.disabled = true;
        // ELIMINA LOS ERRORES DE LOS OTROS CAMPOS
        document.querySelector(".montoErr4").innerHTML = "";
    }

    // ---------------------------------------------------------------
    // Validaciones de checkbox campos de $300
    let tresCien = document.getElementById('tresCien');
    let tresCieUno = document.getElementById('tresCieUno');
    let tresCieDos = document.getElementById('tresCieDos');
    if(tresCien.checked == true){
        tresCieUno.disabled = false;
        tresCieDos.disabled = false;
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr2").innerHTML = "";
        document.querySelector(".montoErr3").innerHTML = "";
        document.querySelector(".montoErr4").innerHTML = "";
        document.querySelector(".montoErr6").innerHTML = "";
      }else if(tresCien.checked == false){
        tresCieUno.disabled = true;
        tresCieDos.disabled = true;
        // ELIMINA LOS ERRORES DE LOS OTROS CAMPOS
        document.querySelector(".montoErr5").innerHTML = "";
    }

    // ---------------------------------------------------------------
    // Validaciones de checkbox campos de $500
    let cincoCien = document.getElementById('cincoCien');
    let cincoCienUno = document.getElementById('cincoCienUno');
    let cincoCienDos = document.getElementById('cincoCienDos');
    if(cincoCien.checked == true){
        cincoCienUno.disabled = false;
        cincoCienDos.disabled = false;
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr2").innerHTML = "";
        document.querySelector(".montoErr3").innerHTML = "";
        document.querySelector(".montoErr4").innerHTML = "";
        document.querySelector(".montoErr5").innerHTML = "";
      }else if(cincoCien.checked == false){
        cincoCienUno.disabled = true;
        cincoCienDos.disabled = true;
        // ELIMINA LOS ERRORES DE LOS OTROS CAMPOS
        document.querySelector(".montoErr6").innerHTML = "";
    }

    if(cien.checked == false && cientocincuenta.checked == false && dosCien.checked == false && AhorroSemanal250.checked == false && tresCien.checked == false && cincoCien.checked == false){
      document.querySelector(".montoErr7").innerHTML = "Debes seleccionar almenos una opción.";
      btnEnviar.disabled = true;
      
    }else{
      btnEnviar.disabled = false;
      document.querySelector(".montoErr7").innerHTML = "";
    }
  }
  
  
    
  
  function calcular(){
    
    // valores de 100
    let cienUno = document.getElementById("cienUno").value;
    let cienDos = document.getElementById("cienDos").value;
    // valores de 150
    let cienCincuenta    = document.getElementById('cienCincoUno').value;
    let cienCincuentaDos = document.getElementById('cienCincoDos').value;
    // valores de 200
    let dosCienUno = document.getElementById('dosCienUno').value;
    let dosCienDos = document.getElementById('dosCienDos').value;
    // valores de 250
    let AhorroSemanal250Uno = document.getElementById('AhorroSemanal250Uno').value;
    let AhorroSemanal250Dos = document.getElementById('AhorroSemanal250Dos').value;
    // valores de 300
    let tresCieUno = document.getElementById('tresCieUno').value;
    let tresCieDos = document.getElementById('tresCieDos').value;
    // valores de 500
    let cincoCienUno = document.getElementById('cincoCienUno').value;
    let cincoCienDos = document.getElementById('cincoCienDos').value;

    // Calculo de la suma de los valores según el campo seleccionado
    // 100
    let cien = (parseInt(cienUno)) + (parseInt(cienDos));
    if(cien == 100){
        document.querySelector(".montoErr").innerHTML = "";
        document.querySelector(".montoErr2").innerHTML = "";
        document.querySelector(".montoErr3").innerHTML = "";
        document.querySelector(".montoErr4").innerHTML = "";
        document.querySelector(".montoErr5").innerHTML = "";
        document.querySelector(".montoErr6").innerHTML = "";
    }else if(cien <= 99 || cien >= 101){
      document.querySelector(".montoErr").innerHTML = "Los montos debe sumar la suma 100";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
    }

    // 150
    let cientocincuenta = (parseInt(cienCincuenta)) + (parseInt(cienCincuentaDos));
    if(cientocincuenta == 150){
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }else if(cientocincuenta <= 149 || cientocincuenta >= 151){
      document.querySelector(".montoErr2").innerHTML = "Los montos debe sumar la suma seleccionada";
      document.querySelector(".montoErr").innerHTML = "";
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
    }

    // 200
    let dosCien = (parseInt(dosCienUno)) + (parseInt(dosCienDos));
    if(dosCien == 200){
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }else if(dosCien <= 199 || dosCien >= 201){
      document.querySelector(".montoErr3").innerHTML = "Los montos debe sumar la suma $200";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
    }

    // 250
    let AhorroSemanal250 = (parseInt(AhorroSemanal250Uno)) + (parseInt(AhorroSemanal250Dos));
    if(AhorroSemanal250 == 250){
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }else if(AhorroSemanal250 <= 149 || AhorroSemanal250 >= 251){
      document.querySelector(".montoErr4").innerHTML = "Los montos debe sumar la suma $250";
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }

    // 300
    let tresCien = (parseInt(tresCieUno)) + (parseInt(tresCieDos));
    if(tresCien == 300){
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }else if(tresCien <= 299 || tresCien >= 301){
      document.querySelector(".montoErr5").innerHTML = "Los montos debe sumar la suma $300";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
      document.querySelector(".montoErr6").innerHTML = "";
    }
    // 500
    let cincoCien = (parseInt(cincoCienUno)) + (parseInt(cincoCienDos));
    if(cincoCien == 500){
      document.querySelector(".montoErr6").innerHTML = "";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }else if(cincoCien <= 499 || cincoCien >= 501){
      document.querySelector(".montoErr6").innerHTML = "Los montos debe sumar la suma $500";
      document.querySelector(".montoErr5").innerHTML = "";
      document.querySelector(".montoErr4").innerHTML = "";
      document.querySelector(".montoErr3").innerHTML = "";
      document.querySelector(".montoErr2").innerHTML = "";
      document.querySelector(".montoErr").innerHTML = "";
    }

  }



  function montoElejido(){
    let quieroAhorrarS = document.getElementById('montoFinal').value;
    let quieroAhorrarUno = document.getElementById('montoFinalUno').value;
    let quieroAhorrarDos = document.getElementById('montoFinalDos').value;

    var calculoDeja = (quieroAhorrarS - quieroAhorrarUno);

    let ahorroSemanal = parseInt(quieroAhorrarS);
    console.log(parseInt(calculoDeja));
    document.querySelector("#montoFinalDos").innerHTML = (calculoDeja);


    // let sumaAhorroSemanal = (parseInt(quieroAhorrarUno)) + (parseInt(quieroAhorrarDos));

    // if(sumaAhorroSemanal == ahorroSemanal ){
    //   document.querySelector(".montoErr8").innerHTML = "";
    // }else{
    //   document.querySelector(".montoErr8").innerHTML = "La suma de tus ahorror semanales debe coincidir con el monto de" + " " + (ahorroSemanal);
    // }
  }



  
  