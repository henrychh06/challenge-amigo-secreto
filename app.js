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
    if (amigos.length < 3) {
        alert('Debes agregar al menos 3 amigos para realizar el sorteo');
        return;
    }
    
    const amigosOrdenados = [...amigos];
    const resultado = [];
    
    for (let i = amigosOrdenados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosOrdenados[i], amigosOrdenados[j]] = [amigosOrdenados[j], amigosOrdenados[i]];
    }
    
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const amigoSecreto = amigosOrdenados[(i + 1) % amigosOrdenados.length];
        
        if (amigo === amigoSecreto) {r
            return sortearAmigo();
        }
        
        resultado.push({
            amigo: amigo,
            amigoSecreto: amigoSecreto
        });
    }
    
    mostrarResultado(resultado);
}


function mostrarResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    
    listaResultado.innerHTML = '';
    
    resultado.forEach(par => {
        const li = document.createElement('li');
        li.textContent = `${par.amigo} → ${par.amigoSecreto}`;
        listaResultado.appendChild(li);
    });
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
