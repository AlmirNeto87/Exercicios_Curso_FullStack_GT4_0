let idTarefa = null;

function abrirModal(){
    overlay.classList.add("active")
    criarTarefa.classList.add("active")
}

function fecharModal(){
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");

}

function buscarTarefas(){
   fetch("http://localhost:3000/tarefas")
    .then(response => response.json())
    .then(response=>{
        inserirTarefas(response);
    })
    
    
} buscarTarefas();

function formatarData(data) {
    let dataFormatada = new Date(data);

    return dataFormatada.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(",", " às");
}


function inserirTarefas(listaDeTarefas){
    if(listaDeTarefas.length >0){
            lista.innerHTML =""
        listaDeTarefas.map(tarefa =>{
            lista.innerHTML +=`
            <li>
                <h5>${tarefa.titulo}</h5>
                <p>${tarefa.data ? formatarData(tarefa.data) : "Sem Data"}</p>
                <p>${tarefa.descricao}</p>
                <div class="actions" >
                    <box-icon name='edit-alt' size="sm" onclick="editarTarefas(${tarefa.id})"></box-icon>
                    <box-icon name='trash' size="sm" onclick="deletarTarefa(${tarefa.id})"></box-icon>
                </div>
            </li>
                       
            `;
        })
    }
};



function novaTarefa() {
    event.preventDefault();

    const data = document.querySelector("#data");
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value,
        data: data.value
    };

    let url = "http://localhost:3000/tarefas";
    let metodo = "POST";

    if (idTarefa !== null) {
        url += `/${idTarefa}`;
        metodo = "PUT";
    }

    fetch(url, {
        method: metodo,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(response => response.json())
    .then(response => {
        fecharModal();
        buscarTarefas();

        idTarefa = null;

        let form = document.querySelector("#criarTarefa form");
        form.reset();
    });
}

function deletarTarefa(id){
    fetch(`http://localhost:3000/tarefas/${id}`,{
        method: "DELETE",

    })
    .then(response => response.json())
    .then(response =>{
        alert("Tarefa deletada com sucesso")
        buscarTarefas()
        
    })    
}

function pesquisarTarefas(){
    let lista = document.querySelectorAll("ul li");
       
    if(buscaTitulo.value.length>0){
         lista.forEach(lis =>{
            console.log(lis.children);
            
            if(!lis.children[0].innerText.includes(buscaTitulo.value)){
                lis.classList.add('oculto');
                // console.log("teste1");
            }else{
                lis.classList.remove('oculto');
            }
         })
    } else{
        lista.forEach(lis =>{
            lis.classList.remove('oculto');
        })
    }
    
}

function pesquisarDescricao(){
    let lista = document.querySelectorAll("ul li");
       
    if(buscaDescricao.value.length>0){
         lista.forEach(lis =>{
            console.log(lis.children);
            
            if(!lis.children[1].innerText.includes(buscaDescricao.value)){
                lis.classList.add('oculto');
                // console.log("teste1");
            }else{
                lis.classList.remove('oculto');
            }
         })
    } else{
        lista.forEach(lis =>{
            lis.classList.remove('oculto');
        })
    }
    
}

function editarTarefas(id) {
    fetch(`http://localhost:3000/tarefas/${id}`)
    .then(response => response.json())
    .then(response => {
        idTarefa = id;

        titulo.value = response.titulo;
        descricao.value = response.descricao;

        abrirModal();
    });
}


function atualizarTarefa(id) {
    event.preventDefault();

    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    };

    fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(response => response.json())
    .then(response => {
        fecharModal();
        buscarTarefas();

        let form = document.querySelector("#criarTarefa form");
        form.reset();
    });
}
