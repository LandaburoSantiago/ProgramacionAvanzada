const inputNombre = document.getElementById("inputName");
const inputApellido = document.getElementById("inputLastname");
const inputTelefono = document.getElementById("inputTelephone");
const inputDireccion = document.getElementById("inputAddress");
const inputEmail = document.getElementById("inputEmail");
const formulario = document.getElementById("form");

function validacionClickInput(elemento){
    elemento.onclick = function()
        {
            if (elemento.value.length == 0){
                elemento.className = "form-control is-invalid"
            }else{
                elemento.className = "form-control is-valid"
            }
        }
}

function validacionKeyPressed(elemento){
    elemento.onkeypress = function()
        {
            if (elemento.value.length == 0){
            elemento.className = "form-control is-invalid"
            }else{
                elemento.className = "form-control is-valid"
            }
        }
}

function validacionBorrando(elemento){
    elemento.onkeydown = function()
        {
            if (elemento.value.length == 0){
            elemento.className = "form-control is-invalid"
            }else{
                elemento.className = "form-control is-valid"
            }
        }
}

// Haciendo uso de la libreri Sweet Alert
formulario.onsubmit = function(){
    if (inputNombre.value.length == 0 || inputApellido.value.length == 0 || inputTelefono.value.length == 0
        || inputDireccion.value.length == 0 || inputEmail.value.length == 0){
            swal({
                title: "Debe llenar todos los campos.",
                text: "Vuelva a intentarlo.",
                icon: "error",
              });
              return false
        }else{
            swal({
                title: "Sus datos fueron enviados!",
                text: "Muchas gracias!",
                icon: "success",
              });
              return false
        }
}

validacionClickInput(inputNombre);
validacionClickInput(inputApellido);
validacionClickInput(inputTelefono);
validacionClickInput(inputDireccion);
validacionClickInput(inputEmail);
validacionKeyPressed(inputNombre);
validacionKeyPressed(inputApellido);
validacionKeyPressed(inputTelefono);
validacionKeyPressed(inputDireccion);
validacionKeyPressed(inputEmail)
validacionBorrando(inputNombre)
validacionBorrando(inputApellido)
validacionBorrando(inputTelefono)
validacionBorrando(inputDireccion)
validacionBorrando(inputEmail)