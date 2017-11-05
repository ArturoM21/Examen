//var nombre = prompt("Ingrese un nombre");
//document.getElementById("nombre").placeholder=nombre;

var personas = [];


function agregar(persona){
  var nombre = document.getElementById("nombre").value;
  var apaterno = document.getElementById("paterno").value;
  var amaterno = document.getElementById("materno").value;
  var correo = document.getElementById("correo").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("confpass").value;


persona = {
  nombre:nombre,
  paterno:apaterno,
  materno:amaterno,
  correo:correo,
  pass:pass,
  cpass:cpass
}

if (persona.pass!=persona.cpass) {
  alert("La contraseña no coincide")
}else {
  personas.push(persona);
  document.getElementById("nombre").value="";
  document.getElementById("paterno").value="";
  document.getElementById("materno").value="";
  document.getElementById("correo").value="";
  document.getElementById("pass").value="";
  document.getElementById("confpass").value="";
  document.getElementById("confpass").value="";

  console.log(personas);
}

}
