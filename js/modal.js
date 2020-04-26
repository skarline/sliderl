"use strict";

// Espera a que la ventana termine de cargar
window.addEventListener('load', () => {
  // Obtiene los elementos que se van a necesitar para controlar el modal
  const modalElement = document.querySelector('.modal');
  const openModalBtn = document.querySelector('#open-modal-btn');
  const closeModalBtn = document.querySelector('#close-modal-btn');

  // Al hacer click en el botón para abrir el modal, éste pasará a estar activo
  openModalBtn.addEventListener('click', () => {
    modalElement.classList.toggle('active', true);
  });

  // Al hacer click en el botón para cerrar el modal, éste pasará a estar inactivo
  closeModalBtn.addEventListener('click', () => {
    modalElement.classList.toggle('active', false);
  });
});