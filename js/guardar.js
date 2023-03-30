function guardar() {db.collection("usuarios").add({
    nombre: document.getElementById("name").value,
    apellido: document.getElementById("last").value,
   
})
.then((docRef) => {
    alert("registro exitoso")
})
.catch((error) => {
    alert("error en el registro")
});}