// Crea un mensaje de confirmación para borrar la cuenta
function confirmarDelete() {

    var confirmacion = confirm("¿Estás seguro de que quieres borrar tu cuenta?");

    if (confirmacion) {
        window.location.href = "../scripts/borrar_usuario.php";
    }

};