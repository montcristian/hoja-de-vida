function ver(){db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        document.getElementById("print_name").innerHTML=`${doc.data().nombre}`
        document.getElementById("print_last").innerHTML=`${doc.data().apellido}`
    });
});}