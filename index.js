// Wait for the DOM content to load before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    // Get the <h1> element with the ID "victory"
    let newHeader = document.getElementById('victory');
  
    // Check if newHeader is not null (meaning the element was found)
    if (newHeader !== null) {
      // Replace "YOUR-NAME" with your actual name in the text content
      newHeader.textContent = 'John Doe is the champion'; // Replace "John Doe" with your actual name
    } else {
      // Log an error message if the element is not found
      console.error('Element with ID "victory" not found.');
    }
  });

  // Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the ID of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your actual name

// Append the <h1> element to the <body> tag
document.body.appendChild(newHeader);
