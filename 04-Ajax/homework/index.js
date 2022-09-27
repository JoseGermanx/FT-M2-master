// ejercicio 1
$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', data => {
        let listaAmigos = document.querySelector("#lista");

        listaAmigos.innerHTML = " ";

        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            li.textContent = `Id: ${data[i].id} ---> Nombre: ${data[i].name}, edad: ${data[i].age}`;
            listaAmigos.appendChild(li);
        }

    }); 
  });

  //ejercicio 2
$("#search").click(() => {

    let input = document.querySelector("#input")

    $.get(`http://localhost:5000/amigos/${input.value}`, data => {
        console.log(data);

        let span = document.querySelector("#amigo");
        span.textContent = `Tu amigo con el id: ${input.value} es ${data.name}`
    })
})

//ejercicio 3
$ ("#delete").click(() => {

    let inputDelete = document.querySelector("#inputDelete")

    $.ajax({
        url:`http://localhost:5000/amigos/${inputDelete.value}`,
        type: 'DELETE',
        success: function (result){
            $("#success").text(`Tu amigo 👦 con el id ${inputDelete.value} fue eliminado`)

        }
    });

})