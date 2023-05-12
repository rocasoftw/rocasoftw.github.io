function enviar() {
    let nombre=document.forms["frmcontacto"]["name"].value;
    let email=document.forms["frmcontacto"]["email"].value;
    let message=document.forms["frmcontacto"]["message"].value;
    let err=document.getElementById("formerror");
    let ferror="";

    let pos = email.indexOf("@");
    if (nombre==""){
      ferror="Coloque su nombre...";
    }
    if (email=="" || pos==-1){
      ferror=ferror + "<br>Colocar un email valido...";
    }
    if (message==""){
      ferror=ferror + "<br>Colocar un mensaje...";
    }
    if (ferror==""){
      ferror="Mensaje enviado...";
      err.style.color="green"
      err.innerHTML = ferror;
    }else{
      err.style.color="red"
      err.innerHTML = ferror;
    }
  }
  function obtenerClima() {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=c74f61749c197b4671167c3cc9efd031",
      success: function(respuesta) {
        alert("La temperatura actual en Capital es " + (respuesta.main.temp - 273.15).toFixed(2) + "°C.");
      }
    });
  }