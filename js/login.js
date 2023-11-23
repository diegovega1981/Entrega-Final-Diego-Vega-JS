const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value,
    }
    if (username==="diego" && password==="2020") {
        alert("Ingreso correcto")
    } else {
        alert("Ingreso incorrecto")
    }
    

    /*if (username==="user" && password==="pass") {
        const mensajeContainer = document.getElementById("mensajeContainer");

        mensajeContainer.innerHTML = 'datos correctos';
        mensajeContainer.append(mensajeContainer);
        location.reload();            
    } else {
        mensajeContainer.innerHTML = 'datos no válidos';
        mensajeContainer.append(mensajeContainer);
        location.reload();
        
    }*/
})