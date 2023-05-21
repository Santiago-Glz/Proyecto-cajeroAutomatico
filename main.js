var cuentas = {
  "Mali" : {saldo: 200, password: "1234" },
  "Gera" : {saldo: 290, password: "5678" },
  "Maui" : {saldo: 67, password: "abcd" }
};

var cuentaSeleccionada;
var saldoActual;
// Comprobar contrseña
function verificarPassword() {

  // Extraer parametros de login
  var selectedAccount = document.getElementById("cuentas").value;
  var password = document.getElementById("password").value;
  // Reset inputs
  document.getElementById("cuentas").value = "";
  document.getElementById("password").value = "";
  // Compronar si se ha seleccionado cuenta existente
  if (!cuentas[selectedAccount]){
    alert("La cuenta seleccionada no existe")
  }
  // Comprobar si la contraseña es correcta
  if (password === cuentas[selectedAccount].password) {
    cuentaSeleccionada = selectedAccount;
    saldoActual = cuentas[selectedAccount].saldo;

    document.getElementById("passwordDiv").style.display = "none";
    document.getElementById("accountName").innerHTML = selectedAccount;
    document.getElementById("opcionesDiv").style.display = "block";
    document.getElementById("accountContainer").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Intenta nuevamente.");
  }
}
// Comprobar saldo
function consultarSaldo() {
  document.getElementById("resultadoDiv").style.display = "block";
  document.getElementById("resultado").textContent = "Saldo actual: $" + saldoActual;
  document.getElementById("nuevoSaldo").textContent = "";
}
// Incrementar y verificar saldo 
function ingresarMonto() {
  var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Ingresa un valor numérico mayor a cero.");
    return;
  }

  var nuevoSaldo = saldoActual + monto;

  if (nuevoSaldo > 990) {
    alert("El saldo maximo permitido es de $990. No puedes ingresar ese monto.");
    return;
  }

  saldoActual = nuevoSaldo;

  document.getElementById("resultadoDiv").style.display = "block";
  document.getElementById("resultado").textContent = "Monto ingresado: $" + monto;
  document.getElementById("nuevoSaldo").textContent = "Nuevo saldo: $" + saldoActual;
}
// Decrementar y verificar saldo
function retirarMonto() {
  var monto = parseFloat(prompt("Ingresa el monto a retirar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Ingresa un valor numérico mayor a cero.");
    return;
  }

  var nuevoSaldo = saldoActual - monto;

  if (nuevoSaldo < 10) {
    alert("El saldo mínimo permitido es de $10. No puedes retirar ese monto.");
    return;
  }

  saldoActual = nuevoSaldo;

  document.getElementById("resultadoDiv").style.display = "block";
  document.getElementById("resultado").textContent = "Monto retirado: $" + monto;
  document.getElementById("nuevoSaldo").textContent = "Nuevo saldo: $" + saldoActual;
}
// Recargar pagina para reset
function leave() {
    location.reload()
}