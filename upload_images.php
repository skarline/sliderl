<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!empty($_FILES)) {
    // Defino la ruta donde se guardarán las imágenes
    $path = './images';

    // Se vacía la carpeta
    emptyFolder();

    // Cuento cuántas imágenes subió el usuario
    $filesAmount = count($_FILES['files']['tmp_name']);

    // Se sube cada archivo uno por uno
    for ($i = 0; $i < $filesAmount; $i++) {
      // Tomo la extensión del archivo ('png', 'jpg', 'jpeg', etc.)
      $fileName = $_FILES['files']['name'][$i];
      $fileExtention = pathinfo($_FILES['files']['name'][$i], PATHINFO_EXTENSION);
      
      /* Creo la ruta donde se guardará el nuevo archivo:
       * carpeta + número de archivo + extensión del archivo
       */
      $targetPath = "{$path}/{$fileName}.{$fileExtention}";

      // Muevo el archivo a la ruta en el servidor
      move_uploaded_file($_FILES['files']['tmp_name'][$i], $targetPath);
    }
  }
}

function emptyFolder() {
  $files = glob('./images/*');

  foreach($files as $file) {
    unlink($file);
  }
}

?>
