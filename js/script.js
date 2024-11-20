    // Función para actualizar el mapa
    function actualizarMapa(direccion) {
        const mapa = document.getElementById('googleMap');
        mapa.src = `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;
    }