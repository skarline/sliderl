<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slider</title>
  <link rel="stylesheet" href="./css/master.css">
  <link rel="stylesheet" href="./css/slider.css">
  <link rel="stylesheet" href="./css/form.css">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div class="container">
    <div class="text-container" style="display: flex; justify-content: space-between">
      <h1>Slider</h1>
      <div id="open-modal-btn" class="button" style="align-self: center">Subir imágenes</div>
    </div>
    <div class="slider">
      <div class="slider__images"><?php

        $files = glob('./images/*');

        foreach ($files as $file) {
          echo '<img src="' . $file . '">';
        }

        ?></div>
      <div class="slider__actions">
        <div class="back-btn"></div>
        <div class="next-btn"></div>
      </div>
      <div class="indicator"></div>
    </div>
  </div>
  <div class="modal">
    <div class="modal-container">
      <div id="close-modal-btn">✕</div>
      <h3>Cargar imágenes</h1>
      <input type="file" id="fileInput" multiple accept="image/*" style="display:none" />
      <div class="form-images"></div>
      <div class="action" style="justify-content: flex-end">
        <div id="upload-images-btn" class="button gray">Subir imágenes</div>
        <div id="update-images-btn" class="button inactive" style="margin-left: 8px">Actualizar slider</div>
      </div>
    </div>
  </div>
  <script src="js/slider.js"></script>
  <script src="js/modal.js"></script>
  <script src="js/form.js"></script>
</body>
</html>