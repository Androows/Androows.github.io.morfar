// Create the image element
var img = document.createElement("img");

// Set the image source, alt text, width, and height
img.src = 'pics/Morfar1.JPG';
img.alt = 'Morfar';
img.width = 600;
img.height = 600;

// Apply styles to the image element
img.style.transform = 'scale(0)';
img.style.transition = 'transform 1s';
img.style.position = 'absolute';
img.style.left = '50%';
img.style.top = '50%';
img.style.marginLeft = -img.width / 2 + 'px';
img.style.marginTop = -img.height / 2 + 'px';

// Add the image to the DOM
document.body.appendChild(img);

// Add the "scaling-animation" class to the image after 4 seconds
setTimeout(function() {
  img.classList.add('scaling-animation');
}, 4000);

// Define the "scaling-animation" CSS class
var css = `
.scaling-animation {
  transform: scale(1);
}
`;
var style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);