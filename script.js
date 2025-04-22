fetch('data.json')
  .then(response => response.json())
  .then(images => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const imgElement = document.getElementById('random-image');
    imgElement.src = selectedImage.url;
    imgElement.alt = selectedImage.alt || "Artwork image";
  })
  .catch(error => {
    console.error('Error loading the JSON or image:', error);
  });