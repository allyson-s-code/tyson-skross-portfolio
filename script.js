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

var encEmail = "dHlzb25za3Jvc3NAZ21haWwuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));