 function dado() {
    const dado = document.getElementById('dado');
    const botonLanzar = document.getElementById('lanzar');
    
    function lanzarDado() {
        
        const resultado = Math.floor(Math.random() * 6) + 1;
        
        
        dado.style.transform = 'scale(0)';
        dado.textContent = '...';
        
        setTimeout(() => {
            dado.textContent = resultado;
            dado.style.transform = 'scale(1)';
            
            
            const colores = ['', '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3'];
            dado.style.backgroundColor = colores[resultado];
        }, 500);
    }
    
    
    botonLanzar.addEventListener('click', lanzarDado);
    
    
    lanzarDado();
};