"use strict";

// Espera a que la ventana termine de cargar
window.addEventListener('load', () => {
  // Obtiene los elementos que controlan y muestran las imágenes
  const imagesForm = document.querySelector('.form-images');
  const imagesInput = document.querySelector('#fileInput');

  // Obtiene los botones de subir imágenes y de recargar slider
  const uploadImagesBtn = document.querySelector('#upload-images-btn');
  const updateImagesBtn = document.querySelector('#update-images-btn');

  // Al hacer click en el botón de cargar imágenes, se abrirá el input de imágenes
  uploadImagesBtn.addEventListener('click', () => {
    imagesInput.click();
  })

  // Al cambiar el estado del input se mostrarán las nuevas imágenes cargadas
  imagesInput.addEventListener('change', () => {
    // Se vacía el contenedor de miniaturas
    imagesForm.innerHTML = '';

    // Se guardan los archivos en una nueva constante (legibilidad)
    const files = imagesInput.files;

    // Si el input está vacío, el botón de actualizar slider se pondrá inactivo, si no, se pondrá activo
    if (files.length < 1) {
      updateImagesBtn.classList.toggle('inactive', false);
    } else {
      updateImagesBtn.classList.toggle('inactive', true);
    }

    // Muestra cada imagen
    for (let i = 0; i < files.length; i++) {
      // Crea el elemento de imagen para la miniatura
      let element = document.createElement('IMG');

      // Lo coloca dentro del contenedor de miniaturas
      imagesForm.appendChild(element);

      // Se crea un objeto FileReader que leerá cada imagen
      const reader = new FileReader;

      // Se obtiene el BLOB de la imagen
      reader.readAsDataURL(files[i]);

      // Al terminar de cargar el FileReader, se cargará el blob dentro de la miniatura
      reader.addEventListener('loadend', () => element.src = reader.result);
    }
  })

  // Al hacer click en el botón de actualizar imágenes, éstas se enviarán al servidor
  updateImagesBtn.addEventListener('click', () => {
    // Se crea una elemento FormData que contendrá los archivos que fueron subidos por el usuario
    const formData = new FormData();

    const files = imagesInput.files;

    // Se guarda cada archivo dentro del FormData
    for (let i = 0; i < files.length; i++) {
      formData.append('files[]', files[i])
    }

    // Se envía el formulario al servidor con el método POST
    fetch('./upload_images.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      // Recarga la página
      location.reload();
    })
  })
});