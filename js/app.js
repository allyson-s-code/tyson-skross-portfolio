/*fetch('data.json')
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
*/

fetch('data.json')
  .then(response => response.json())
  .then(images => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const imgElement = document.getElementById('random-image');

    // Set responsive image URLs
    imgElement.src = selectedImage.urlLarge; // fallback for older browsers

    imgElement.srcset = `
      ${selectedImage.urlSmall} 500w,
      ${selectedImage.urlLarge} 800w,
      ${selectedImage.urlXLarge} 1600w
    `.trim();

    imgElement.sizes = `
      (max-width: 600px) 500px,
      (max-width: 1000px) 800px,
      800px
    `.trim();

    // ✅ Set the alt text
    imgElement.alt = selectedImage.alt || "Artwork image";
 
  // 👇 Fade-in effect when image finishes loading
    imgElement.addEventListener('load', () => {
      imgElement.classList.add('loaded');
    });
})
.catch(error => {
  console.error('Error loading the JSON or image:', error);
});

var encEmail = "dHlzb25za3Jvc3NAZ21haWwuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

