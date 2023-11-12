let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let pedirUsuario = document.getElementById("pedirUsuario");
let retiro = document.getElementById("retiro");
let retiroExitoso = document.getElementById("retiroExitoso");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("contraseña");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `⚜ *DATOS DE LA CUENTA* ⚜
◾Nombre Completo: *${inputNombre}*
◾CBU: *${inputCBU}*
◾Alias: *${inputAlias}*

*ENVIAR:*
◾COMPROBANTE
◾USUARIO de la PLATAFORMA

❌ *SIEMPRE CONSULTÁ CBU SEGUNDOS ANTES DE ENVIAR DINERO* ❌

*INGRESÁ ACÁ PARA JUGAR:* https://jugalodos.com`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `⚜ *USUARIO REGISTRADO* ⚜

◾*TU USUARIO:* ${user}
◾*CONTRASEÑA:* bet123

*CONSULTA CBU PARA INGRESAR DINERO* 👇🏻👇🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `Bienvenido/a a...
⚜ *LUXURY CABA* ⚜
El mejor sitio de entretenimiento: https://jugalodos.com 🎰

💰 *MÍNIMO DE CARGA $500* 💰
💰 *RETIRO MÍNIMO $1.500* 💰

Envianos tu *NOMBRE* y *APELLIDO* así te generamos un usuario para empezar jugar 👇🏻👇🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

pedirUsuario.addEventListener("click", () => {
  const texto = `Te pido tu *USUARIO* de la *PLATAFORMA* para poder automatizar la carga de fichas.
*RECORDÁ enviarlo siempre por separado debajo del COMPROBANTE* 👇🏻👇🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `⚜ Para retirar su dinero responda este mensaje indicandonos *EN ORDEN*: ⚜

◾ Usuario de la plataforma
◾ Nombre y apellido que figura en tu cuenta bancaria
◾ Monto que deseas retirar
◾ CBU / CVU
◾ Alias

💰 *MINIMO DE RETIRO: $1.500*  💰

*Su chat será archivado y enviado al sector pagos, por ende, no será leido de manera frecuente, SEA PACIENTE.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `⚜ *PREMIO EN FILA*  ⚜
*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 

*POR FAVOR, NO RESPONDA NI REACCIONE ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `⚜ *TU PREMIO YA FUE ENVIADO* ⚜
Felicitaciones! Disfrutalo mucho, *¡¡Gracias por elegirnos!!*
  
Si lo publicas en Instagram y *nos etiquetas, @luxurycaba*, obtenes un 10% de bonificación en tu próxima carga! 
*Muchas gracias* 😉`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `*CONTRASEÑA RESTABLECIDA*
Por favor, recargá la página y si es posible, *copiá y pegá* los datos así se evitan errores de tipeo y, por lo tanto, no se bloquea el usuario. 🔓`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `Tu transferencia todavía no impactó, *tené en cuenta que a veces las transferencias se demoran.* Si el dinero no ingresa a nuestra cuenta bancaria, no tenemos autorizado cargar las fichas.
🙌🏻 *Aguardá un momento y cuando ingrese tu trasnferencia tus fichas van a ser cargadas* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Por problemas e inconvenientes con la plataforma le solicitamos que *se comunique con el soporte de la página* ingresando al cuadro de diálogo que figura en la parte superior derecha de la misma, ya que nosotros *no podemos acceder a la configuración de las máquinas.* 🎰⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `🚫Te informo que enviaste dinero a un CBU con el cual no estamos trabajando actualmente. En el mensaje de carga especificamos previamente que *SIEMPRE* se consulte segundos antes el CBU vigente antes de enviar dinero.🚫

Por favor, aguardá con paciencia a que ingresemos a esa cuenta y verifiquemos que el dinero haya ingresado. *PUEDE DEMORAR UNAS HORAS*.‼️
*HAY QUE SER RESPONSABLE CON TU DINERO DEBIDO A QUE SI SE ENVÍA DINERO A UNA CUENTA INACTIVA A LA QUE NO TENEMOS ACCESO, LO PIERDE*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `Los retiros pueden ser *a partir de $1.500*, puede retirar varias veces al día, no hay máximo de retiros diarios (*siempre y cuando no retire $1.500 cada 5 / 10 minutos*).
El máximo de demora del pago es dependiendo del monto de retiro, de la cantidad de premios en fila que tengamos y con cuanta banca contemos en ese momento. Si hay mucha demora se informa previamente. 

*Los pagos pueden ser en su totalidad o en cuotas dependiendo del monto y la carga realizada anteriormente.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
