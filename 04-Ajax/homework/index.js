// ejercicio 1


$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', data => {
        let listaAmigos = document.querySelector("#lista");

        listaAmigos.innerHTML = " ";

        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.textContent = `Nombre: ${data[i].name}, edad: ${data[i].age}`;
            listaAmigos.appendChild(li);
        }

    }); 
  });