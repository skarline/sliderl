"use strict";

// Espera a que la ventana termine de cargar
window.addEventListener('load', () => {
  // Obtiene los elementos que se van a utilizar (slider e indicador)
  const sliderElement = document.querySelector('.slider');
  const imagesContainerElement = document.querySelector('.slider__images');
  const indicatorElement = document.querySelector('.slider > .indicator');

  // Obtiene los botones de 'atrás' y 'siguiente'
  const backButton = document.querySelector('.slider__actions > .back-btn');
  const nextButton = document.querySelector('.slider__actions > .next-btn');

  // Inicializa las varibales que van a controlar el carrusel de imágenes
  let current = 0;
  let imagesCounter = document.querySelectorAll('.slider__images > img').length;
  
  const goBack = () => {
    // Retrocede una imagen, y si la misma es menor que 0, lleva a la última imágen
    if (--current < 0) current += imagesCounter;

    // Reordena las imágenes
    translateImages();
  }

  const goNext = () => {
    // Retrocede una imagen, y si la misma es mayor que la cantidad de imágenes, lleva a la primera imagen
    if (++current >= imagesCounter) current = 0;
    
    // Reordena las imágenes
    translateImages();
  }

  // Agrega un eventListener a cada botón con su función correspondiente para cuando el usuario haga click
  backButton.addEventListener('click', goBack);
  nextButton.addEventListener('click', goNext);

  // Reposiciona las imágenes en caso que la ventana cambie de tamaño
  window.addEventListener('resize', () => {
    translateImages();
  })

  sliderElement.addEventListener('update', () => {
    imagesCounter = document.querySelectorAll('.slider__images > img').length;

    translateImages();
    setupIndicator();
  })

  const translateImages = () => {
    // Posiciona las imágenes dentro del slider

    // Obtiene el ancho actual del slider
    const sliderWidth = sliderElement.getBoundingClientRect().width;

    // Itera las imágenes
    for (let i = 0; i < imagesCounter; i++) {
      const imageElement = imagesContainerElement.children[i];

      // Si el hijo no es una imagen, termina el ciclo
      if (imageElement.tagName != 'IMG') break;

      // Se traslada la imagen a su nueva posición
      imageElement.style.transform = 'translateX(' + parseFloat(sliderWidth * (i - current)) + 'px)';
    }

    // Actualiza el indicador
    updateIndicator();
  }

  const setupIndicator = () => { // Inicializa el indicador
    indicatorElement.innerHTML = '';

    // Por cada imagen se crea un elemento dentro del indicador
    for (let i = 0; i < imagesCounter; i++) {
      let dotElement = document.createElement('DIV');

      // Si el número del elemento coincide con el de la imagen activa, se agrega la clase 'active' que indica que es la imagen actual
      dotElement.classList = 'indicator__dot' + (i === current ? ' active' : '');

      // Se agrega un eventListener para cambiar de imágen desde el indicador
      dotElement.addEventListener('click', () => {
        current = i;

        // Reordena las imágenes
        translateImages();
      })

      // Se agrega el elemento dentro del indicador
      indicatorElement.appendChild(dotElement);
    }
  }

  const updateIndicator = () => { // Actualiza los elementos del indicador1 habiendo cambiado de imagen

    // Se asegura de que el indicador no está vacío (en caso de que aún no se haya cargado en el DOM)
    if (imagesContainerElement.children.length > 0) {

      // Se actualiza la clase de cada elemento)
      for (let i = 0; i < indicatorElement.children.length; i++) {
        // Nuevamente, en caso de que coincida el número de elemento con el de la imagen actual, se agrega la clase 'active'
        indicatorElement.children[i].className = 'indicator__dot' + (i === current ? ' active' : '');
      }
    }
  }

  // Inicializa las imágenes y el indicador
  translateImages();
  setupIndicator();
})