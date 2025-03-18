// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado');
        return;
    }
    
    amigos.push(nombreAmigo);
    mostrarAmigos();
    
    inputAmigo.value = '';
    inputAmigo.focus();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.classList.add('button-remove');
        btnEliminar.onclick = function() {
            eliminarAmigo(index);
        };
        
        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Debes agregar al menos un amigo para realizar el sorteo');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigoSeleccionado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
    listaResultado.appendChild(li);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});